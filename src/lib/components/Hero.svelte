<script>
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  function scrollToGallery() {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="hero-wrapper">
  <div class="hero-panel">
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
      <div class="cta-buttons">
        <button class="cta-button cta-primary" on:click={scrollToContact}>
          Request a Quote
        </button>
        <button class="cta-button cta-secondary" on:click={scrollToGallery}>
          View Our Work
        </button>
      </div>
    </div>
  </div>
  <div class="hero-side-image" aria-hidden="true">
    <div class="image-overlay"></div>
  </div>
  <div class="diagonal-divider"></div>
</section>

<style>
  .hero-wrapper {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    min-height: 75vh;
    position: relative;
  }

  .hero-panel {
    background: linear-gradient(135deg, rgba(27, 111, 174, 1) 0%, rgba(45, 169, 225, 0.95) 100%);
    color: white;
    text-align: center;
    padding: 5rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
    pointer-events: none;
  }

  .hero-side-image {
    background-image: url('/images/hero/hero-pool.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(45, 169, 225, 0.3) 0%,
      transparent 30%
    );
  }

  .diagonal-divider {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 80px;
    background: white;
    clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
    z-index: 1;
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

  .cta-buttons {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-base);
    font-family: inherit;
    border: 2px solid white;
  }

  .cta-primary {
    background: white;
    color: var(--aqua-secondary);
    box-shadow: var(--shadow-md);
  }

  .cta-primary:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .cta-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-secondary:hover {
    background: white;
    color: var(--aqua-secondary);
    transform: translateY(-2px);
  }

  .cta-button:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .hero-wrapper {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .hero-panel {
      padding: 4rem 1.5rem;
      order: 1;
    }

    .hero-side-image {
      min-height: 280px;
      order: 2;
    }

    .diagonal-divider {
      display: none;
    }

    .image-overlay {
      background: linear-gradient(
        to bottom,
        rgba(45, 169, 225, 0.2) 0%,
        transparent 40%
      );
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

    .cta-buttons {
      flex-direction: column;
      gap: 1rem;
    }

    .cta-button {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .hero-side-image {
      min-height: 220px;
    }

    .hero-panel {
      padding: 3rem 1rem;
    }
  }
</style>
