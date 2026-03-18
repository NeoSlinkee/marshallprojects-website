<script>
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="mid-page-visual">
  <div class="container">
    <div class="content-wrapper">
      <div class="visual-side">
        <img 
          src="/images/misc/dual-service.jpg" 
          alt="Pool and property maintenance services"
          loading="lazy"
          on:error={(e) => e.target.parentElement.classList.add('image-error')}
        />
        <div class="visual-fallback">
          <span class="fallback-icon">🏊🔨</span>
        </div>
      </div>
      
      <div class="text-side">
        <h2>Complete Pool & Property Care Under One Roof</h2>
        <p>
          Why juggle multiple service providers when one trusted team can handle everything? 
          Aqua-Genie and Marshall Projects work together to provide comprehensive home maintenance 
          solutions — from sparkling pools to reliable handyman services.
        </p>
        <p>
          Save time, reduce hassle, and enjoy peace of mind knowing your entire property is 
          in capable hands. One point of contact, consistent quality, and service you can count on.
        </p>
        <button class="cta-button" on:click={scrollToContact}>
          Get Your Free Quote
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .mid-page-visual {
    background: linear-gradient(135deg, var(--aqua-tint) 0%, var(--mp-light) 100%);
    padding: 5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .visual-side {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, var(--aqua-primary) 0%, var(--mp-primary) 100%);
  }

  .visual-side img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .visual-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .visual-side.image-error .visual-fallback {
    opacity: 1;
  }

  .visual-side.image-error img {
    display: none;
  }

  .fallback-icon {
    font-size: 5rem;
    opacity: 0.5;
  }

  .text-side {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h2 {
    font-size: 2.25rem;
    color: var(--mp-secondary);
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-main);
  }

  .cta-button {
    background: var(--aqua-primary);
    color: white;
    border: 2px solid var(--aqua-primary);
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
    font-family: inherit;
    align-self: flex-start;
  }

  .cta-button:hover {
    background: var(--aqua-secondary);
    border-color: var(--aqua-secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .cta-button:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .mid-page-visual {
      padding: 4rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .content-wrapper {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .visual-side {
      order: 2;
    }

    .text-side {
      order: 1;
    }

    h2 {
      font-size: 1.85rem;
    }

    p {
      font-size: 1.05rem;
    }

    .cta-button {
      width: 100%;
      text-align: center;
    }
  }
</style>
