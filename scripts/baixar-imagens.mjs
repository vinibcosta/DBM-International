// Baixa as imagens que hoje estão no Wix para /public/images.
// Uso: npm run baixar-imagens
// Depois troque as URLs em src/content/site.ts por "/images/<arquivo>".
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const src = await readFile("src/content/site.ts", "utf8");
const ids = [...new Set([...src.matchAll(/wix\("([^"]+)"\)/g)].map((m) => m[1]))];
const outDir = path.join("public", "images");
await mkdir(outDir, { recursive: true });

for (const id of ids) {
  const url = `https://static.wixstatic.com/media/${id}`;
  const ext = path.extname(id.split("~")[1] ?? "") || ".jpg";
  const name = id.split("~")[0] + ext;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(path.join(outDir, name), Buffer.from(await res.arrayBuffer()));
    console.log(`✔ ${name}`);
  } catch (e) {
    console.log(`✘ ${id} — ${e.message}`);
  }
}
console.log(`\nPronto. Arquivos em ${outDir}`);
