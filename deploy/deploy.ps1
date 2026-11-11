# Publica o site na VPS: gera o HTML estático e envia para /root/dbm-site/html.
# Usa o atalho "vps-dbm" do ~/.ssh/config (login por chave).
# Uso (na raiz do projeto): .\deploy\deploy.ps1
param(
    [string]$Url = "https://novo.educationdbm.com"
)

function Run($desc, [scriptblock]$cmd) {
    Write-Host "==> $desc"
    & $cmd
    if ($LASTEXITCODE -ne 0) { throw "Falhou: $desc" }
}

Set-Location (Split-Path $PSScriptRoot)

Run "Gerando o site (npm run build)" { npm run build }
Run "Preparando pasta de envio" { ssh vps-dbm "rm -rf /root/dbm-site/upload && mkdir -p /root/dbm-site/upload" }
Run "Enviando out/" { scp -r -q out vps-dbm:/root/dbm-site/upload/ }
# rsync troca só o que mudou; o nginx serve os arquivos novos na hora, sem reiniciar nada
Run "Publicando" { ssh vps-dbm "rsync -a --delete /root/dbm-site/upload/out/ /root/dbm-site/html/ && rm -rf /root/dbm-site/upload" }

$code = curl.exe -s -o NUL -w "%{http_code}" --max-time 15 $Url
if ($code -ne "200") { throw "$Url respondeu $code" }
Write-Host "Site atualizado! $Url -> $code"
