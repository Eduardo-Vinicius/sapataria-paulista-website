// Uso: node scripts/optimize-images.mjs <pasta-de-origem> [largura-maxima]
// Gera JPGs otimizados em public/images com nomes em minúsculas e sem acentos.
import { readdir, mkdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const [, , sourceDir, maxWidthArg] = process.argv
const maxWidth = Number(maxWidthArg) || 2000
const outputDir = path.resolve("public/images")

if (!sourceDir) {
  console.error("Informe a pasta de origem: node scripts/optimize-images.mjs fotos/sessao-novembro")
  process.exit(1)
}

const slugify = (name) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

await mkdir(outputDir, { recursive: true })
const files = (await readdir(sourceDir)).filter((file) => /\.(jpe?g|png|webp|heic)$/i.test(file))

for (const file of files) {
  const output = path.join(outputDir, `${slugify(path.parse(file).name)}.jpg`)
  await sharp(path.join(sourceDir, file))
    .rotate()
    .resize({ width: maxWidth, height: maxWidth, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(output)
  console.log(`${file} -> ${path.relative(process.cwd(), output)}`)
}
