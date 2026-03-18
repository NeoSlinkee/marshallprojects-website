<script>
  const services = [
    { 
      title: 'Pool Maintenance', 
      description: 'Weekly and monthly pool servicing, water balancing, and chemical testing for optimal pool health.',
      image: '/images/gallery/pool-1.jpg'
    },
    { 
      title: 'Pool Repairs', 
      description: 'Professional pool equipment repairs, leak detection, and structural repairs to keep your pool functioning perfectly.',
      image: '/images/gallery/pool-2.jpg'
    },
    { 
      title: 'Pool Refurbishments', 
      description: 'Complete pool renovations including resurfacing, tiling, coping, and green-to-clean transformations.',
      image: '/images/gallery/pool-3.jpg'
    },
    { 
      title: 'Pool Heating', 
      description: 'Solar heating and heat pump installations to enjoy your pool year-round in any weather.',
      image: '/images/gallery/pool-heating.jpg'
    },
    { 
      title: 'Pump Installations', 
      description: 'New pump installations, replacements, and upgrades for energy-efficient pool circulation.',
      image: '/images/gallery/pool-5.jpg'
    },
    { 
      title: 'Filter Sand Changes', 
      description: 'Filter sand replacements and system upgrades to maintain crystal clear water quality.',
      image: '/images/gallery/pool-sand-change.jpg'
    }
  ];
</script>

<section class="services-aqua" id="services-aqua">
  <div class="container">
    <div class="section-header">
      <h2>Aqua-Genie</h2>
      <p class="subtitle">Swimming Pool Maintenance & Repairs</p>
    </div>
    
    <p class="intro">
      Aqua-Genie provides complete swimming pool maintenance services to keep your pool 
      clean, safe, and ready to use all year round.
    </p>

    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <div class="service-image-wrapper">
            <img 
              src={service.image} 
              alt={service.title}
              loading="lazy"
              on:error={(e) => e.target.parentElement.classList.add('image-error')}
            />
            <div class="image-overlay"></div>
            <div class="service-fallback">
              <span class="fallback-icon">🏊</span>
            </div>
          </div>
          <div class="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <p class="tagline">Everything for your pool — to keep you swimming.</p>
  </div>
</section>

<style>
  .services-aqua {
    background: linear-gradient(180deg, var(--aqua-light), var(--aqua-tint));
    padding: 5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--aqua-primary);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--aqua-secondary);
    font-weight: 600;
  }

  .intro {
    max-width: 700px;
    margin: 0 auto 3.5rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .service-card {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  .service-image-wrapper {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, var(--aqua-primary) 0%, var(--aqua-secondary) 100%);
  }

  .service-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }

  .service-card:hover .service-image-wrapper img {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    pointer-events: none;
  }

  .service-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .service-image-wrapper.image-error .service-fallback {
    opacity: 1;
  }

  .service-image-wrapper.image-error img {
    display: none;
  }

  .fallback-icon {
    font-size: 4rem;
    opacity: 0.7;
  }

  .service-content {
    padding: 1.75rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .service-content h3 {
    font-size: 1.4rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .service-content p {
    line-height: 1.7;
    color: var(--text-main);
    flex: 1;
  }

  .tagline {
    text-align: center;
    font-size: 1.3rem;
    color: var(--aqua-secondary);
    font-weight: 600;
    font-style: italic;
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .services-aqua {
      padding: 4rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    h2 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-content {
      padding: 1.5rem;
    }

    .service-content h3 {
      font-size: 1.25rem;
    }

    .tagline {
      font-size: 1.15rem;
    }
  }
</style>
