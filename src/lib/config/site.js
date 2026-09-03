// ---------------------------------------------------------------------------
// Central site configuration & content
// Single source of truth for business details, services, and service areas.
// Nav, footer, service/area pages, and JSON-LD all read from here.
// ---------------------------------------------------------------------------

export const SITE = {
  legalName: 'Marshall Projects & Protective Coatings CC',
  name: 'Marshall Projects & Aqua-Genie',
  shortName: 'Marshall Projects',
  url: 'https://marshallprojects.co.za',
  description:
    'Professional swimming pool maintenance and handyman services across Gauteng, South Africa. Aqua-Genie pool care and Marshall Projects property maintenance — reliable, honest, local.',
  phoneDisplay: '+27 (0)79 228 1033',
  phoneTel: '+27792281033',
  whatsapp: '27792281033',
  whatsappMessage: "Hello, I'd like to enquire about your services.",
  emails: ['gautengprojects@gmail.com', 'aquageniepools@gmail.com'],
  region: 'Gauteng',
  regionCode: 'ZA-GT',
  country: 'South Africa',
  countryCode: 'ZA'
};

export function whatsappUrl(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// ---------------------------------------------------------------------------
// Google Business Profile
// ---------------------------------------------------------------------------
// TODO(client): Fill these in from the live Google Business Profile.
//   - embedUrl:  Google Maps > Share > Embed a map > copy the src="..." URL.
//   - placeId:   https://developers.google.com/maps/documentation/places/web-service/place-id
//   - reviewsUrl / writeReviewUrl: from the Business Profile "Get more reviews" link.
//   - placesApiKey: OPTIONAL. Only needed to pull live review text/rating into the
//                   GoogleReviews widget. A browser (HTTP referrer) restricted key.
// Until embedUrl is set, the Maps component falls back to a keyless query embed of
// "Gauteng"; until reviewsUrl/placeId are set, the reviews widget links out generically.
export const GOOGLE = {
  embedUrl: '', // e.g. 'https://www.google.com/maps/embed?pb=...'
  placeId: '', // e.g. 'ChIJ...'
  reviewsUrl: '', // public "read reviews" link to the Business Profile
  writeReviewUrl: '', // "write a review" deep link (…/review?placeid=…)
  placesApiKey: '', // optional, browser-restricted, for live review pull
  // Optional manual aggregate to display + emit in schema BEFORE live pull is
  // wired. Only set these to real, verifiable numbers from the Business Profile
  // (Google's rich-result policy requires genuine review data).
  ratingValue: '', // e.g. '4.9'
  reviewCount: '' // e.g. '27'
};

// Curated client reviews shown until live Google reviews are wired up.
// These mirror the on-site testimonials — they are NOT presented as Google reviews.
export const curatedReviews = [
  {
    name: 'Lerato M.',
    location: 'Randburg',
    rating: 5,
    text: 'Excellent pool maintenance service. Reliable and always on time. My pool has never looked better!'
  },
  {
    name: 'David K.',
    location: 'Bryanston',
    rating: 5,
    text: 'Professional handyman services. They transformed my green pool and fixed several issues around the house. Highly recommend!'
  },
  {
    name: 'Sarah P.',
    location: 'Sandton',
    rating: 5,
    text: 'Trustworthy and efficient. They handle both our pool and property maintenance with excellent results every time.'
  }
];

// ---------------------------------------------------------------------------
// Services — Aqua-Genie (pool) division
// ---------------------------------------------------------------------------
export const poolServices = [
  {
    slug: 'pool-maintenance',
    division: 'pool',
    title: 'Pool Maintenance',
    tagline: 'Weekly & monthly pool servicing',
    summary:
      'Regular pool servicing, water balancing, and chemical testing to keep your pool clean, safe, and swim-ready all year.',
    image: '/images/gallery/pool-1.jpg',
    icon: '🏊',
    keywords: ['pool maintenance Randburg', 'pool cleaning Gauteng', 'weekly pool service'],
    intro: `A well-maintained pool stays clear, healthy, and cheaper to run. Aqua-Genie provides scheduled weekly and monthly pool servicing for homeowners across Gauteng — testing and balancing the water, cleaning the pool and equipment, and catching small problems before they become expensive repairs.`,
    features: [
      'Water testing and chemical balancing (chlorine, pH, alkalinity)',
      'Skimming, brushing, and vacuuming of the pool',
      'Emptying weirs and pump baskets, backwashing the filter',
      'Checking pump, filter, and automatic cleaner operation',
      'Written feedback on anything that needs attention'
    ],
    process: [
      'We assess your pool and agree on a weekly or monthly schedule.',
      'On each visit we clean, test, and balance the water.',
      'We report any wear or faults so nothing gets missed.'
    ],
    faqs: [
      {
        q: 'How often should my pool be serviced?',
        a: 'Most Gauteng pools do best with a weekly service in summer and a fortnightly or monthly service through the cooler months. We tailor the schedule to your pool and usage.'
      },
      {
        q: 'Do I need to be home for the service?',
        a: 'No. As long as we can safely access the pool and equipment, you do not need to be home. We leave written feedback after every visit.'
      }
    ]
  },
  {
    slug: 'pool-repairs',
    division: 'pool',
    title: 'Pool Repairs',
    tagline: 'Equipment, leaks & structural repairs',
    summary:
      'Professional pool equipment repairs, leak detection, and structural fixes to get your pool functioning perfectly again.',
    image: '/images/gallery/pool-2.jpg',
    icon: '🔧',
    keywords: ['pool repair Johannesburg', 'pool leak detection', 'pool equipment repair'],
    intro: `When something stops working, a pool can go from an asset to a headache overnight. Aqua-Genie diagnoses and repairs pool equipment, plumbing, and structural issues — from noisy pumps and failing seals to persistent leaks and cracked surfaces.`,
    features: [
      'Pump, motor, and multiport valve repairs',
      'Leak detection and pipe repairs',
      'Weir, light, and fitting replacements',
      'Crack and surface repairs',
      'Honest assessment of repair vs. replacement'
    ],
    process: [
      'We inspect the pool and identify the root cause.',
      'You get a clear explanation and a fair quote.',
      'We carry out the repair and confirm everything works.'
    ],
    faqs: [
      {
        q: 'How do you find a pool leak?',
        a: 'We check the obvious points first — fittings, plumbing, and the equipment — then use pressure testing and water-loss checks to isolate hidden leaks before repairing them.'
      },
      {
        q: 'Is it worth repairing an old pump?',
        a: 'Sometimes. We give you an honest comparison of repair cost versus a more efficient new pump so you can make the sensible long-term choice.'
      }
    ]
  },
  {
    slug: 'pool-refurbishments',
    division: 'pool',
    title: 'Pool Refurbishments',
    tagline: 'Resurfacing, tiling & green-to-clean',
    summary:
      'Complete pool renovations — resurfacing, tiling, coping, and green-to-clean transformations that bring tired pools back to life.',
    image: '/images/gallery/pool-3.jpg',
    icon: '✨',
    keywords: ['pool refurbishment Gauteng', 'pool resurfacing', 'green pool cleanup Gauteng'],
    intro: `Older pools lose their finish, their tiles, and sometimes their colour entirely. Aqua-Genie handles full pool refurbishments — from resurfacing and re-tiling to rescuing a green pool and returning it to sparkling, usable water.`,
    features: [
      'Marbelite / fibreglass resurfacing',
      'Waterline tiling and coping repairs',
      'Green-to-clean pool recovery',
      'Weir, light, and fitting upgrades',
      'Full water balancing on completion'
    ],
    process: [
      'We assess the pool condition and agree on scope.',
      'We refurbish surfaces, tiling, and fittings as needed.',
      'We fill, balance, and hand back a swim-ready pool.'
    ],
    faqs: [
      {
        q: 'Can you fix a green pool without draining it?',
        a: 'Often, yes. A green pool can usually be recovered through filtration and chemical treatment. We only recommend draining when the water quality or surface genuinely requires it.'
      },
      {
        q: 'How long does resurfacing take?',
        a: 'Most residential resurfacing projects take one to two weeks depending on size, condition, and weather. We give you a realistic timeline up front.'
      }
    ]
  },
  {
    slug: 'pool-heating',
    division: 'pool',
    title: 'Pool Heating',
    tagline: 'Solar heating & heat pumps',
    summary:
      'Solar heating and heat pump installations so you can enjoy your pool comfortably for more of the year.',
    image: '/images/gallery/pool-heating.jpg',
    icon: '☀️',
    keywords: ['pool heating Gauteng', 'solar pool heating', 'pool heat pump installation'],
    intro: `A heated pool extends your swimming season well beyond the peak summer months. Aqua-Genie installs solar pool heating and heat pumps sized to your pool, helping you get far more use out of the water you already own.`,
    features: [
      'Solar pool heating panel installations',
      'Heat pump supply and installation',
      'System sizing for your pool volume',
      'Integration with existing pump and plumbing',
      'Advice on running costs and covers'
    ],
    process: [
      'We assess your pool size, position, and sun exposure.',
      'We recommend solar, heat pump, or a combination.',
      'We install and commission the system.'
    ],
    faqs: [
      {
        q: 'Solar heating or a heat pump — which is better?',
        a: 'Solar is cheapest to run and ideal with good roof space and sun. A heat pump gives more consistent, on-demand heat. We recommend the right fit for your home and budget.'
      }
    ]
  },
  {
    slug: 'pump-installations',
    division: 'pool',
    title: 'Pump Installations',
    tagline: 'Energy-efficient circulation',
    summary:
      'New pump installations, replacements, and upgrades for reliable, energy-efficient pool circulation.',
    image: '/images/gallery/pool-4.jpg',
    icon: '⚙️',
    keywords: ['pool pump repair Randburg', 'pool pump replacement', 'pool pump installation'],
    intro: `The pump is the heart of your pool. Aqua-Genie supplies, installs, and upgrades pool pumps — replacing failed or inefficient units with correctly-sized, energy-efficient pumps that keep your water circulating and clear.`,
    features: [
      'Supply and installation of new pool pumps',
      'Like-for-like replacements',
      'Upgrades to energy-efficient models',
      'Correct sizing for your pool and filter',
      'Plumbing and electrical connection'
    ],
    process: [
      'We check your pool volume, filter, and existing setup.',
      'We recommend a correctly-sized, efficient pump.',
      'We install, connect, and test the new pump.'
    ],
    faqs: [
      {
        q: 'What size pump does my pool need?',
        a: 'Pump size depends on your pool volume and filter. An oversized pump wastes electricity; an undersized one leaves the water cloudy. We size it correctly for your specific pool.'
      }
    ]
  },
  {
    slug: 'filter-sand-changes',
    division: 'pool',
    title: 'Filter Sand Changes',
    tagline: 'Clear water, healthy filtration',
    summary:
      'Filter sand replacements and system upgrades to maintain crystal-clear water and healthy filtration.',
    image: '/images/gallery/pool-sand-change.jpg',
    icon: '🪣',
    keywords: ['filter sand change', 'pool filter service Gauteng', 'sand filter replacement'],
    intro: `Filter sand does the quiet work of keeping your water clear — and it wears out. Aqua-Genie replaces filter sand and services filtration systems so your pool keeps filtering properly and the water stays clean.`,
    features: [
      'Filter sand replacement (typically every few years)',
      'Filter inspection and lateral checks',
      'Multiport valve servicing',
      'Backwash and rinse on completion',
      'Advice on filter upgrades where worthwhile'
    ],
    process: [
      'We open and inspect the filter.',
      'We replace the sand and check internal parts.',
      'We reassemble, backwash, and confirm clear filtration.'
    ],
    faqs: [
      {
        q: 'How often should filter sand be changed?',
        a: 'As a rule of thumb, every three to five years — sooner if the water struggles to clear or the filter short-cycles. We can tell you the state of your sand during a service.'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Services — Marshall Projects (home) division
// ---------------------------------------------------------------------------
export const homeServices = [
  {
    slug: 'painting',
    division: 'home',
    title: 'Interior & Exterior Painting',
    tagline: 'Quality finishes that last',
    summary:
      'Professional interior and exterior painting for homes and properties, delivering clean, durable finishes.',
    image: '/images/services/handyman-work.jpg',
    icon: '🎨',
    keywords: ['house painting Gauteng', 'exterior painting Randburg', 'residential painters'],
    intro: `A proper paint job protects your home as much as it improves it. Marshall Projects handles interior and exterior painting for homeowners across Gauteng — with careful preparation, quality materials, and a neat finish that lasts.`,
    features: [
      'Interior and exterior wall painting',
      'Surface preparation, cleaning, and priming',
      'Crack filling and minor plaster repairs',
      'Trim, ceilings, and feature walls',
      'Neat work and a tidy site on completion'
    ],
    process: [
      'We assess the surfaces and agree on colours and scope.',
      'We prepare, prime, and repair as needed.',
      'We apply the coats and leave the site clean.'
    ],
    faqs: [
      {
        q: 'Do you prepare surfaces before painting?',
        a: 'Always. Good preparation — cleaning, filling, and priming — is what makes a paint job last. We never paint straight over problems.'
      }
    ]
  },
  {
    slug: 'waterproofing',
    division: 'home',
    title: 'Waterproofing',
    tagline: 'Roofs, balconies & walls',
    summary:
      'Expert waterproofing for roofs, balconies, and walls to keep water out and protect your property.',
    image: '/images/gallery/Roof Ads IMG_0729.jpg',
    icon: '🛡️',
    keywords: ['waterproofing Gauteng', 'roof waterproofing Randburg', 'balcony waterproofing'],
    intro: `Water damage is one of the most common — and most avoidable — property problems in Gauteng. Marshall Projects waterproofs roofs, balconies, parapets, and walls to stop leaks before they reach your ceilings and structure.`,
    features: [
      'Flat and pitched roof waterproofing',
      'Balcony and parapet waterproofing',
      'Wall and gutter sealing',
      'Membrane and coating systems',
      'Leak investigation and repair'
    ],
    process: [
      'We inspect and find where water is getting in.',
      'We prepare surfaces and apply the right system.',
      'We test and confirm the area is sealed.'
    ],
    faqs: [
      {
        q: 'When is the best time to waterproof?',
        a: 'Before the rainy season, and while surfaces are dry. If you already have a leak, the sooner it is addressed the less internal damage you deal with later.'
      }
    ]
  },
  {
    slug: 'damp-proofing',
    division: 'home',
    title: 'Damp Proofing',
    tagline: 'Eliminate moisture problems',
    summary:
      'Effective damp proofing treatments to eliminate rising and penetrating damp and protect your home.',
    image: null,
    icon: '💧',
    keywords: ['damp proofing Gauteng', 'rising damp treatment', 'damp specialist Randburg'],
    intro: `Damp stains, peeling paint, and musty smells are signs of a moisture problem that only gets worse if ignored. Marshall Projects diagnoses and treats rising and penetrating damp so your walls stay dry and healthy.`,
    features: [
      'Rising damp treatment',
      'Penetrating damp repairs',
      'Damaged plaster removal and replastering',
      'Damp-resistant coatings',
      'Advice on ventilation and drainage'
    ],
    process: [
      'We identify the type and source of the damp.',
      'We treat the cause and repair the damage.',
      'We finish with damp-resistant materials.'
    ],
    faqs: [
      {
        q: 'What causes rising damp?',
        a: 'Rising damp happens when ground moisture is drawn up through walls where the damp-proof course has failed or is missing. It needs treating at the source, not just painting over.'
      }
    ]
  },
  {
    slug: 'roofing-maintenance',
    division: 'home',
    title: 'Roofing Maintenance',
    tagline: 'Repairs, maintenance & replacement',
    summary:
      'Roof repairs, maintenance, and replacements to keep your property secure and weatherproof.',
    image: '/images/gallery/Roof Ads IMG_0729.jpg',
    icon: '🏠',
    keywords: ['roof repairs Gauteng', 'roof maintenance Randburg', 'roofing contractor'],
    intro: `Your roof takes the full force of the Highveld sun, wind, and summer storms. Marshall Projects repairs and maintains residential roofs — replacing broken tiles and sheeting, resealing, and fixing the small faults that let water in.`,
    features: [
      'Tile and sheet roof repairs',
      'Ridge and flashing repairs',
      'Roof cleaning and resealing',
      'Gutter and downpipe repairs',
      'Full roof inspections'
    ],
    process: [
      'We inspect the roof and identify problem areas.',
      'We repair or replace the affected sections.',
      'We check the roof is watertight and sound.'
    ],
    faqs: [
      {
        q: 'How often should a roof be checked?',
        a: 'A yearly inspection — ideally before the rainy season — catches slipped tiles, cracked seals, and blocked gutters while they are still cheap to fix.'
      }
    ]
  },
  {
    slug: 'general-building-maintenance',
    division: 'home',
    title: 'General Building Maintenance',
    tagline: 'One trusted point of contact',
    summary:
      'Comprehensive property maintenance for homeowners, landlords, and tenants — one reliable point of contact.',
    image: '/images/services/handyman-work.jpg',
    icon: '🔨',
    keywords: ['handyman Randburg', 'property maintenance Gauteng', 'building maintenance'],
    intro: `Every home builds up a list of small jobs. Marshall Projects works through them for you — general building and handyman maintenance for homeowners, landlords, and tenants, handled by one reliable team instead of chasing several trades.`,
    features: [
      'General repairs and handyman work',
      'Carpentry, fixtures, and fittings',
      'Wall, ceiling, and plaster repairs',
      'Landlord and tenant maintenance',
      'Snag lists and property touch-ups'
    ],
    process: [
      'You send us your list of jobs.',
      'We quote and schedule the work.',
      'We work through the list and tidy up.'
    ],
    faqs: [
      {
        q: 'Do you take on small jobs?',
        a: 'Yes. We are happy to handle a single repair or a full snag list. Being one point of contact for the odd jobs is exactly what many of our clients value.'
      }
    ]
  },
  {
    slug: 'flooring',
    division: 'home',
    title: 'Flooring Installation & Repairs',
    tagline: 'For all residential flooring',
    summary:
      'Professional flooring installation and repair services for all types of residential flooring.',
    image: null,
    icon: '🪵',
    keywords: ['flooring installation Gauteng', 'laminate flooring Randburg', 'floor repairs'],
    intro: `The right floor, properly laid, changes a whole room. Marshall Projects installs and repairs residential flooring — from laminate and vinyl to tiling repairs — with a level, clean finish.`,
    features: [
      'Laminate and vinyl flooring installation',
      'Floor levelling and preparation',
      'Tiling repairs and replacements',
      'Skirting and trim',
      'Repairs to damaged or lifting floors'
    ],
    process: [
      'We assess the subfloor and your chosen finish.',
      'We prepare, level, and install the flooring.',
      'We finish edges and clean up.'
    ],
    faqs: [
      {
        q: 'Can you lay flooring over an existing floor?',
        a: 'Sometimes, if the existing surface is sound and level. We check the subfloor first and tell you honestly whether it needs preparation or removal.'
      }
    ]
  }
];

export const allServices = [...poolServices, ...homeServices];

export function getService(slug) {
  return allServices.find((s) => s.slug === slug);
}

// ---------------------------------------------------------------------------
// Areas We Serve — Gauteng suburbs
// ---------------------------------------------------------------------------
export const areas = [
  { slug: 'randburg', name: 'Randburg', nearby: ['Ferndale', 'Robindale', 'Northcliff'] },
  { slug: 'ferndale', name: 'Ferndale', nearby: ['Randburg', 'Blairgowrie', 'Cresta'] },
  { slug: 'blairgowrie', name: 'Blairgowrie', nearby: ['Ferndale', 'Randburg', 'Bordeaux'] },
  { slug: 'bordeaux', name: 'Bordeaux', nearby: ['Blairgowrie', 'Cresta', 'Randburg'] },
  { slug: 'northcliff', name: 'Northcliff', nearby: ['Cresta', 'Linden', 'Randburg'] },
  { slug: 'cresta', name: 'Cresta', nearby: ['Northcliff', 'Bordeaux', 'Linden'] },
  { slug: 'linden', name: 'Linden', nearby: ['Northcliff', 'Emmarentia', 'Cresta'] },
  { slug: 'robindale', name: 'Robindale', nearby: ['Randburg', 'Robin Hills', 'Ferndale'] },
  { slug: 'robin-hills', name: 'Robin Hills', nearby: ['Robindale', 'Randburg', 'Ferndale'] },
  { slug: 'emmarentia', name: 'Emmarentia', nearby: ['Linden', 'Rosebank', 'Northcliff'] },
  { slug: 'sandton', name: 'Sandton', nearby: ['Bryanston', 'Rosebank', 'Fourways'] },
  { slug: 'bryanston', name: 'Bryanston', nearby: ['Sandton', 'Fourways', 'Randburg'] },
  { slug: 'rosebank', name: 'Rosebank', nearby: ['Sandton', 'Emmarentia', 'Randburg'] },
  { slug: 'fourways', name: 'Fourways', nearby: ['Bryanston', 'Sandton', 'Midrand'] },
  { slug: 'midrand', name: 'Midrand', nearby: ['Fourways', 'Sandton', 'Bryanston'] },
  { slug: 'roodepoort', name: 'Roodepoort', nearby: ['Northcliff', 'Cresta', 'Randburg'] }
];

export function getArea(slug) {
  return areas.find((a) => a.slug === slug);
}
