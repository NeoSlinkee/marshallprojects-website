<script>
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="pre-footer">
  <div class="pre-footer-content">
    <p class="cta-text">
      Need help with your pool or home maintenance? <button class="cta-link" on:click={scrollToContact}>Let's talk.</button>
    </p>
  </div>
</section>

<style>
  .pre-footer {
    background: linear-gradient(180deg, var(--mp-primary) 0%, var(--mp-secondary) 100%);
    padding: 3rem 0;
  }

  .pre-footer-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
    text-align: center;
  }

  .cta-text {
    font-size: 1.4rem;
    color: white;
    font-weight: 500;
    line-height: 1.6;
    margin: 0;
  }

  .cta-link {
    background: none;
    border: none;
    color: var(--aqua-primary);
    font-size: inherit;
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: all var(--transition-base);
    font-family: inherit;
  }

  .cta-link:hover {
    color: white;
    text-decoration-color: var(--aqua-primary);
  }

  @media (max-width: 768px) {
    .pre-footer {
      padding: 2.5rem 0;
    }

    .pre-footer-content {
      padding: 0 1.25rem;
    }

    .cta-text {
      font-size: 1.2rem;
    }
  }
</style>
