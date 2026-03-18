/**
 * Gallery Management Script
 * 
 * This script scans the gallery folder and updates gallery.json
 * Run with: npm run update-gallery
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = path.join(__dirname, '../static/images/gallery');
const dataDir = path.join(__dirname, '../src/lib/data');
const jsonPath = path.join(dataDir, 'gallery.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Read existing gallery.json if it exists
let existingImages = {};
try {
  const existing = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  existing.images.forEach(img => {
    existingImages[img.src] = img;
  });
} catch (e) {
  console.log('No existing gallery.json found, creating new one...');
}

// Scan gallery folder for images
const files = fs.readdirSync(galleryDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext);
});

console.log(`Found ${files.length} images in gallery folder`);

// Build gallery data
const images = files.map((file, index) => {
  const src = `/images/gallery/${file}`;
  
  // Use existing metadata if available
  if (existingImages[src]) {
    return existingImages[src];
  }
  
  // Generate default metadata for new images
  return {
    src,
    alt: `Gallery image ${index + 1}`,
    caption: 'Service Project',
    location: 'Gauteng'
  };
});

// Sort by filename (newest first if using date-based names)
images.sort((a, b) => {
  const nameA = path.basename(a.src);
  const nameB = path.basename(b.src);
  return nameB.localeCompare(nameA);
});

// Write updated gallery.json
const galleryData = { images };
fs.writeFileSync(jsonPath, JSON.stringify(galleryData, null, 2));

console.log(`✓ Updated gallery.json with ${images.length} images`);
console.log('\nTo customize captions/locations, edit:');
console.log(`  ${jsonPath}`);
console.log('\nThen rebuild: npm run build');
