<script>
  const reasons = [
    {
      title: 'Residential-Focused Services',
      description: 'We specialize in residential properties, understanding the unique needs of homeowners.'
    },
    {
      title: 'Reliable & Professional',
      description: 'Dependable service with honest workmanship. We show up on time and complete the job properly.'
    },
    {
      title: 'Practical Solutions',
      description: 'We provide straightforward, effective solutions without unnecessary upselling or complications.'
    },
    {
      title: 'One Point of Contact',
      description: 'Manage both your home and pool maintenance through a single, trusted service provider.'
    },
    {
      title: 'Local Gauteng Service',
      description: 'We\'re based in Gauteng and understand the local climate, building standards, and service needs.'
    },
    {
      title: 'Long-Term Relationships',
      description: 'We believe in doing the job properly the first time and building lasting client relationships.'
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
  }

  .intro {
    text-align: center;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 3rem;
    opacity: 0.95;
  }

  .reasons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .reason-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.2s, background 0.2s;
  }

  .reason-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.15);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: var(--aqua-primary);
  }

  .reason-card p {
    line-height: 1.7;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    .reasons-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
