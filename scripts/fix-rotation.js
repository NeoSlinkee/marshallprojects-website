/**
 * Fix EXIF rotation on gallery images
 * Re-saves images with proper orientation and strips EXIF data
 * Also reports 0-byte (broken) files
 * 
 * Run: node scripts/fix-rotation.js
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, '..', 'static', 'images', 'gallery');
const heroDir = path.join(__dirname, '..', 'static', 'images', 'hero');
const servicesDir = path.join(__dirname, '..', 'static', 'images', 'services');
const mapsDir = path.join(__dirname, '..', 'static', 'images', 'maps');
const miscDir = path.join(__dirname, '..', 'static', 'images', 'misc');

async function fixImages(dir, label) {
  let files;
  try {
    files = await fs.readdir(dir);
  } catch {
    console.log(`  Skipping ${label}: directory not found`);
    return;
  }

  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  console.log(`\n[${label}] Found ${imageFiles.length} images`);

  for (const file of imageFiles) {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);
    
    if (stats.size === 0) {
      console.log(`  BROKEN (0 bytes): ${file}`);
      continue;
    }

    try {
      const metadata = await sharp(filePath).metadata();
      const hasExifRotation = metadata.orientation && metadata.orientation !== 1;
      
      if (hasExifRotation) {
        console.log(`  Fixing rotation (orientation=${metadata.orientation}): ${file}`);
        const buffer = await sharp(filePath)
          .rotate() // Auto-rotate based on EXIF
          .jpeg({ quality: 85 })
          .toBuffer();
        await fs.writeFile(filePath, buffer);
        console.log(`    Fixed: ${file}`);
      } else {
        // Even without rotation, strip EXIF to reduce file size
        const buffer = await sharp(filePath)
          .jpeg({ quality: 85 })
          .toBuffer();
        
        // Only overwrite if the new file is smaller or same
        if (buffer.length <= stats.size) {
          await fs.writeFile(filePath, buffer);
          const savedKB = ((stats.size - buffer.length) / 1024).toFixed(1);
          if (savedKB > 1) {
            console.log(`  Optimized: ${file} (saved ${savedKB} KB)`);
          }
        }
      }
    } catch (err) {
      console.log(`  Error processing ${file}: ${err.message}`);
    }
  }
}

async function main() {
  console.log('=== Image Rotation Fix & Optimization ===\n');
  
  await fixImages(galleryDir, 'Gallery');
  await fixImages(heroDir, 'Hero');
  await fixImages(servicesDir, 'Services');
  await fixImages(mapsDir, 'Maps');
  await fixImages(miscDir, 'Misc');
  
  console.log('\n=== Done ===');
}

main().catch(console.error);
