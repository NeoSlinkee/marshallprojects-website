<script>
  const reasons = [
    {
      title: 'Residential-Focused Services',
      description: 'We specialize in residential properties, understanding the unique needs of homeowners.',
      icon: '🏡'
    },
    {
      title: 'Reliable & Professional',
      description: 'Dependable service with honest workmanship. We show up on time and complete the job properly.',
      icon: '✓'
    },
    {
      title: 'Practical Solutions',
      description: 'We provide straightforward, effective solutions without unnecessary upselling or complications.',
      icon: '💡'
    },
    {
      title: 'One Point of Contact',
      description: 'Manage both your home and pool maintenance through a single, trusted service provider.',
      icon: '📞'
    },
    {
      title: 'Local Gauteng Service',
      description: 'We\'re based in Gauteng and understand the local climate, building standards, and service needs.',
      icon: '📍'
    },
    {
      title: 'Long-Term Relationships',
      description: 'We believe in doing the job properly the first time and building lasting client relationships.',
      icon: '🤝'
    }
  ];
</script>

<section class="why-choose">
  <h2>Why Choose Us</h2>
  <p class="intro">
    We believe in doing the job properly the first time and building long-term relationships with our clients.
  </p>
  
  <div class="reasons-grid">
    {#each reasons as reason}
      <div class="reason-card">
        <div class="icon-wrapper">
          <span class="reason-icon">{reason.icon}</span>
        </div>
        <h3>{reason.title}</h3>
        <p>{reason.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .why-choose {
    background: linear-gradient(135deg, var(--mp-primary) 0%, var(--mp-secondary) 100%);
    color: white;
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .intro {
    text-align: center;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 3.5rem;
    opacity: 0.95;
  }

  .reasons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .reason-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    backdrop-filter: blur(10px);
  }

  .reason-card:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: var(--shadow-lg);
    border-color: rgba(45, 169, 225, 0.3);
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    background: rgba(45, 169, 225, 0.2);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    border: 2px solid rgba(45, 169, 225, 0.3);
  }

  .reason-icon {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.875rem;
    color: var(--aqua-primary);
    font-weight: 600;
  }

  .reason-card p {
    line-height: 1.7;
    opacity: 0.9;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    .reasons-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .reason-card {
      padding: 1.5rem;
    }

    .icon-wrapper {
      width: 48px;
      height: 48px;
    }

    .reason-icon {
      font-size: 1.5rem;
    }
  }
</style>
