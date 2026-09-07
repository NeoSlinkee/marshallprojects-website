<script>
  import { onMount } from 'svelte';

  const STORAGE_KEY = 'mp-cookie-consent';
  const GA_ID = 'G-7P7NWWPMV0';

  let show = false;

  function loadAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch (e) {
      // localStorage unavailable, proceed without persisting
    }
    show = false;
    loadAnalytics();
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch (e) {
      // ignore
    }
    show = false;
  }

  onMount(() => {
    let choice = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }

    if (choice === 'accepted') {
      loadAnalytics();
    } else if (choice === 'declined') {
      // stay off
    } else {
      show = true;
    }
  });
</script>

{#if show}
  <div class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
    <div class="cookie-inner">
      <p class="cookie-text">
        We use cookies to understand how visitors use our site so we can improve it. You can accept
        analytics cookies or continue with only the essentials. See our
        <a href="/privacy">Privacy Policy</a> for details.
      </p>
      <div class="cookie-actions">
        <button class="btn-decline" on:click={decline}>Essentials only</button>
        <button class="btn-accept" on:click={accept}>Accept analytics</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: var(--mp-secondary, #2f2f2f);
    color: #fff;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
  }

  .cookie-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cookie-text {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    flex: 1;
    min-width: 260px;
  }

  .cookie-text a {
    color: #fff;
    text-decoration: underline;
  }

  .cookie-actions {
    display: flex;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  .btn-accept,
  .btn-decline {
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: all 150ms ease;
  }

  .btn-accept {
    background: var(--accent, #ea580c);
    color: #fff;
  }

  .btn-accept:hover {
    background: var(--accent-hover, #c2410c);
  }

  .btn-decline {
    background: transparent;
    color: #fff;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
  }

  .btn-decline:hover {
    border-color: #fff;
  }

  .btn-accept:focus-visible,
  .btn-decline:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    .cookie-inner {
      padding: 1rem;
    }

    .cookie-actions {
      width: 100%;
    }

    .btn-accept,
    .btn-decline {
      flex: 1;
    }
  }
</style>
