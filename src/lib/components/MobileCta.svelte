<script>
  import { SITE } from '$lib/config/site.js';
</script>

<div class="mobile-cta">
  <a href="tel:{SITE.phoneTel}" class="mc-btn mc-call">
    <span aria-hidden="true">📞</span> Call
  </a>
  <a href="/#contact" class="mc-btn mc-quote">Get a Quote</a>
</div>

<style>
  .mobile-cta {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-cta {
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 0.5rem;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 950;
      padding: 0.5rem 0.75rem calc(0.5rem + env(safe-area-inset-bottom));
      background: rgba(255, 255, 255, 0.97);
      backdrop-filter: blur(8px);
      border-top: 1px solid var(--divider);
      box-shadow: 0 -4px 16px rgba(20, 40, 60, 0.1);
    }
    .mc-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.85rem 1rem;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      transition: all var(--transition-base);
    }
    .mc-call {
      background: var(--aqua-tint);
      color: var(--aqua-secondary);
      border: 1px solid var(--aqua-primary);
    }
    .mc-quote {
      background: var(--accent);
      color: #fff;
      box-shadow: 0 6px 16px rgba(234, 88, 12, 0.28);
    }
    /* keep the fixed bar from covering page content / footer */
    :global(body) {
      padding-bottom: 68px;
    }
  }
</style>
