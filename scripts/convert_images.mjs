import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images/our-fecility');
const outputDir = inputDir; // Save in same directory

const landscapeImages = [];
const portraitImages = [];

async function convertImages() {
    try {
        const files = fs.readdirSync(inputDir).filter(file => file.toLowerCase().endsWith('.jpg'));
        console.log(`Found ${files.length} images to process.`);

        for (const file of files) {
            const inputPath = path.join(inputDir, file);
            const outputFilename = file.replace(/\.(jpg|jpeg)$/i, '.avif');
            const outputPath = path.join(outputDir, outputFilename);

            const image = sharp(inputPath);
            const metadata = await image.metadata();

            // Resize if too large
            if (metadata.width > 2500 || metadata.height > 2500) {
                image.resize({
                    width: 2500,
                    height: 2500,
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }

            // Convert to AVIF
            await image
                .avif({ quality: 50, effort: 4 }) // Quality 50 should yield small files
                .toFile(outputPath);

            // Get new metadata for classification and size check
            const newMetadata = await sharp(outputPath).metadata();
            const stats = fs.statSync(outputPath);
            const sizeKb = (stats.size / 1024).toFixed(2);

            console.log(`Processed ${file} -> ${outputFilename} (${sizeKb} KB)`);

            const relativePath = `/images/our-fecility/${outputFilename}`;
            if (newMetadata.width >= newMetadata.height) {
                landscapeImages.push(relativePath);
            } else {
                portraitImages.push(relativePath);
            }
        }

        console.log('\n--- Landscape Images ---');
        console.log(JSON.stringify(landscapeImages, null, 2));

        console.log('\n--- Portrait Images ---');
        console.log(JSON.stringify(portraitImages, null, 2));

    } catch (err) {
        console.error('Error processing images:', err);
    }
}

convertImages();
