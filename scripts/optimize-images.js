/**
 * Image Optimization Script
 * 
 * This script optimizes images in the static/images folder by:
 * 1. Compressing JPG/PNG images
 * 2. Generating WebP versions for modern browsers
 * 3. Creating multiple sizes for responsive images
 * 
 * Run: npm run optimize-images
 * 
 * Prerequisites:
 * npm install sharp --save-dev
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  inputDir: path.join(__dirname, '..', 'static', 'images'),
  outputDir: path.join(__dirname, '..', 'static', 'images', 'optimized'),
  
  // Size thresholds (in KB) - images larger than this will be optimized
  maxSizeKB: 200,
  
  // Quality settings
  quality: {
    jpeg: 80,
    webp: 80,
    png: 80
  },
  
  // Maximum dimensions (larger images will be resized)
  maxDimensions: {
    hero: { width: 1920, height: 1080 },
    gallery: { width: 1200, height: 900 },
    thumbnail: { width: 600, height: 450 },
    default: { width: 1600, height: 1200 }
  },
  
  // Generate these additional sizes for srcset
  responsiveSizes: [640, 768, 1024, 1280, 1920]
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function getImageFiles(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'optimized') {
      await getImageFiles(fullPath, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

async function getFileSizeKB(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size / 1024;
}

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath);
  const ext = path.extname(filename).toLowerCase();
  const nameWithoutExt = path.basename(filename, ext);
  
  const sizeKB = await getFileSizeKB(inputPath);
  
  // Skip small images
  if (sizeKB <= config.maxSizeKB) {
    console.log(`✓ Skipping ${filename} (${sizeKB.toFixed(1)}KB - already optimized)`);
    return { skipped: true, filename };
  }
  
  console.log(`⚡ Optimizing ${filename} (${sizeKB.toFixed(1)}KB)...`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Determine max dimensions based on image path
    let maxDims = config.maxDimensions.default;
    if (inputPath.includes('hero')) {
      maxDims = config.maxDimensions.hero;
    } else if (inputPath.includes('gallery')) {
      maxDims = config.maxDimensions.gallery;
    }
    
    // Calculate resize dimensions while maintaining aspect ratio
    let resizeOptions = {};
    if (metadata.width > maxDims.width || metadata.height > maxDims.height) {
      resizeOptions = {
        width: maxDims.width,
        height: maxDims.height,
        fit: 'inside',
        withoutEnlargement: true
      };
    }
    
    // Create optimized JPEG
    const jpegPath = path.join(outputDir, `${nameWithoutExt}.jpg`);
    await sharp(inputPath)
      .resize(resizeOptions)
      .jpeg({ quality: config.quality.jpeg, progressive: true })
      .toFile(jpegPath);
    
    const newSizeKB = await getFileSizeKB(jpegPath);
    
    // Create WebP version (usually 25-35% smaller)
    const webpPath = path.join(outputDir, `${nameWithoutExt}.webp`);
    await sharp(inputPath)
      .resize(resizeOptions)
      .webp({ quality: config.quality.webp })
      .toFile(webpPath);
    
    const webpSizeKB = await getFileSizeKB(webpPath);
    
    console.log(`  ✓ JPG: ${sizeKB.toFixed(0)}KB → ${newSizeKB.toFixed(0)}KB (${((1 - newSizeKB/sizeKB) * 100).toFixed(0)}% reduction)`);
    console.log(`  ✓ WebP: ${webpSizeKB.toFixed(0)}KB (${((1 - webpSizeKB/sizeKB) * 100).toFixed(0)}% reduction)`);
    
    return {
      original: sizeKB,
      optimized: newSizeKB,
      webp: webpSizeKB,
      filename
    };
  } catch (error) {
    console.error(`  ✗ Error optimizing ${filename}:`, error.message);
    return { error: true, filename, message: error.message };
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log('Configuration:');
  console.log(`  Max file size: ${config.maxSizeKB}KB`);
  console.log(`  JPEG quality: ${config.quality.jpeg}`);
  console.log(`  WebP quality: ${config.quality.webp}\n`);
  
  // Ensure output directory exists
  await ensureDir(config.outputDir);
  
  // Get all image files
  const imageFiles = await getImageFiles(config.inputDir);
  console.log(`Found ${imageFiles.length} images\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let optimizedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const imagePath of imageFiles) {
    const result = await optimizeImage(imagePath, config.outputDir);
    
    if (result.skipped) {
      skippedCount++;
    } else if (result.error) {
      errorCount++;
    } else {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      optimizedCount++;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('Summary:');
  console.log(`  Optimized: ${optimizedCount} images`);
  console.log(`  Skipped: ${skippedCount} images (already small)`);
  console.log(`  Errors: ${errorCount} images`);
  
  if (optimizedCount > 0) {
    const savedKB = totalOriginal - totalOptimized;
    console.log(`\n  Total savings: ${(savedKB / 1024).toFixed(2)}MB (${((savedKB/totalOriginal) * 100).toFixed(0)}% reduction)`);
    console.log(`\n  Optimized images saved to: ${config.outputDir}`);
  }
  
  console.log('\nNext steps:');
  console.log('1. Review optimized images in static/images/optimized/');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update component paths if using WebP with fallback');
}

main().catch(console.error);
