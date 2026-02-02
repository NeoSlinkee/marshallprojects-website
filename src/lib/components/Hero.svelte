<script>
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="hero">
  <div class="hero-content">
    <div class="logos">
      <img src="/images/aquagenie-logo.svg" alt="Aqua-Genie Logo" class="logo" />
      <img src="/images/marshallprojects-logo.svg" alt="Marshall Projects Logo" class="logo" />
    </div>
    <h1>
      <span class="headline-main">Professional Home, Handyman</span>
      <span class="headline-accent">& Pool Maintenance Services</span>
    </h1>
    <p class="tagline">
      Reliable residential maintenance solutions for homeowners across Gauteng. 
      From swimming pool care to general handyman and property maintenance, 
      we offer dependable service, honest workmanship, and practical solutions you can trust.
    </p>
    <button class="cta-button" on:click={scrollToContact}>
      Request a Quote
    </button>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, var(--aqua-primary) 0%, var(--aqua-secondary) 100%);
    color: white;
    text-align: center;
    padding: 5rem 1.5rem;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
  }

  .hero-content {
    max-width: 900px;
    position: relative;
    z-index: 1;
  }

  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
  }

  .logo {
    height: 80px;
    width: auto;
    background: white;
    padding: 1rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-base);
  }

  .logo:hover {
    transform: scale(1.05);
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 700;
    margin-bottom: 1.75rem;
    line-height: 1.15;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .headline-main {
    font-weight: 600;
  }

  .headline-accent {
    font-weight: 700;
    font-size: 1.1em;
  }

  .tagline {
    font-size: 1.2rem;
    line-height: 1.8;
    opacity: 0.95;
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-button {
    background: white;
    color: var(--aqua-secondary);
    border: 2px solid white;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
    font-family: inherit;
  }

  .cta-button:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .cta-button:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem 1rem;
      min-height: auto;
    }

    h1 {
      font-size: 2rem;
    }

    .tagline {
      font-size: 1.05rem;
      margin-bottom: 2rem;
    }

    .logo {
      height: 60px;
    }

    .logos {
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 0.875rem 2rem;
      font-size: 1rem;
    }
  }
</style>
