import { error } from '@sveltejs/kit';
import { allServices, getService } from '$lib/config/site.js';

export const prerender = true;

export function entries() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
  const service = getService(params.slug);
  if (!service) throw error(404, 'Service not found');
  return { service };
}
