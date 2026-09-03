<script>
  import Seo from '$lib/components/Seo.svelte';
  import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
  import { breadcrumbs, webPage, localBusiness } from '$lib/config/schema.js';

  const title = 'Why Choose Us | Marshall Projects & Aqua-Genie';
  const description =
    'Residential-focused, reliable, and honest. Here is why homeowners across Gauteng trust Marshall Projects and Aqua-Genie with their home and pool maintenance.';

  const jsonld = [
    localBusiness(),
    webPage({ name: 'Why Choose Us', description, path: '/why-choose-us' }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Why Choose Us', path: '/why-choose-us' }
    ])
  ];
</script>

<Seo {title} {description} path="/why-choose-us" {jsonld} />

<section class="page-hero mp">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>Why Choose Us
    </nav>
    <h1>Why Choose Us</h1>
    <p class="lead">
      Dependable service, honest workmanship, and one team for both your home and your pool.
    </p>
  </div>
</section>

<WhyChooseUs />

<section class="section">
  <div class="container-narrow prose">
    <h2>Doing the job properly, the first time</h2>
    <p>
      A lot of maintenance problems come back because they were patched instead of fixed. We
      would rather do it once and do it right — whether that is preparing a surface before we
      paint it, finding the actual source of a leak, or sizing a pool pump correctly instead of
      fitting whatever is on the shelf.
    </p>
    <h2>One point of contact</h2>
    <p>
      Managing a property is easier when you are not juggling five different numbers. Because we
      cover both <a href="/services">pool and home maintenance</a>, you have a single, trusted
      team to call for the pool service, the roof repair, and the painting — all in one place.
    </p>
    <h2>Local, and here for the long term</h2>
    <p>
      We are based in Gauteng and we understand the local climate, building standards, and the
      way Highveld weather treats roofs, walls, and pools. We are not chasing one-off jobs — we
      build long-term relationships with the homeowners and landlords we look after across
      <a href="/areas">the suburbs we serve</a>.
    </p>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="cta-band">
      <h2>Ready to get started?</h2>
      <p>Tell us what you need for your home or pool, and we'll come back with honest advice and a fair price.</p>
      <a href="/#contact" class="btn btn-white">Get in Touch</a>
    </div>
  </div>
</section>
