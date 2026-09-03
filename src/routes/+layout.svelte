<script>
  import Header from '$lib/components/Header.svelte';
  import PreFooter from '$lib/components/PreFooter.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import '$lib/styles/variables.css';
  import '$lib/styles/pages.css';
</script>

<Header />

<main>
  <slot />
</main>

<PreFooter />
<Footer />
<WhatsAppButton />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  main {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
  }
</style>
