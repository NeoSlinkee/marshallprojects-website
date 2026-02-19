<script>
  const services = [
    { 
      title: 'Interior & Exterior Painting', 
      description: 'Professional painting services for homes and properties, delivering quality finishes that last.',
      image: '/images/services/painting.jpg'
    },
    { 
      title: 'Waterproofing', 
      description: 'Expert waterproofing solutions for roofs, balconies, and walls to protect your property.',
      image: '/images/services/waterproofing.jpg'
    },
    { 
      title: 'Damp Proofing', 
      description: 'Effective damp proofing treatments to eliminate moisture problems and protect your home.',
      image: '/images/services/damp-proofing.jpg'
    },
    { 
      title: 'Roofing Maintenance', 
      description: 'Roof repairs, maintenance, and replacements to keep your property secure and weatherproof.',
      image: '/images/services/roofing.jpg'
    },
    { 
      title: 'General Building Maintenance', 
      description: 'Comprehensive property maintenance services for homeowners, landlords, and tenants.',
      image: '/images/services/building-maintenance.jpg'
    },
    { 
      title: 'Flooring Installation & Repairs', 
      description: 'Professional flooring installation and repair services for all types of residential flooring.',
      image: '/images/services/flooring.jpg'
    }
  ];
</script>

<section class="services-marshall" id="services-marshall">
  <div class="container">
    <div class="section-header">
      <h2>Marshall Projects</h2>
      <p class="subtitle">Handyman & Property Maintenance Services</p>
    </div>
    
    <p class="intro">
      Marshall Projects delivers reliable home and property maintenance services for 
      homeowners, landlords, and tenants across Gauteng.
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
              <span class="fallback-icon">🔨</span>
            </div>
          </div>
          <div class="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services-marshall {
    background: var(--mp-light);
    padding: 5rem 1.5rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--mp-primary);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--mp-secondary);
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
    background: linear-gradient(135deg, var(--mp-primary) 0%, var(--mp-secondary) 100%);
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

  h3 {
    font-size: 1.4rem;
    color: var(--mp-secondary);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .service-content p {
    line-height: 1.7;
    color: var(--text-main);
    flex: 1;
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .services-marshall {
      padding: 4rem 1.5rem;
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

    h3 {
      font-size: 1.25rem;
    }
  }
</style>
