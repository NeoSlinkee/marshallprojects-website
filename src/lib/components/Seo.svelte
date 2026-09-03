<script>
  import { SITE } from '$lib/config/site.js';

  export let title;
  export let description;
  export let path = '/'; // route path, leading slash
  export let image = '/images/hero/hero-pool.jpg';
  export let type = 'website';
  /** Array of JSON-LD objects (already plain objects) to embed. */
  export let jsonld = [];

  $: canonical = SITE.url + (path === '/' ? '' : path.replace(/\/$/, ''));
  $: fullTitle = title;
  $: ogImage = image.startsWith('http') ? image : SITE.url + image;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content={type} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:site_name" content={SITE.name} />
  <meta property="og:locale" content="en_ZA" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  {#each jsonld as block}
    {@html '<script type="application/ld+json">' + JSON.stringify(block) + '<\/script>'}
  {/each}
</svelte:head>
