<script>
  const services = [
    { text: 'Interior and exterior painting', icon: '🎨' },
    { text: 'Roofing maintenance and repairs', icon: '🏠' },
    { text: 'Flooring installation and repairs', icon: '📐' },
    { text: 'Damp proofing', icon: '💧' },
    { text: 'Waterproofing solutions', icon: '🛡️' },
    { text: 'General handyman services', icon: '🔨' },
    { text: 'Electrical work', icon: '⚡' },
    { text: 'Plumbing services', icon: '🚰' },
    { text: 'Tiling', icon: '◻️' },
    { text: 'General building maintenance', icon: '🏗️' },
    { text: 'Home maintenance for tenants and owners', icon: '🔑' }
  ];

  const additionalServices = [
    { text: 'Decor solutions (blinds, curtains, wall panels, mirrors)', icon: '🪟' },
    { text: 'Decking solutions', icon: '🌳' },
    { text: 'Security-related installations', icon: '🔒' },
    { text: 'Furniture and rug installations', icon: '🛋️' },
    { text: 'Solar panel cleaning services', icon: '☀️' }
  ];
</script>

<section class="services-marshall">
  <div class="section-header">
    <h2>Marshall Projects</h2>
    <p class="subtitle">Handyman & Property Maintenance Services</p>
  </div>
  
  <p class="intro">
    Marshall Projects delivers reliable home and property maintenance services for 
    homeowners, landlords, and tenants.
  </p>

  <h3>Our Services</h3>
  <div class="services-grid">
    {#each services as service}
      <div class="service-card">
        <span class="service-icon">{service.icon}</span>
        <span class="service-text">{service.text}</span>
      </div>
    {/each}
  </div>

  <h3>Additional Services</h3>
  <div class="additional-services">
    {#each additionalServices as service}
      <div class="service-card">
        <span class="service-icon">{service.icon}</span>
        <span class="service-text">{service.text}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  .services-marshall {
    background: var(--mp-light);
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
    margin: 0 auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  h3 {
    font-size: 1.8rem;
    color: var(--mp-secondary);
    margin: 2.5rem 0 1.5rem;
    text-align: center;
    font-weight: 600;
  }

  .services-grid, .additional-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    max-width: 1000px;
    margin: 0 auto 2rem;
  }

  .service-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    background: white;
    border-radius: var(--radius-md);
    border-left: 3px solid var(--mp-primary);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
  }

  .service-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    border-left-width: 4px;
  }

  .service-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-text {
    flex: 1;
    line-height: 1.5;
    color: var(--text-main);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
      margin: 2rem 0 1.25rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .services-grid, .additional-services {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .service-card {
      padding: 1rem 1.25rem;
    }
  }
</style>
