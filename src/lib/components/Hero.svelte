<script>
</script>

<section class="hero">
  <div class="hero-content">
    <div class="logos">
      <img src="/images/aquagenie-logo.svg" alt="Aqua-Genie Logo" class="logo" />
      <img src="/images/marshallprojects-logo.svg" alt="Marshall Projects Logo" class="logo" />
    </div>
    <h1>Professional Home, Handyman & Pool Maintenance Services</h1>
    <p class="tagline">
      Reliable residential maintenance solutions for homeowners across Gauteng. 
      From swimming pool care to general handyman and property maintenance, 
      we offer dependable service, honest workmanship, and practical solutions you can trust.
    </p>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, var(--aqua-primary) 0%, var(--aqua-secondary) 100%);
    color: white;
    text-align: center;
    padding: 5rem 1.5rem;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    max-width: 900px;
  }

  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .logo {
    height: 80px;
    width: auto;
    background: white;
    padding: 1rem;
    border-radius: 8px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .tagline {
    font-size: 1.2rem;
    line-height: 1.8;
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 1rem;
      min-height: auto;
    }

    h1 {
      font-size: 1.8rem;
    }

    .tagline {
      font-size: 1rem;
    }

    .logo {
      height: 60px;
    }

    .logos {
      gap: 1.5rem;
    }
  }
</style>
