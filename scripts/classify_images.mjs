import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images/our-fecility');
const outputFile = path.join(__dirname, 'image_data.json');

const landscapeImages = [];
const portraitImages = [];

async function classifyImages() {
    try {
        const files = fs.readdirSync(inputDir).filter(file => file.toLowerCase().endsWith('.avif'));

        for (const file of files) {
            const filePath = path.join(inputDir, file);
            const metadata = await sharp(filePath).metadata();

            const relativePath = `/images/our-fecility/${file}`;
            if (metadata.width >= metadata.height) {
                landscapeImages.push({
                    id: landscapeImages.length + 1,
                    image: relativePath,
                    mobileImage: relativePath,
                    // Add a default bg color or cycle through some if needed, but for now simple
                });
            } else {
                portraitImages.push({
                    id: portraitImages.length + 1,
                    image: relativePath,
                    mobileImage: relativePath,
                });
            }
        }

        const data = {
            landscape: landscapeImages,
            portrait: portraitImages
        };

        fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
        console.log('Image data written to scripts/image_data.json');

    } catch (err) {
        console.error('Error:', err);
    }
}

classifyImages();
