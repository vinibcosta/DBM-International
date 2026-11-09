# Site DBM International Education (Next.js)

Recriação do site educationdbm.com (Wix) em **Next.js 15 + TypeScript + Tailwind CSS 4**.

🔗 **Site no ar:** https://dbmv1.vercel.app/

## Rodar no seu computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Onde editar

| O que você quer mudar | Arquivo |
|---|---|
| Textos, menu, programas, parceiros, contatos, links | `src/content/site.ts` |
| Cores e fontes do site inteiro | `src/app/globals.css` (bloco `@theme`) |
| Layout de cada página | `src/app/<pagina>/page.tsx` |
| Cabeçalho / rodapé / blocos reutilizáveis | `src/components/` |

## Páginas

| URL | Arquivo |
|---|---|
| `/` | `src/app/page.tsx` |
| `/sobre` | `src/app/sobre/page.tsx` |
| `/estudar` | `src/app/estudar/page.tsx` |
| `/form` (contato) | `src/app/form/page.tsx` |
| `/politicadbm` | `src/app/politicadbm/page.tsx` |

As URLs são as mesmas do site atual, então links antigos continuam funcionando.

## Imagens

As imagens ficam em `public/images/` (o logo fica em `public/logo-dbm.png`). Para trocar ou adicionar uma:

1. Coloque o arquivo (.jpg, .jpeg ou .png) em `public/images/`
2. Use o caminho em `src/content/site.ts` (ex.: `logo: "/images/arquivo.png"` num parceiro)
3. Rode:

```bash
npm run otimizar-imagens
```

Isso reduz a imagem, converte para WebP (bem mais leve) e atualiza o caminho no `site.ts` sozinho.

## Formulário de contato

Sem configuração, o botão "Enviar" abre o e-mail do visitante já preenchido.
Para receber os envios direto no e-mail da DBM:

1. Crie uma conta grátis em https://formspree.io e um formulário apontando para info@educationdbm.com
2. Cole a URL em `contato.formEndpoint` no `src/content/site.ts`

## Publicar (VPS Hostinger)

O site é exportado como HTML estático (`npm run build` gera a pasta `out/`) e servido pelo Nginx.
A configuração do Nginx está em `deploy/nginx.conf`.

Para atualizar o site depois de fazer `git push`, rode na VPS:

```bash
bash /var/www/dbm-site/deploy/atualizar.sh
```

## Pendências (conferir com a DBM)

- Cores e fontes exatas da marca (as atuais são uma proposta — ajuste em `globals.css`)
- Imagem do card "Estude inglês e trabalhe" (Irlanda)
- Selos/prêmios da página "Sobre"
- Tabela de níveis educacionais em `/estudar` (conferir equivalências)
- Texto oficial da política de privacidade
