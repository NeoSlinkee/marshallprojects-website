<script>
  import Seo from '$lib/components/Seo.svelte';
  import { poolServices, homeServices, SITE } from '$lib/config/site.js';
  import { breadcrumbs, serviceSchema, faqSchema, localBusiness } from '$lib/config/schema.js';

  export let data;
  $: service = data.service;
  $: isPool = service.division === 'pool';
  $: divisionName = isPool ? 'Aqua-Genie' : 'Marshall Projects';
  $: siblings = (isPool ? poolServices : homeServices).filter((s) => s.slug !== service.slug);

  $: title = `${service.title} in Gauteng | ${divisionName}`;
  $: description = service.summary;
  $: path = `/services/${service.slug}`;

  $: jsonld = [
    localBusiness(),
    serviceSchema({ name: service.title, description: service.summary, path }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path }
    ]),
    ...(service.faqs && service.faqs.length ? [faqSchema(service.faqs)] : [])
  ];
</script>

<Seo {title} {description} {path} image={service.image || '/images/hero/hero-pool.jpg'} {jsonld} />

<section class="page-hero" class:mp={!isPool}>
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>
      <a href="/services">Services</a><span class="sep">/</span>{service.title}
    </nav>
    <p class="eyebrow">{divisionName}</p>
    <h1>{service.title}</h1>
    <p class="lead">{service.tagline}</p>
  </div>
</section>

<section class="section">
  <div class="container detail-grid">
    <div class="detail-main prose">
      {#if service.image}
        <img class="hero-img" src={service.image} alt={service.title} width="820" height="460" loading="eager" />
      {/if}
      <p class="intro-lead">{service.intro}</p>

      <h2>What's included</h2>
      <ul>
        {#each service.features as f}
          <li>{f}</li>
        {/each}
      </ul>

      <h2>How it works</h2>
      <ol>
        {#each service.process as step}
          <li>{step}</li>
        {/each}
      </ol>

      {#if service.faqs && service.faqs.length}
        <h2>Frequently asked questions</h2>
        {#each service.faqs as faq}
          <div class="faq">
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        {/each}
      {/if}
    </div>

    <aside class="detail-side">
      <div class="side-card">
        <h3>Request this service</h3>
        <p>Get a fair quote from a reliable, local team.</p>
        <a href="/#contact" class="btn btn-primary side-btn">Request a Quote</a>
        <a href="tel:{SITE.phoneTel}" class="side-phone">📞 {SITE.phoneDisplay}</a>
      </div>

      <div class="side-card">
        <h3>{isPool ? 'More pool services' : 'More home services'}</h3>
        <ul class="side-links">
          {#each siblings as s}
            <li><a href="/services/{s.slug}">{s.title}</a></li>
          {/each}
        </ul>
        <a href="/services" class="side-all">View all services →</a>
      </div>

      <div class="side-card">
        <h3>Where we work</h3>
        <p>We serve homeowners across Gauteng.</p>
        <a href="/areas" class="side-all">See areas we serve →</a>
      </div>
    </aside>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="cta-band">
      <h2>Need {service.title.toLowerCase()}?</h2>
      <p>Tell us what you're dealing with and we'll come back with honest advice and a fair price.</p>
      <a href="/#contact" class="btn btn-white">Get a Quote</a>
    </div>
  </div>
</section>

<style>
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.85rem;
    font-weight: 700;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }
  .detail-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
    align-items: start;
  }
  .hero-img {
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    margin-bottom: 1.5rem;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
  .intro-lead {
    font-size: 1.15rem;
    color: var(--mp-secondary);
  }
  .faq {
    padding: 1.1rem 0;
    border-bottom: 1px solid var(--divider);
  }
  .faq h3 {
    margin: 0 0 0.4rem;
    font-size: 1.15rem;
    color: var(--mp-secondary);
  }
  .faq p {
    margin: 0;
  }

  .detail-side {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 90px;
  }
  .side-card {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border-top: 4px solid var(--aqua-primary);
    padding: 1.5rem;
  }
  .side-card h3 {
    font-size: 1.15rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.6rem;
  }
  .side-card p {
    font-size: 0.98rem;
    margin-bottom: 1rem;
  }
  .side-btn {
    width: 100%;
    justify-content: center;
    margin-bottom: 0.75rem;
  }
  .side-phone {
    display: block;
    text-align: center;
    font-weight: 700;
    color: var(--aqua-secondary);
    text-decoration: none;
  }
  .side-links {
    list-style: none;
    padding: 0;
    margin: 0 0 0.75rem;
  }
  .side-links li {
    margin-bottom: 0.5rem;
  }
  .side-links a {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 500;
  }
  .side-links a:hover {
    color: var(--aqua-secondary);
  }
  .side-all {
    font-weight: 700;
    color: var(--aqua-secondary);
    text-decoration: none;
    font-size: 0.95rem;
  }

  @media (max-width: 900px) {
    .detail-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .detail-side {
      position: static;
    }
  }
</style>
