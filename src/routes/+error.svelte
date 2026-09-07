<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Page Not Found | Marshall Projects & Aqua-Genie</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="error-page">
  <div class="error-inner">
    <p class="code">{$page.status}</p>
    <h1>We couldn't find that page</h1>
    <p class="message">
      The page you're looking for might have moved or no longer exists. Let's get you back on track.
    </p>

    <div class="actions">
      <a href="/" class="btn btn-primary">Back to Home</a>
      <a href="/#contact" class="btn btn-secondary">Request a Quote</a>
    </div>

    <div class="links">
      <p>Or jump straight to:</p>
      <ul>
        <li><a href="/services">Our Services</a></li>
        <li><a href="/areas">Areas We Serve</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>
  </div>
</section>

<style>
  .error-page {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.5rem;
    text-align: center;
  }

  .error-inner {
    max-width: 520px;
  }

  .code {
    font-family: var(--font-heading);
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1;
    color: var(--aqua-primary);
    margin: 0 0 0.5rem;
  }

  h1 {
    font-size: 1.8rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.75rem;
  }

  .message {
    color: var(--mp-primary);
    font-size: 1.05rem;
    margin-bottom: 1.75rem;
  }

  .actions {
    display: flex;
    gap: 0.9rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 200ms ease;
  }

  .btn-primary {
    background: var(--accent);
    color: var(--accent-fg);
  }

  .btn-primary:hover {
    background: var(--accent-hover);
    transform: translateY(-1px);
  }

  .btn-secondary {
    background: white;
    color: var(--aqua-secondary);
    border: 2px solid var(--aqua-secondary);
  }

  .btn-secondary:hover {
    background: var(--aqua-tint);
  }

  .links p {
    font-size: 0.9rem;
    color: var(--mp-primary);
    opacity: 0.7;
    margin-bottom: 0.75rem;
  }

  .links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .links a {
    color: var(--aqua-secondary);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    .code {
      font-size: 3.5rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
</style>
