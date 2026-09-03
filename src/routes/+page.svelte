<script>
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import ServicesAquaGenie from '$lib/components/ServicesAquaGenie.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import MidPageVisual from '$lib/components/MidPageVisual.svelte';
  import AreasWeServe from '$lib/components/AreasWeServe.svelte';
  import ServicesMarshallProjects from '$lib/components/ServicesMarshallProjects.svelte';
  import GoogleReviews from '$lib/components/GoogleReviews.svelte';
  import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import { SITE } from '$lib/config/site.js';
  import { localBusiness } from '$lib/config/schema.js';

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url
  };
  const jsonld = [localBusiness(), website];
</script>

<svelte:head>
  <!-- Preload critical hero image for LCP optimization -->
  <link
    rel="preload"
    as="image"
    href="/images/hero/hero-pool.jpg"
    fetchpriority="high"
  />
  {#each jsonld as block}
    {@html '<script type="application/ld+json">' + JSON.stringify(block) + '<\/script>'}
  {/each}
</svelte:head>

<Hero />
<About />
<ServicesAquaGenie />
<Gallery />
<MidPageVisual />
<ServicesMarshallProjects />
<GoogleReviews />
<AreasWeServe />
<WhyChooseUs />
<Contact />
