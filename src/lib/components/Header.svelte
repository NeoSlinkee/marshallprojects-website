<script>
  import { page } from '$app/stores';
  import { poolServices, homeServices } from '$lib/config/site.js';

  let mobileOpen = false;
  let mobileServicesOpen = false;

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/areas', label: 'Areas We Serve' },
    { href: '/why-choose-us', label: 'Why Choose Us' },
    { href: '/blog', label: 'Blog' }
  ];

  $: path = $page.url.pathname;
  $: isActive = (href) => path === href || (href !== '/' && path.startsWith(href + '/')) || path.startsWith(href);

  function closeAll() {
    mobileOpen = false;
    mobileServicesOpen = false;
  }

  // Close menus on route change
  $: if (path) closeAll();
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && closeAll()} />

<header class="site-header">
  <div class="header-inner">
    <a href="/" class="brand" aria-label="Marshall Projects and Aqua-Genie home">
      <img src="/images/aquagenie-logo-optimized.webp" alt="Aqua-Genie" width="120" height="80" class="brand-logo" />
      <img src="/images/marshallprojects-logo-optimized.webp" alt="Marshall Projects" width="120" height="80" class="brand-logo" />
    </a>

    <nav class="desktop-nav" aria-label="Primary">
      <ul>
        <li class="has-dropdown">
          <a
            href="/services"
            class="nav-link dropdown-toggle"
            class:active={path.startsWith('/services')}
          >
            Services <span class="caret" aria-hidden="true">▾</span>
          </a>
          <div class="mega-menu">
            <div class="mega-col">
              <a href="/services" class="mega-head aqua">Aqua-Genie · Pool</a>
              {#each poolServices as s}
                <a href="/services/{s.slug}">{s.title}</a>
              {/each}
            </div>
            <div class="mega-col">
              <a href="/services" class="mega-head mp">Marshall Projects · Home</a>
              {#each homeServices as s}
                <a href="/services/{s.slug}">{s.title}</a>
              {/each}
            </div>
          </div>
        </li>
        {#each navLinks as link}
          <li>
            <a href={link.href} class="nav-link" class:active={isActive(link.href)}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <a href="/#contact" class="cta-quote desktop-cta">Get a Quote</a>

    <button
      class="hamburger"
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
      on:click={() => (mobileOpen = !mobileOpen)}
    >
      <span class:open={mobileOpen}></span>
      <span class:open={mobileOpen}></span>
      <span class:open={mobileOpen}></span>
    </button>
  </div>

  {#if mobileOpen}
    <nav class="mobile-nav" aria-label="Mobile">
      <button
        class="mobile-link mobile-services-toggle"
        aria-expanded={mobileServicesOpen}
        on:click={() => (mobileServicesOpen = !mobileServicesOpen)}
      >
        Services <span class="caret" class:flip={mobileServicesOpen} aria-hidden="true">▾</span>
      </button>
      {#if mobileServicesOpen}
        <div class="mobile-sub">
          <a href="/services" class="mobile-sublink strong">All Services</a>
          <span class="mobile-group">Aqua-Genie · Pool</span>
          {#each poolServices as s}
            <a href="/services/{s.slug}" class="mobile-sublink">{s.title}</a>
          {/each}
          <span class="mobile-group">Marshall Projects · Home</span>
          {#each homeServices as s}
            <a href="/services/{s.slug}" class="mobile-sublink">{s.title}</a>
          {/each}
        </div>
      {/if}
      {#each navLinks as link}
        <a href={link.href} class="mobile-link" class:active={isActive(link.href)}>{link.label}</a>
      {/each}
      <a href="/#contact" class="cta-quote mobile-cta">Get a Quote</a>
    </nav>
  {/if}
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 900;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--divider);
    box-shadow: var(--shadow-sm);
  }

  .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.6rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  .brand-logo {
    height: 44px;
    width: auto;
  }

  .desktop-nav {
    margin-left: auto;
  }

  .desktop-nav ul {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.55rem 0.85rem;
    border-radius: var(--radius-sm);
    color: var(--mp-secondary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.98rem;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: all var(--transition-base);
    white-space: nowrap;
  }

  .nav-link:hover {
    background: var(--aqua-tint);
    color: var(--aqua-secondary);
  }

  .nav-link.active {
    color: var(--aqua-secondary);
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
  }

  .has-dropdown {
    position: relative;
  }

  .caret {
    font-size: 0.7rem;
    transition: transform var(--transition-base);
  }
  .caret.flip {
    transform: rotate(180deg);
  }

  .mega-menu {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    min-width: 460px;
    background: white;
    border: 1px solid var(--divider);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    padding: 1.25rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(6px);
    transition: opacity var(--transition-base), transform var(--transition-base),
      visibility var(--transition-base);
    z-index: 950;
  }
  /* Bridge the gap so the menu doesn't close when moving the cursor into it */
  .mega-menu::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    height: 8px;
  }
  .has-dropdown:hover .mega-menu,
  .has-dropdown:focus-within .mega-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mega-col {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .mega-head {
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 0.35rem 0.5rem;
    margin-bottom: 0.25rem;
    border-radius: var(--radius-sm);
    text-decoration: none;
  }
  .mega-head.aqua {
    color: var(--aqua-secondary);
    background: var(--aqua-tint);
  }
  .mega-head.mp {
    color: var(--mp-secondary);
    background: var(--mp-light);
  }

  .mega-col a:not(.mega-head) {
    padding: 0.4rem 0.5rem;
    border-radius: var(--radius-sm);
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.92rem;
    transition: all var(--transition-fast);
  }
  .mega-col a:not(.mega-head):hover {
    background: var(--aqua-tint);
    color: var(--aqua-secondary);
  }

  .cta-quote {
    background: var(--aqua-primary);
    color: white;
    padding: 0.6rem 1.4rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all var(--transition-base);
    white-space: nowrap;
    box-shadow: var(--shadow-sm);
  }
  .cta-quote:hover {
    background: var(--aqua-secondary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
  }
  .hamburger span {
    display: block;
    height: 3px;
    width: 26px;
    background: var(--mp-secondary);
    border-radius: 2px;
    transition: all var(--transition-base);
  }
  .hamburger span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger span.open:nth-child(2) {
    opacity: 0;
  }
  .hamburger span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .mobile-nav {
    display: none;
    flex-direction: column;
    padding: 0.5rem 1.25rem 1.25rem;
    border-top: 1px solid var(--divider);
    background: white;
  }

  .mobile-link,
  .mobile-services-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 0.5rem;
    color: var(--mp-secondary);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    border-bottom: 1px solid var(--aqua-light);
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
  }
  .mobile-link.active {
    color: var(--aqua-secondary);
  }

  .mobile-sub {
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0 0.5rem 0.75rem;
    border-left: 3px solid var(--aqua-tint);
    margin: 0.25rem 0 0.5rem 0.5rem;
  }
  .mobile-sublink {
    padding: 0.55rem 0.5rem;
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.98rem;
  }
  .mobile-sublink.strong {
    font-weight: 700;
    color: var(--aqua-secondary);
  }
  .mobile-group {
    padding: 0.6rem 0.5rem 0.2rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--mp-primary);
    opacity: 0.7;
  }

  .mobile-cta {
    margin-top: 1rem;
    text-align: center;
  }

  @media (max-width: 900px) {
    .desktop-nav,
    .desktop-cta {
      display: none;
    }
    .hamburger {
      display: flex;
    }
    .mobile-nav {
      display: flex;
    }
    .brand-logo {
      height: 38px;
    }
  }
</style>
