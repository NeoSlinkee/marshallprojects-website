<script>
  import Seo from '$lib/components/Seo.svelte';
  import About from '$lib/components/About.svelte';
  import { SITE } from '$lib/config/site.js';
  import { breadcrumbs, webPage, localBusiness } from '$lib/config/schema.js';

  const title = 'About Us | Marshall Projects & Aqua-Genie — Gauteng';
  const description =
    'Marshall Projects & Protective Coatings CC runs two divisions — Aqua-Genie pool care and Marshall Projects home maintenance — serving homeowners across Gauteng with honest, reliable workmanship.';

  const jsonld = [
    localBusiness(),
    webPage({ name: 'About Us', description, path: '/about' }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' }
    ])
  ];
</script>

<Seo {title} {description} path="/about" {jsonld} />

<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>About Us
    </nav>
    <h1>About Us</h1>
    <p class="lead">
      One trusted team for your home and your pool — two specialised divisions under
      Marshall Projects & Protective Coatings CC.
    </p>
  </div>
</section>

<About />

<section class="section tint">
  <div class="container-narrow prose">
    <h2>Who we are</h2>
    <p>
      Marshall Projects & Protective Coatings CC is a Gauteng-based, residential-focused
      maintenance business. We built the company around a simple idea: homeowners should be
      able to look after their property and their pool through one reliable point of contact,
      instead of chasing several different tradespeople.
    </p>
    <p>
      Our <strong>Aqua-Genie</strong> division handles everything pool-related — routine
      servicing, repairs, refurbishments, heating, pumps, and filtration. Our
      <strong>Marshall Projects</strong> division covers home and property maintenance —
      painting, waterproofing, damp proofing, roofing, general building work, and flooring.
    </p>

    <h2>How we work</h2>
    <p>
      We keep things straightforward. We turn up when we say we will, we do the job properly
      the first time, and we tell you honestly what does — and does not — need doing. No
      unnecessary upselling, no surprises. That approach is what has kept our clients with us
      over the long term.
    </p>

    <h2>Who we serve</h2>
    <p>
      We work with homeowners, landlords, and tenants across the northern and western suburbs
      of Johannesburg and the wider Gauteng region — from Randburg and Northcliff through to
      Sandton, Bryanston, Fourways, and Midrand. See our
      <a href="/areas">areas we serve</a> for the full list, or read about our
      <a href="/services">pool and home services</a>.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-band">
      <h2>Let's talk about your home or pool</h2>
      <p>Get honest advice and a fair quote from a team that treats your property like its own.</p>
      <a href="/#contact" class="btn btn-white">Request a Quote</a>
    </div>
  </div>
</section>
