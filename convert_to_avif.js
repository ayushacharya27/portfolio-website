import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const convertToAVIF = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .avif({
        quality: 80,
        effort: 4, // Higher effort = better compression but slower
        chromaSubsampling: '4:4:4'
      })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
};

const processDirectory = async () => {
  const publicDir = path.join(__dirname, 'public');
  const files = fs.readdirSync(publicDir);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, `${path.parse(file).name}.avif`);
      await convertToAVIF(inputPath, outputPath);
    }
  }
};

processDirectory().then(() => {
  console.log('Conversion complete!');
}); 