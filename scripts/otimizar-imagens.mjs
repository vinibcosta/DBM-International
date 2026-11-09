// Reduz e converte as imagens de /public/images para WebP (bem mais leve).
// Uso: coloque a imagem nova em public/images e rode `npm run otimizar-imagens`.
// O original é apagado e as referências em src/content/site.ts são atualizadas.
import { readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.join("public", "images");
const contentFile = path.join("src", "content", "site.ts");
const MAX_WIDTH = 1600; // maior largura em que uma imagem aparece no site (já contando telas retina)

let content = await readFile(contentFile, "utf8");

for (const file of await readdir(dir)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const src = path.join(dir, file);
  const name = path.basename(file, path.extname(file)) + ".webp";
  const before = (await stat(src)).size;

  const out = await sharp(src)
    .rotate() // respeita a orientação da foto do celular
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: ext === ".png" ? 90 : 75 })
    .toBuffer();
  await writeFile(path.join(dir, name), out);
  await rm(src);

  content = content.replaceAll(`/images/${file}`, `/images/${name}`);
  console.log(`✔ ${file} → ${name}  (${(before / 1024).toFixed(0)} KB → ${(out.length / 1024).toFixed(0)} KB)`);
}

await writeFile(contentFile, content);
console.log("\nPronto.");
