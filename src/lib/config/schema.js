// JSON-LD schema builders. Keep structured data consistent across pages.
import { SITE, GOOGLE, allServices } from './site.js';

const BUSINESS_ID = SITE.url + '/#business';

/** Core LocalBusiness node referenced by @id from other schema. */
export function localBusiness() {
  const node = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE.legalName,
    alternateName: ['Aqua-Genie', 'Marshall Projects'],
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.emails[0],
    image: SITE.url + '/images/hero/hero-pool.jpg',
    areaServed: {
      '@type': 'State',
      name: SITE.region,
      containedInPlace: { '@type': 'Country', name: SITE.country }
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pool & Home Maintenance Services',
      itemListElement: allServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: SITE.url + '/services/' + s.slug }
      }))
    }
  };
  const mapLink = GOOGLE.mapUrl || (GOOGLE.placeId ? 'https://www.google.com/maps/place/?q=place_id:' + GOOGLE.placeId : '');
  if (mapLink) node.hasMap = mapLink;
  if (GOOGLE.mapUrl) node.sameAs = [GOOGLE.mapUrl];
  if (GOOGLE.ratingValue && GOOGLE.reviewCount) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE.ratingValue,
      reviewCount: GOOGLE.reviewCount
    };
  }
  return node;
}

export function breadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE.url + it.path
    }))
  };
}

export function serviceSchema({ name, description, path, areaServed = SITE.region }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: SITE.url + path,
    serviceType: name,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'AdministrativeArea', name: areaServed }
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

export function webPage({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: SITE.url + path,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    about: { '@id': BUSINESS_ID }
  };
}
