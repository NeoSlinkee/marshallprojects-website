import { error } from '@sveltejs/kit';
import { areas, getArea } from '$lib/config/site.js';

export const prerender = true;

export function entries() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function load({ params }) {
  const area = getArea(params.slug);
  if (!area) throw error(404, 'Area not found');
  return { area };
}
