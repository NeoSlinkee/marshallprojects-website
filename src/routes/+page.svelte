<script>
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import ServicesAquaGenie from '$lib/components/ServicesAquaGenie.svelte';
  import ServicesMarshallProjects from '$lib/components/ServicesMarshallProjects.svelte';
  import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import '$lib/styles/variables.css';
</script>

<svelte:head>
  <title>Pool & Home Maintenance Gauteng | Aqua-Genie & Marshall Projects</title>
  <meta 
    name="description" 
    content="Professional swimming pool maintenance and handyman services in Gauteng, South Africa. Aqua-Genie pool services and Marshall Projects property maintenance - reliable, trusted, local."
  />
  <meta name="keywords" content="pool maintenance Gauteng, handyman Johannesburg, pool repairs, home maintenance, property services, Aqua-Genie, Marshall Projects" />
  
  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Pool & Home Maintenance Gauteng | Aqua-Genie & Marshall Projects" />
  <meta property="og:description" content="Professional swimming pool maintenance and handyman services in Gauteng. Reliable, trusted, local service." />
  <meta property="og:url" content="https://marshallprojects.co.za" />
  
  <!-- Responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main>
  <Hero />
  <About />
  <ServicesAquaGenie />
  <ServicesMarshallProjects />
  <WhyChooseUs />
  <Contact />
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
