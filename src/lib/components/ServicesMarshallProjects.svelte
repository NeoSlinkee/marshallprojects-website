<script>
  const services = [
    'Interior and exterior painting',
    'Roofing maintenance and repairs',
    'Flooring installation and repairs',
    'Damp proofing',
    'Waterproofing solutions',
    'General handyman services',
    'Electrical work',
    'Plumbing services',
    'Tiling',
    'General building maintenance',
    'Home maintenance for tenants and owners'
  ];

  const additionalServices = [
    'Decor solutions (blinds, curtains, wallpaper, wall panels, mirrors)',
    'Decking solutions',
    'Security-related installations',
    'Furniture and rug installations',
    'Solar panel cleaning services'
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
      <div class="service-item">
        <span class="bullet">•</span>
        <span>{service}</span>
      </div>
    {/each}
  </div>

  <h3>Additional Services</h3>
  <div class="additional-services">
    {#each additionalServices as service}
      <div class="service-item">
        <span class="bullet">•</span>
        <span>{service}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  .services-marshall {
    background: var(--mp-accent);
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--mp-primary);
    margin-bottom: 0.5rem;
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
    margin: 2rem 0 1.5rem;
    text-align: center;
  }

  .services-grid, .additional-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto 2rem;
  }

  .service-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background: white;
    border-radius: 6px;
    border-left: 3px solid var(--mp-primary);
    transition: transform 0.2s;
  }

  .service-item:hover {
    transform: translateX(4px);
  }

  .bullet {
    color: var(--mp-primary);
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .services-grid, .additional-services {
      grid-template-columns: 1fr;
    }
  }
</style>
