# Site DBM International Education (Next.js)

Recriação do site educationdbm.com (Wix) em **Next.js 15 + TypeScript + Tailwind CSS 4**.

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

Hoje as imagens são carregadas direto do servidor do Wix. Antes de cancelar o Wix:

```bash
npm run baixar-imagens
```

Isso salva tudo em `public/images/`. Depois troque as URLs em `src/content/site.ts`
(ex.: `images.logo = "/images/06900b_1b3c02f2b2bb414286912cabefaab261.png"`).

Logos de parceiros: coloque em `public/images/parceiros/` e adicione `logo: "/images/parceiros/arquivo.png"` no item da lista `partners`.

## Formulário de contato

Sem configuração, o botão "Enviar" abre o e-mail do visitante já preenchido.
Para receber os envios direto no e-mail da DBM:

1. Crie uma conta grátis em https://formspree.io e um formulário apontando para info@educationdbm.com
2. Cole a URL em `contato.formEndpoint` no `src/content/site.ts`

## Publicar

O jeito mais simples é a **Vercel** (grátis):
1. Suba o projeto para um repositório no GitHub
2. Em vercel.com → *Add New Project* → importe o repositório → *Deploy*
3. Em *Settings → Domains*, adicione `educationdbm.com` e siga as instruções de DNS

## Pendências (conferir com a DBM)

- Cores e fontes exatas da marca (as atuais são uma proposta — ajuste em `globals.css`)
- Imagem do card "Estude inglês e trabalhe" (Irlanda)
- Logos dos parceiros e selos/prêmios da página "Sobre"
- Tabela de níveis educacionais em `/estudar` (conferir equivalências)
- Texto oficial da política de privacidade
