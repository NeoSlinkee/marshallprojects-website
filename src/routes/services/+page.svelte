<script>
  import Seo from '$lib/components/Seo.svelte';
  import { poolServices, homeServices } from '$lib/config/site.js';
  import { breadcrumbs, webPage, localBusiness } from '$lib/config/schema.js';

  const title = 'Our Services | Pool & Home Maintenance in Gauteng';
  const description =
    'Full-service pool and home maintenance in Gauteng. Aqua-Genie pool servicing, repairs, refurbishments, heating, pumps and filtration, plus Marshall Projects painting, waterproofing, damp proofing, roofing, building maintenance and flooring.';

  const jsonld = [
    localBusiness(),
    webPage({ name: 'Our Services', description, path: '/services' }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' }
    ])
  ];
</script>

<Seo {title} {description} path="/services" {jsonld} />

<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>Services
    </nav>
    <h1>Our Services</h1>
    <p class="lead">
      Two specialised divisions covering everything your home and pool need — all from one
      trusted, local team.
    </p>
  </div>
</section>

<section class="section tint" id="pool">
  <div class="container">
    <div class="division-head aqua">
      <h2>Aqua-Genie — Pool Services</h2>
      <p>Complete swimming pool care to keep your pool clean, safe, and swim-ready all year.</p>
    </div>
    <div class="card-grid">
      {#each poolServices as s}
        <a class="service-card" href="/services/{s.slug}">
          <div class="thumb" style="background-image:url('{s.image || ''}')">
            {#if !s.image}<span class="thumb-icon">{s.icon}</span>{/if}
          </div>
          <div class="body">
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <span class="more">Learn more →</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section mp-tint" id="home">
  <div class="container">
    <div class="division-head mp">
      <h2>Marshall Projects — Home Maintenance</h2>
      <p>Reliable property maintenance for homeowners, landlords, and tenants across Gauteng.</p>
    </div>
    <div class="card-grid">
      {#each homeServices as s}
        <a class="service-card mp" href="/services/{s.slug}">
          <div class="thumb mp" style="background-image:url('{s.image || ''}')">
            {#if !s.image}<span class="thumb-icon">{s.icon}</span>{/if}
          </div>
          <div class="body">
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <span class="more">Learn more →</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-band">
      <h2>Not sure which service you need?</h2>
      <p>Describe the problem and we'll point you in the right direction — no obligation.</p>
      <a href="/#contact" class="btn btn-white">Ask Us</a>
    </div>
  </div>
</section>

<style>
  .division-head {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 2.5rem;
  }
  .division-head h2 {
    font-size: 2.1rem;
    margin-bottom: 0.5rem;
  }
  .division-head.aqua h2 {
    color: var(--aqua-primary);
  }
  .division-head.mp h2 {
    color: var(--mp-primary);
  }
  .division-head p {
    max-width: none;
    font-size: 1.1rem;
  }

  .service-card {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  .thumb {
    aspect-ratio: 16 / 10;
    background-size: cover;
    background-position: center;
    background-color: var(--aqua-primary);
    background-image: linear-gradient(135deg, var(--aqua-primary), var(--aqua-secondary));
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumb.mp {
    background-color: var(--mp-primary);
    background-image: linear-gradient(135deg, var(--mp-primary), var(--mp-secondary));
  }
  .thumb-icon {
    font-size: 3rem;
    opacity: 0.85;
  }
  .body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .body h3 {
    font-size: 1.3rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.6rem;
  }
  .service-card.mp .body h3 {
    color: var(--mp-secondary);
  }
  .body p {
    flex: 1;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  .more {
    font-weight: 700;
    color: var(--aqua-secondary);
    font-size: 0.95rem;
  }
  .service-card.mp .more {
    color: var(--mp-secondary);
  }
</style>
