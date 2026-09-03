<script>
  import Seo from '$lib/components/Seo.svelte';
  import { posts } from '$lib/content/posts.js';
  import { SITE } from '$lib/config/site.js';
  import { breadcrumbs, localBusiness } from '$lib/config/schema.js';

  export let data;
  $: post = data.post;
  $: related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const fmt = (d) => new Date(d).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });

  $: path = `/blog/${post.slug}`;
  $: article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: SITE.url + post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.legalName },
    publisher: { '@type': 'Organization', name: SITE.legalName },
    mainEntityOfPage: SITE.url + path
  };
  $: jsonld = [
    localBusiness(),
    article,
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path }
    ])
  ];
</script>

<Seo title="{post.title} | Marshall Projects & Aqua-Genie" description={post.description} {path} image={post.image} type="article" {jsonld} />

<section class="page-hero">
  <div class="container-narrow">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="sep">/</span>
      <a href="/blog">Blog</a><span class="sep">/</span>{post.category}
    </nav>
    <p class="meta">
      <span class="cat">{post.category}</span>
      <span class="dot">•</span>
      <time datetime={post.date}>{fmt(post.date)}</time>
      <span class="dot">•</span>
      <span>{post.readingTime} read</span>
    </p>
    <h1>{post.title}</h1>
  </div>
</section>

<article class="section">
  <div class="container-narrow">
    <img class="cover" src={post.image} alt={post.title} width="820" height="440" loading="eager" />
    <div class="prose">
      {@html post.body}
    </div>
  </div>
</article>

<section class="section tint">
  <div class="container-narrow">
    <h2 class="related-head">Keep reading</h2>
    <div class="related">
      {#each related as r}
        <a class="rel-card" href="/blog/{r.slug}">
          <div class="rel-thumb" style="background-image:url('{r.image}')"></div>
          <div class="rel-body">
            <span class="cat">{r.category}</span>
            <h3>{r.title}</h3>
          </div>
        </a>
      {/each}
    </div>
    <p class="back"><a href="/blog">← All articles</a></p>
  </div>
</section>

<style>
  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    opacity: 0.95;
    margin-bottom: 0.75rem;
  }
  .cat {
    font-weight: 700;
  }
  .dot {
    opacity: 0.6;
  }
  .cover {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    margin-bottom: 2rem;
  }
  .related-head {
    font-size: 1.6rem;
    color: var(--mp-secondary);
    margin-bottom: 1.5rem;
  }
  .related {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .rel-card {
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
  .rel-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  .rel-thumb {
    aspect-ratio: 16 / 9;
    background-size: cover;
    background-position: center;
    background-color: var(--aqua-tint);
  }
  .rel-body {
    padding: 1.25rem;
  }
  .rel-body .cat {
    font-size: 0.8rem;
    color: var(--aqua-secondary);
  }
  .rel-body h3 {
    font-size: 1.1rem;
    color: var(--mp-secondary);
    margin-top: 0.35rem;
    line-height: 1.3;
  }
  .back {
    margin-top: 2rem;
  }
  .back a {
    font-weight: 700;
    color: var(--aqua-secondary);
    text-decoration: none;
  }
  @media (max-width: 640px) {
    .related {
      grid-template-columns: 1fr;
    }
  }
</style>
