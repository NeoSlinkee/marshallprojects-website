<script>
  const services = [
    'Weekly and monthly pool maintenance',
    'Pool cleaning and water balancing',
    'Green-to-clean pool treatments',
    'Pool repairs and refurbishments',
    'Pool lighting installation and repairs',
    'Filter sand changes',
    'Pool covers',
    'New pump installations',
    'Pool solar heating',
    'Heat pumps',
    'Sand filter systems'
  ];
</script>

<section class="services-aqua">
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
      <div class="service-item">
        <span class="bullet">•</span>
        <span>{service}</span>
      </div>
    {/each}
  </div>

  <p class="tagline">Everything for your pool — to keep you swimming.</p>
</section>

<style>
  .services-aqua {
    background: linear-gradient(to bottom, var(--bg-main), #f0f9ff);
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--aqua-primary);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--aqua-secondary);
    font-weight: 600;
  }

  .intro {
    max-width: 700px;
    margin: 0 auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto 3rem;
  }

  .service-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background: white;
    border-radius: 6px;
    border-left: 3px solid var(--aqua-primary);
    transition: transform 0.2s;
  }

  .service-item:hover {
    transform: translateX(4px);
  }

  .bullet {
    color: var(--aqua-primary);
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
  }

  .tagline {
    text-align: center;
    font-size: 1.3rem;
    color: var(--aqua-secondary);
    font-weight: 600;
    font-style: italic;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
