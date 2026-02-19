<script>
  const areasColumn1 = [
    'Randburg',
    'Ferndale',
    'Blairgowrie',
    'Bordeaux',
    'Northcliff',
    'Cresta',
    'Linden',
    'Robindale'
  ];

  const areasColumn2 = [
    'Robin Hills',
    'Emmarentia',
    'Sandton',
    'Bryanston',
    'Rosebank',
    'Fourways',
    'Midrand',
    'Roodepoort'
  ];
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
              <div class="area-item">
                <span class="pin-icon">📍</span>
                <span class="area-name">{area}</span>
              </div>
            {/each}
          </div>
          <div class="areas-column">
            {#each areasColumn2 as area}
              <div class="area-item">
                <span class="pin-icon">📍</span>
                <span class="area-name">{area}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <p class="areas-note">
          Don't see your area? <a href="#contact">Contact us</a> — we may still be able to assist.
        </p>
      </div>

      <div class="map-container">
        <img 
          src="/images/maps/gauteng-service-area.jpg"
          alt="Map showing service areas across Gauteng including Randburg, Sandton, Fourways and surrounding suburbs"
          loading="lazy"
          class="map-image"
        />
        <div class="map-fallback">
          <span class="map-icon">🗺️</span>
          <span class="map-text">Gauteng Service Areas</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .areas-we-serve {
    background: linear-gradient(180deg, var(--bg-main) 0%, var(--aqua-light) 100%);
    padding: 5rem 1.5rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3.5rem;
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
    gap: 4rem;
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
    padding: 0.5rem 0;
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
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    border: 3px solid white;
    aspect-ratio: 4 / 3;
    background: var(--aqua-tint);
  }

  .map-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .map-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: linear-gradient(135deg, var(--aqua-tint), var(--aqua-light));
    z-index: -1;
  }

  .map-icon {
    font-size: 4rem;
    opacity: 0.4;
  }

  .map-text {
    color: var(--aqua-secondary);
    font-weight: 600;
    font-size: 1.1rem;
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
      padding: 4rem 1.5rem;
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
