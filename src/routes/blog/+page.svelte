<script>
  import Seo from '$lib/components/Seo.svelte';
  import { posts } from '$lib/content/posts.js';
  import { breadcrumbs, webPage, localBusiness } from '$lib/config/schema.js';

  const title = 'Blog | Pool & Home Maintenance Tips — Marshall Projects & Aqua-Genie';
  const description =
    'Practical pool care and home maintenance advice for Gauteng homeowners — servicing schedules, green-pool recovery, waterproofing, pool heating, and more.';

  const fmt = (d) => new Date(d).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });

  const jsonld = [
    localBusiness(),
    webPage({ name: 'Blog', description, path: '/blog' }),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' }
    ])
  ];
</script>

<Seo {title} {description} path="/blog" {jsonld} />

<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>Blog
    </nav>
    <h1>Advice & Insights</h1>
    <p class="lead">
      Practical pool care and home maintenance tips for Gauteng homeowners.
    </p>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="blog-grid">
      {#each posts as post}
        <a class="post-card" href="/blog/{post.slug}">
          <div class="thumb" style="background-image:url('{post.image}')"></div>
          <div class="body">
            <div class="meta">
              <span class="cat">{post.category}</span>
              <span class="dot">•</span>
              <span>{post.readingTime}</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div class="foot">
              <time datetime={post.date}>{fmt(post.date)}</time>
              <span class="more">Read →</span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
  .post-card {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    transition: all var(--transition-base);
  }
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  .thumb {
    aspect-ratio: 16 / 9;
    background-size: cover;
    background-position: center;
    background-color: var(--aqua-tint);
  }
  .body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--mp-primary);
    opacity: 0.8;
    margin-bottom: 0.6rem;
  }
  .cat {
    color: var(--aqua-secondary);
    font-weight: 700;
    opacity: 1;
  }
  .body h2 {
    font-size: 1.3rem;
    color: var(--mp-secondary);
    margin-bottom: 0.6rem;
    line-height: 1.3;
  }
  .body p {
    flex: 1;
    line-height: 1.65;
    margin-bottom: 1.25rem;
    font-size: 0.98rem;
  }
  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--mp-primary);
  }
  .more {
    font-weight: 700;
    color: var(--aqua-secondary);
  }
  @media (max-width: 1024px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
