<script>
  const galleryImages = [
    { src: '/images/gallery/pool-1.jpg', alt: 'Pool renovation project', caption: 'Pool Renovation', location: 'Randburg' },
    { src: '/images/gallery/pool-2.jpg', alt: 'Crystal clear pool water', caption: 'Water Treatment', location: 'Bryanston' },
    { src: '/images/gallery/pool-3.jpg', alt: 'Pool refurbishment complete', caption: 'Refurbishment', location: 'Sandton' },
    { src: '/images/gallery/pool-4.jpg', alt: 'Green to clean transformation', caption: 'Green to Clean', location: 'Fourways' },
    { src: '/images/gallery/pool-5.jpg', alt: 'Pool lighting installation', caption: 'Lighting Install', location: 'Randburg' },
    { src: '/images/gallery/pool-6.jpg', alt: 'Complete pool service', caption: 'Full Service', location: 'Bryanston' },
    { src: '/images/gallery/pool-7.jpg', alt: 'Pool maintenance', caption: 'Pool Maintenance', location: 'Sandton' },
    { src: '/images/gallery/pool-8.jpg', alt: 'Handyman repairs', caption: 'Handyman Repairs', location: 'Randburg' },
    { src: '/images/gallery/pool-9.jpg', alt: 'Property maintenance', caption: 'Property Maintenance', location: 'Fourways' }
  ];

  let selectedImage = null;

  function openLightbox(image) {
    selectedImage = image;
  }

  function closeLightbox() {
    selectedImage = null;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="gallery" id="gallery">
  <div class="container">
    <div class="section-header">
      <h2>Our Recent Work</h2>
      <p class="subtitle">Real projects from satisfied Gauteng homeowners</p>
    </div>

    <div class="gallery-grid">
      {#each galleryImages as image, index}
        <button 
          class="gallery-item"
          on:click={() => openLightbox(image)}
          aria-label="View {image.alt}"
        >
          <div class="image-wrapper">
            <img 
              src={image.src} 
              alt={image.alt}
              loading="lazy"
              on:error={(e) => e.target.style.display = 'none'}
            />
            <div class="image-overlay">
              <div class="caption-wrapper">
                <span class="caption-title">{image.caption}</span>
                <span class="caption-location">{image.location}</span>
              </div>
            </div>
          </div>
          <div class="image-fallback">
            <span class="fallback-icon">📷</span>
            <span class="fallback-text">{image.caption}</span>
          </div>
        </button>
      {/each}
    </div>

    <p class="gallery-note">
      <em>Images showcase our actual pool maintenance and renovation work across Gauteng.</em>
    </p>
  </div>
</section>

{#if selectedImage}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
  <div 
    class="lightbox"
    on:click={closeLightbox}
    role="dialog"
    aria-modal="true"
    aria-label="Image lightbox"
  >
    <button class="lightbox-close" on:click={closeLightbox} aria-label="Close lightbox">
      ✕
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="lightbox-content" on:click|stopPropagation role="presentation">
      <img src={selectedImage.src} alt={selectedImage.alt} />
      <p class="lightbox-caption">{selectedImage.caption}</p>
    </div>
  </div>
{/if}

<style>
  .gallery {
    background: var(--bg-main);
    padding: 5rem 1.5rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--mp-primary);
    opacity: 0.8;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
    margin-bottom: 2.5rem;
  }

  .gallery-item {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    border: none;
    padding: 0;
    background: var(--aqua-tint);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
  }

  .gallery-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .image-wrapper {
    position: absolute;
    inset: 0;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.08);
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(27, 111, 174, 0.95) 0%,
      rgba(27, 111, 174, 0.6) 40%,
      transparent 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  .gallery-item:hover .image-overlay {
    opacity: 1;
  }

  .caption-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .caption-title {
    color: white;
    font-weight: 700;
    font-size: 1.15rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .caption-location {
    color: white;
    font-size: 0.95rem;
    opacity: 0.9;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .image-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, var(--aqua-tint), var(--aqua-light));
    z-index: -1;
  }

  .fallback-icon {
    font-size: 2.5rem;
    opacity: 0.5;
  }

  .fallback-text {
    color: var(--aqua-secondary);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .gallery-note {
    text-align: center;
    color: var(--mp-primary);
    opacity: 0.7;
    font-size: 0.95rem;
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 2rem;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    transition: all var(--transition-base);
  }

  .lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  .lightbox-content {
    max-width: 90vw;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 75vh;
    object-fit: contain;
    border-radius: var(--radius-md);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  .lightbox-caption {
    color: white;
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .gallery {
      padding: 4rem 1.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    .gallery-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .image-overlay {
      opacity: 1;
      background: linear-gradient(
        to top,
        rgba(27, 111, 174, 0.8) 0%,
        transparent 60%
      );
    }

    .lightbox {
      padding: 1rem;
    }

    .lightbox-close {
      top: 1rem;
      right: 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
