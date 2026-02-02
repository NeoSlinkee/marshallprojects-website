<script>
  const services = [
    { text: 'Weekly and monthly pool maintenance', icon: '🏊' },
    { text: 'Pool cleaning and water balancing', icon: '💧' },
    { text: 'Green-to-clean pool treatments', icon: '🌿' },
    { text: 'Pool repairs and refurbishments', icon: '🔧' },
    { text: 'Pool lighting installation and repairs', icon: '💡' },
    { text: 'Filter sand changes', icon: '⚙️' },
    { text: 'Pool covers', icon: '🛡️' },
    { text: 'New pump installations', icon: '⚡' },
    { text: 'Pool solar heating', icon: '☀️' },
    { text: 'Heat pumps', icon: '🌡️' },
    { text: 'Sand filter systems', icon: '🔄' }
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
      <div class="service-card">
        <span class="service-icon">{service.icon}</span>
        <span class="service-text">{service.text}</span>
      </div>
    {/each}
  </div>

  <p class="tagline">Everything for your pool — to keep you swimming.</p>
</section>

<style>
  .services-aqua {
    background: linear-gradient(180deg, var(--aqua-light), var(--aqua-tint));
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
    margin: 0 auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    max-width: 1000px;
    margin: 0 auto 3rem;
  }

  .service-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    background: white;
    border-radius: var(--radius-md);
    border-left: 3px solid var(--aqua-primary);
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
      gap: 1rem;
    }

    .service-card {
      padding: 1rem 1.25rem;
    }

    .tagline {
      font-size: 1.15rem;
    }
  }
</style>
