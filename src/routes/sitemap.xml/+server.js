import { SITE, allServices, areas } from '$lib/config/site.js';
import { posts } from '$lib/content/posts.js';

export const prerender = true;

const today = new Date().toISOString().slice(0, 10);

function url(path, { changefreq = 'monthly', priority = '0.7', lastmod = today } = {}) {
  const loc = SITE.url + (path === '/' ? '/' : path);
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export function GET() {
  const entries = [
    url('/', { changefreq: 'weekly', priority: '1.0' }),
    url('/about', { priority: '0.7' }),
    url('/why-choose-us', { priority: '0.7' }),
    url('/services', { priority: '0.9' }),
    url('/areas', { priority: '0.8' }),
    url('/blog', { changefreq: 'weekly', priority: '0.7' }),
    url('/ai-visibility', { priority: '0.6' }),
    ...allServices.map((s) => url(`/services/${s.slug}`, { priority: '0.8' })),
    ...areas.map((a) => url(`/areas/${a.slug}`, { priority: '0.7' })),
    ...posts.map((p) => url(`/blog/${p.slug}`, { priority: '0.6', lastmod: p.date }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
