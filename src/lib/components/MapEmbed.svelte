<script>
  import { GOOGLE, SITE } from '$lib/config/site.js';

  export let height = '400';
  export let query = 'Gauteng, South Africa';
  export let title = 'Map of our Gauteng service area';

  // Prefer the configured Business Profile embed URL. Fall back to a keyless
  // query embed so the map still renders live before the client supplies the link.
  $: src = GOOGLE.embedUrl
    ? GOOGLE.embedUrl
    : `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=10&output=embed`;
</script>

<div class="map-embed" style="--h:{height}px">
  <iframe
    {title}
    {src}
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  ></iframe>
  {#if GOOGLE.reviewsUrl || GOOGLE.placeId}
    <a
      class="map-link"
      href={GOOGLE.reviewsUrl || `https://www.google.com/maps/place/?q=place_id:${GOOGLE.placeId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      View {SITE.shortName} on Google Maps →
    </a>
  {/if}
</div>

<style>
  .map-embed {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    border: 3px solid white;
    background: var(--aqua-tint);
  }
  iframe {
    display: block;
    width: 100%;
    height: var(--h);
    border: 0;
  }
  .map-link {
    display: block;
    text-align: center;
    padding: 0.75rem 1rem;
    background: white;
    color: var(--aqua-secondary);
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    border-top: 1px solid var(--divider);
  }
  .map-link:hover {
    background: var(--aqua-tint);
  }
</style>
