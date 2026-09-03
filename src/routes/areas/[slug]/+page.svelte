<script>
  import Seo from '$lib/components/Seo.svelte';
  import MapEmbed from '$lib/components/MapEmbed.svelte';
  import { poolServices, homeServices, areas, getArea, SITE } from '$lib/config/site.js';
  import { breadcrumbs, faqSchema, localBusiness } from '$lib/config/schema.js';

  export let data;
  $: area = data.area;
  $: nearby = area.nearby.map((n) => areas.find((a) => a.name === n)).filter(Boolean);

  $: title = `Pool & Home Maintenance in ${area.name} | Aqua-Genie & Marshall Projects`;
  $: description = `Reliable swimming pool servicing, repairs and home maintenance in ${area.name}, Gauteng. Aqua-Genie pool care and Marshall Projects handyman, painting, waterproofing and roofing, local, trusted, on time.`;
  $: path = `/areas/${area.slug}`;

  $: faqs = [
    {
      q: `Do you offer pool maintenance in ${area.name}?`,
      a: `Yes. Aqua-Genie provides weekly and monthly pool servicing, repairs, refurbishments, and green-to-clean recovery for homes throughout ${area.name} and the surrounding Gauteng suburbs.`
    },
    {
      q: `What home maintenance services do you provide in ${area.name}?`,
      a: `Marshall Projects covers painting, waterproofing, damp proofing, roofing maintenance, general building work, and flooring for homeowners, landlords, and tenants in ${area.name}.`
    },
    {
      q: `How do I get a quote in ${area.name}?`,
      a: `Call ${SITE.phoneDisplay}, message us on WhatsApp, or use the enquiry form on our website. We'll arrange a convenient time and give you an honest quote.`
    }
  ];

  $: business = {
    ...localBusiness(),
    areaServed: { '@type': 'City', name: area.name, containedInPlace: { '@type': 'State', name: 'Gauteng' } }
  };
  $: jsonld = [
    business,
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Areas We Serve', path: '/areas' },
      { name: area.name, path }
    ]),
    faqSchema(faqs)
  ];
</script>

<Seo {title} {description} {path} {jsonld} />

<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>
      <a href="/areas">Areas We Serve</a><span class="sep">/</span>{area.name}
    </nav>
    <h1>Pool & Home Maintenance in {area.name}</h1>
    <p class="lead">
      Trusted, local pool care and property maintenance for homeowners in {area.name}, Gauteng.
    </p>
  </div>
</section>

<section class="section">
  <div class="container detail-grid">
    <div class="prose main">
      <p class="intro-lead">
        Aqua-Genie and Marshall Projects look after homes right across {area.name}. Whether your
        pool needs a regular service, your roof has sprung a leak, or the house is due for a
        repaint, you have one reliable, local team to call, no chasing multiple tradespeople.
      </p>
      <p>
        We know the {area.name} area and the way the Highveld climate treats pools, roofs, and
        walls, so we can give you practical advice and lasting results. We also serve nearby
        {#each nearby as n, i}<a href="/areas/{n.slug}">{n.name}</a>{i < nearby.length - 1 ? ', ' : ''}{/each}.
      </p>

      <h2>Pool services in {area.name}</h2>
      <ul class="svc-list">
        {#each poolServices as s}
          <li><a href="/services/{s.slug}">{s.title}</a>, {s.tagline}</li>
        {/each}
      </ul>

      <h2>Home maintenance in {area.name}</h2>
      <ul class="svc-list">
        {#each homeServices as s}
          <li><a href="/services/{s.slug}">{s.title}</a>, {s.tagline}</li>
        {/each}
      </ul>

      <h2>Frequently asked questions</h2>
      {#each faqs as faq}
        <div class="faq">
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      {/each}
    </div>

    <aside class="side">
      <div class="side-card">
        <h3>Get a quote in {area.name}</h3>
        <a href="/#contact" class="btn btn-primary side-btn">Request a Quote</a>
        <a href="tel:{SITE.phoneTel}" class="side-phone">📞 {SITE.phoneDisplay}</a>
      </div>
      <div class="map-card">
        <MapEmbed height="260" query="{area.name}, Gauteng, South Africa" title="Map of {area.name}" />
      </div>
      {#if nearby.length}
        <div class="side-card">
          <h3>Nearby areas</h3>
          <ul class="side-links">
            {#each nearby as n}
              <li><a href="/areas/{n.slug}">{n.name}</a></li>
            {/each}
          </ul>
          <a href="/areas" class="side-all">All areas →</a>
        </div>
      {/if}
    </aside>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="cta-band">
      <h2>Homeowner in {area.name}?</h2>
      <p>Get reliable pool and home maintenance from a team that knows the area.</p>
      <a href="/#contact" class="btn btn-white">Get in Touch</a>
    </div>
  </div>
</section>

<style>
  .detail-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
    align-items: start;
  }
  .intro-lead {
    font-size: 1.15rem;
    color: var(--mp-secondary);
  }
  .svc-list {
    list-style: none;
    margin-left: 0;
  }
  .svc-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--divider);
  }
  .svc-list a {
    font-weight: 700;
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
  .side {
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
    margin-bottom: 0.75rem;
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
    .side {
      position: static;
    }
  }
</style>
