import fs from 'fs';
import path, { relative } from 'path';
import sharp from 'sharp';

const inputDir = './input';
const outputDir = './output';
const metadataFile = path.join(outputDir, 'metadata.json');

async function procesarImagen(inputPath, outputPath) {
  const image = sharp(inputPath);

  // Leemos metadatos iniciales (tamaño original)
  const metaOriginal = await image.metadata();

  // Usamos .trim() para recortar zonas transparentes
  const trimmed = image.trim();

  const metaTrimmed = await trimmed.toFile(outputPath);

  // Calculamos desplazamiento relativo (offset)
  const offsetX = metaTrimmed.trimOffsetLeft * -1 ?? (metaOriginal.width - metaTrimmed.width);
  const offsetY = metaTrimmed.trimOffsetTop * -1 ?? (metaOriginal.height - metaTrimmed.height);

  // Guardamos imagen recortada

  // Devolvemos datos relevantes
  return {
    file: path.basename(inputPath),
    output: path.basename(outputPath),
    width: metaTrimmed.width,
    height: metaTrimmed.height,
    relativeWidth: metaTrimmed.width / metaOriginal.width,
    relativeHeight: metaTrimmed.height / metaOriginal.height,
    offsetX,
    offsetY,
    relativeOffsetX: offsetX / metaOriginal.width,
    relativeOffsetY: offsetY / metaOriginal.height,
    originalWidth: metaOriginal.width,
    originalHeight: metaOriginal.height,
  };
}

async function main() {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));
  const metadata = [];

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    console.log(`✂️  Procesando: ${file}...`);

    try {
      const data = await procesarImagen(inputPath, outputPath);
      metadata.push(data);
      console.log(`✅ Guardado en ${outputPath}`);
    } catch (err) {
      console.error(`❌ Error procesando ${file}:`, err);
    }
  }

  fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
  console.log(`📄 Archivo de metadatos generado: ${metadataFile}`);
}

main();
