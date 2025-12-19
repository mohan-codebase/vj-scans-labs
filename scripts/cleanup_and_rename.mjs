import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images/our-fecility');
const imageDataFile = path.join(__dirname, 'image_data.json');
const outputDataFile = path.join(__dirname, 'image_data_renamed.json');

async function cleanupAndRename() {
    try {
        // 1. Delete JPGs
        const files = fs.readdirSync(imagesDir);
        for (const file of files) {
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                fs.unlinkSync(path.join(imagesDir, file));
                console.log(`Deleted: ${file}`);
            }
        }
        console.log('--- raw images deleted ---');

        // 2. Rename AVIFs
        if (!fs.existsSync(imageDataFile)) {
            console.error('image_data.json not found. Run classify_images.mjs first.');
            return;
        }

        const data = JSON.parse(fs.readFileSync(imageDataFile, 'utf8'));
        const renamedData = { landscape: [], portrait: [] };

        // Process Landscape
        data.landscape.forEach((item, index) => {
            const oldFilename = path.basename(item.image);
            const newFilename = `facility-landscape-${String(index + 1).padStart(2, '0')}.avif`;

            const oldPath = path.join(imagesDir, oldFilename);
            const newPath = path.join(imagesDir, newFilename);

            if (fs.existsSync(oldPath)) {
                fs.renameSync(oldPath, newPath);
                console.log(`Renamed: ${oldFilename} -> ${newFilename}`);
                renamedData.landscape.push({
                    id: index + 1,
                    image: `/images/our-fecility/${newFilename}`,
                    mobileImage: `/images/our-fecility/${newFilename}`,
                    bgColor: item.bgColor
                });
            } else if (fs.existsSync(newPath)) {
                // Already renamed (idempotency check)
                console.log(`Skipped (already renamed): ${newFilename}`);
                renamedData.landscape.push({
                    id: index + 1,
                    image: `/images/our-fecility/${newFilename}`,
                    mobileImage: `/images/our-fecility/${newFilename}`,
                    bgColor: item.bgColor
                });
            } else {
                console.warn(`File not found: ${oldPath}`);
            }
        });

        // Process Portrait
        data.portrait.forEach((item, index) => {
            const oldFilename = path.basename(item.image);
            const newFilename = `facility-portrait-${String(index + 1).padStart(2, '0')}.avif`;

            const oldPath = path.join(imagesDir, oldFilename);
            const newPath = path.join(imagesDir, newFilename);

            if (fs.existsSync(oldPath)) {
                fs.renameSync(oldPath, newPath);
                console.log(`Renamed: ${oldFilename} -> ${newFilename}`);
                renamedData.portrait.push({
                    id: index + 1,
                    image: `/images/our-fecility/${newFilename}`,
                    mobileImage: `/images/our-fecility/${newFilename}`,
                    bgColor: item.bgColor
                });
            } else if (fs.existsSync(newPath)) {
                // Already renamed (idempotency check)
                console.log(`Skipped (already renamed): ${newFilename}`);
                renamedData.portrait.push({
                    id: index + 1,
                    image: `/images/our-fecility/${newFilename}`,
                    mobileImage: `/images/our-fecility/${newFilename}`,
                    bgColor: item.bgColor
                });
            } else {
                console.warn(`File not found: ${oldPath}`);
            }
        });

        fs.writeFileSync(outputDataFile, JSON.stringify(renamedData, null, 2));
        console.log('Renamed image data written to scripts/image_data_renamed.json');

    } catch (err) {
        console.error('Error during cleanup/rename:', err);
    }
}

cleanupAndRename();
