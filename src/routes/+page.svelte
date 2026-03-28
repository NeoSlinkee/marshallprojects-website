<script>
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import ServicesAquaGenie from '$lib/components/ServicesAquaGenie.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import MidPageVisual from '$lib/components/MidPageVisual.svelte';
  import AreasWeServe from '$lib/components/AreasWeServe.svelte';
  import ServicesMarshallProjects from '$lib/components/ServicesMarshallProjects.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import PreFooter from '$lib/components/PreFooter.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import '$lib/styles/variables.css';
</script>

<svelte:head>
  <!-- Preload critical hero image for LCP optimization -->
  <link 
    rel="preload" 
    as="image" 
    href="/images/hero/hero-pool.jpg"
    fetchpriority="high"
  />
</svelte:head>

<main>
  <Hero />
  <About />
  <ServicesAquaGenie />
  <Gallery />
  <MidPageVisual />
  <ServicesMarshallProjects />
  <Testimonials />
  <AreasWeServe />
  <WhyChooseUs />
  <Contact />
  <PreFooter />
  <Footer />
  <WhatsAppButton />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
