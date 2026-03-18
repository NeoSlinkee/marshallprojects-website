/**
 * Cloudinary Configuration
 * 
 * To enable Cloudinary:
 * 1. Sign up at cloudinary.com (free)
 * 2. Get your Cloud Name from the dashboard
 * 3. Set CLOUD_NAME below
 * 4. Create a folder or use a tag for your gallery images
 * 5. Enable "Resource list" in Settings > Security > Restricted media types
 */

export const cloudinaryConfig = {
  // Set your Cloudinary cloud name here (find it in your Cloudinary dashboard)
  // Leave empty to use local images from static/images/gallery/
  cloudName: 'dz905w7fw',
  
  // The tag used to identify gallery images in Cloudinary
  // When you upload images to Cloudinary, add this tag to include them in the gallery
  galleryTag: 'marshall-gallery',
  
  // Image transformations (Cloudinary's automatic optimization)
  transforms: {
    thumbnail: 'c_fill,w_600,h_450,q_auto,f_auto',  // Gallery grid
    lightbox: 'c_limit,w_1600,h_1200,q_auto,f_auto', // Lightbox view
  }
};

/**
 * Build Cloudinary URL for an image
 */
export function getCloudinaryUrl(publicId, transform = 'thumbnail') {
  const { cloudName, transforms } = cloudinaryConfig;
  if (!cloudName) return null;
  
  const transformation = transforms[transform] || transforms.thumbnail;
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`;
}

/**
 * Fetch gallery images from Cloudinary
 * Returns null if Cloudinary is not configured
 */
export async function fetchCloudinaryGallery() {
  const { cloudName, galleryTag } = cloudinaryConfig;
  
  if (!cloudName) {
    console.log('Cloudinary not configured, using local images');
    return null;
  }
  
  try {
    const response = await fetch(
      `https://res.cloudinary.com/${cloudName}/image/list/${galleryTag}.json`
    );
    
    if (!response.ok) {
      console.warn('Cloudinary fetch failed, falling back to local images');
      return null;
    }
    
    const data = await response.json();
    
    // Transform Cloudinary response to our gallery format
    return data.resources.map((resource, index) => ({
      src: getCloudinaryUrl(resource.public_id, 'thumbnail'),
      srcLarge: getCloudinaryUrl(resource.public_id, 'lightbox'),
      alt: resource.context?.custom?.alt || `Gallery image ${index + 1}`,
      caption: resource.context?.custom?.caption || 'Service Project',
      location: resource.context?.custom?.location || 'Gauteng',
      publicId: resource.public_id
    }));
  } catch (error) {
    console.error('Error fetching from Cloudinary:', error);
    return null;
  }
}

/**
 * Check if Cloudinary is configured
 */
export function isCloudinaryEnabled() {
  return Boolean(cloudinaryConfig.cloudName);
}
