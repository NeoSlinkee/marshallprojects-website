<script>
  import Seo from '$lib/components/Seo.svelte';
  import MapEmbed from '$lib/components/MapEmbed.svelte';
  import { areas } from '$lib/config/site.js';
  import { breadcrumbs, webPage, localBusiness } from '$lib/config/schema.js';

  const title = 'Areas We Serve | Pool & Home Maintenance Across Gauteng';
  const description =
    'Marshall Projects and Aqua-Genie serve residential homeowners across Gauteng — Randburg, Northcliff, Sandton, Bryanston, Fourways, Midrand, Roodepoort and surrounding suburbs.';

  const jsonld = [
    localBusiness(),
    webPage({ name: 'Areas We Serve', description, path: '/areas' }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Areas We Serve', path: '/areas' }
    ])
  ];
</script>

<Seo {title} {description} path="/areas" {jsonld} />

<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>Areas We Serve
    </nav>
    <h1>Areas We Serve</h1>
    <p class="lead">
      Reliable pool and home maintenance for homeowners across the northern and western
      suburbs of Johannesburg and the wider Gauteng region.
    </p>
  </div>
</section>

<section class="section">
  <div class="container areas-layout">
    <div>
      <h2>Suburbs we cover</h2>
      <p class="sub">Tap your area for local pool and home maintenance details.</p>
      <div class="area-grid">
        {#each areas as area}
          <a class="area-chip" href="/areas/{area.slug}">
            <span class="pin" aria-hidden="true">📍</span>{area.name}
          </a>
        {/each}
      </div>
      <p class="note">
        Don't see your suburb? <a href="/#contact">Contact us</a> — we may still be able to help.
      </p>
    </div>
    <div class="map-wrap">
      <MapEmbed height="440" />
    </div>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="cta-band">
      <h2>Serving your neighbourhood</h2>
      <p>Local, on time, and reliable. Get a quote for your home or pool today.</p>
      <a href="/#contact" class="btn btn-white">Request a Quote</a>
    </div>
  </div>
</section>

<style>
  .areas-layout {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 3rem;
    align-items: start;
  }
  .sub {
    color: var(--mp-primary);
    opacity: 0.85;
    margin-bottom: 1.5rem;
  }
  .area-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  .area-chip {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    border-left: 3px solid var(--aqua-primary);
    text-decoration: none;
    color: var(--text-main);
    font-weight: 600;
    transition: all var(--transition-base);
  }
  .area-chip:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    color: var(--aqua-secondary);
  }
  .note {
    margin-top: 1.5rem;
    padding: 1.25rem;
    background: white;
    border-radius: var(--radius-md);
    border-left: 4px solid var(--aqua-primary);
  }
  .note a {
    color: var(--aqua-secondary);
    font-weight: 600;
  }
  .map-wrap {
    position: sticky;
    top: 90px;
  }
  @media (max-width: 900px) {
    .areas-layout {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .map-wrap {
      position: static;
      order: -1;
    }
  }
  @media (max-width: 480px) {
    .area-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
