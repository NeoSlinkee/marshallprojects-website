<script>
  import MapEmbed from '$lib/components/MapEmbed.svelte';
  import { areas } from '$lib/config/site.js';

  const half = Math.ceil(areas.length / 2);
  const areasColumn1 = areas.slice(0, half);
  const areasColumn2 = areas.slice(half);
</script>

<section class="areas-we-serve" id="areas">
  <div class="container">
    <div class="section-header">
      <h2>Areas We Serve</h2>
      <p class="subtitle">Serving residential homeowners across Gauteng</p>
    </div>

    <div class="areas-container">
      <div class="areas-list">
        <div class="areas-columns">
          <div class="areas-column">
            {#each areasColumn1 as area}
              <a class="area-item" href="/areas/{area.slug}">
                <span class="pin-icon">📍</span>
                <span class="area-name">{area.name}</span>
              </a>
            {/each}
          </div>
          <div class="areas-column">
            {#each areasColumn2 as area}
              <a class="area-item" href="/areas/{area.slug}">
                <span class="pin-icon">📍</span>
                <span class="area-name">{area.name}</span>
              </a>
            {/each}
          </div>
        </div>

        <p class="areas-note">
          <a href="/areas">View all areas we serve →</a><br />
          Don't see your area? <a href="#contact">Contact us</a> — we may still be able to assist.
        </p>
      </div>

      <div class="map-container">
        <MapEmbed height="400" />
      </div>
    </div>
  </div>
</section>

<style>
  .areas-we-serve {
    background: linear-gradient(180deg, var(--bg-main) 0%, var(--aqua-light) 100%);
    padding: 3.5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--mp-primary);
    opacity: 0.85;
  }

  .areas-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    align-items: center;
  }

  .areas-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .areas-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2.5rem;
  }

  .areas-column {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .area-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.4rem 0.5rem;
    margin: 0 -0.5rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-fast);
  }

  .area-item:hover {
    background: white;
    box-shadow: var(--shadow-sm);
  }

  .area-item:hover .area-name {
    color: var(--aqua-secondary);
  }

  .pin-icon {
    font-size: 1.1rem;
    opacity: 0.8;
  }

  .area-name {
    font-size: 1.05rem;
    color: var(--text-main);
    font-weight: 500;
  }

  .areas-note {
    color: var(--mp-primary);
    font-size: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: var(--radius-md);
    text-align: center;
    border-left: 4px solid var(--aqua-primary);
  }

  .areas-note a {
    color: var(--aqua-secondary);
    text-decoration: none;
    font-weight: 600;
  }

  .areas-note a:hover {
    text-decoration: underline;
  }

  .map-container {
    width: 100%;
  }

  @media (max-width: 900px) {
    .areas-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .map-container {
      max-width: 500px;
      margin: 0 auto;
      order: -1;
    }
  }

  @media (max-width: 768px) {
    .areas-we-serve {
      padding: 4rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    h2 {
      font-size: 2rem;
    }

    .areas-columns {
      gap: 0.75rem 1.5rem;
    }

    .area-name {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .areas-columns {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .areas-column {
      gap: 0.5rem;
    }

    .areas-note {
      font-size: 0.95rem;
      padding: 1.25rem;
    }
  }
</style>
