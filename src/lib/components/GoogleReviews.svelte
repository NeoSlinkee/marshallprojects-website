<script>
  import { onMount } from 'svelte';
  import { GOOGLE, SITE, curatedReviews } from '$lib/config/site.js';

  // Live data (populated only if a Places API key + placeId are configured).
  let liveReviews = null;
  let liveRating = GOOGLE.ratingValue || null;
  let liveCount = GOOGLE.reviewCount || null;
  let isLive = false;

  $: reviews = liveReviews && liveReviews.length ? liveReviews : curatedReviews;
  $: heading = isLive ? 'Google Reviews' : 'What Our Clients Say';
  $: reviewsLink = GOOGLE.reviewsUrl || (GOOGLE.placeId ? `https://search.google.com/local/reviews?placeid=${GOOGLE.placeId}` : '');
  $: writeLink = GOOGLE.writeReviewUrl || (GOOGLE.placeId ? `https://search.google.com/local/writereview?placeid=${GOOGLE.placeId}` : '');

  async function loadLiveReviews() {
    if (!GOOGLE.placesApiKey || !GOOGLE.placeId) return;
    try {
      if (!window.google || !window.google.maps || !window.google.maps.importLibrary) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE.placesApiKey}&libraries=places&v=weekly&loading=async`;
          s.async = true;
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      const { Place } = await window.google.maps.importLibrary('places');
      const place = new Place({ id: GOOGLE.placeId });
      await place.fetchFields({ fields: ['reviews', 'rating', 'userRatingCount'] });
      if (place.reviews && place.reviews.length) {
        liveReviews = place.reviews.slice(0, 6).map((r) => ({
          name: r.authorAttribution?.displayName || 'Google user',
          location: '',
          rating: r.rating || 5,
          text: r.text || ''
        }));
        liveRating = place.rating ? place.rating.toFixed(1) : liveRating;
        liveCount = place.userRatingCount ?? liveCount;
        isLive = true;
      }
    } catch (e) {
      // Silent fallback to curated reviews.
      console.warn('Google reviews unavailable, using curated reviews.', e);
    }
  }

  onMount(loadLiveReviews);
</script>

<section class="reviews">
  <div class="container">
    <div class="section-header">
      <h2>{heading}</h2>
      <p class="subtitle">Trusted by homeowners across Gauteng</p>

      {#if liveRating}
        <div class="rating-badge">
          <span class="badge-score">{liveRating}</span>
          <span class="badge-stars" aria-hidden="true">★★★★★</span>
          {#if liveCount}<span class="badge-count">from {liveCount} reviews</span>{/if}
          {#if isLive}<span class="badge-google">on Google</span>{/if}
        </div>
      {/if}
    </div>

    <div class="reviews-grid">
      {#each reviews as review}
        <div class="review-card">
          <div class="stars" aria-label="{review.rating} out of 5 stars">
            {#each Array(review.rating) as _}<span class="star">★</span>{/each}
          </div>
          <p class="review-text">"{review.text}"</p>
          <div class="review-author">
            <p class="author-name">{review.name}</p>
            {#if review.location}<p class="author-location">{review.location}</p>{/if}
          </div>
        </div>
      {/each}
    </div>

    {#if reviewsLink || writeLink}
      <div class="review-actions">
        {#if reviewsLink}
          <a href={reviewsLink} target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            Read our Google reviews
          </a>
        {/if}
        {#if writeLink}
          <a href={writeLink} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Leave us a review
          </a>
        {/if}
      </div>
    {/if}
  </div>
</section>

<style>
  .reviews {
    background: var(--bg-main);
    padding: 3.5rem 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  h2 {
    font-size: 2.5rem;
    color: var(--mp-secondary);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 1.2rem;
    color: var(--mp-primary);
    opacity: 0.8;
    max-width: none;
  }
  .rating-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem 1.1rem;
    background: var(--aqua-tint);
    border-radius: 999px;
    font-weight: 600;
    color: var(--mp-secondary);
  }
  .badge-score {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--aqua-secondary);
  }
  .badge-stars {
    color: #ffb703;
    letter-spacing: 1px;
  }
  .badge-count,
  .badge-google {
    font-size: 0.9rem;
    opacity: 0.85;
  }
  .badge-google {
    font-weight: 700;
    color: var(--aqua-secondary);
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .review-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border-top: 4px solid var(--aqua-primary);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
  }
  .review-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  .stars {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1.25rem;
  }
  .star {
    color: #ffd700;
    font-size: 1.25rem;
  }
  .review-text {
    flex: 1;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    font-style: italic;
    max-width: none;
  }
  .review-author {
    border-top: 1px solid #e5e5e5;
    padding-top: 1rem;
  }
  .author-name {
    font-weight: 600;
    color: var(--mp-secondary);
    margin-bottom: 0.25rem;
  }
  .author-location {
    font-size: 0.95rem;
    color: var(--aqua-secondary);
    margin: 0;
  }

  .review-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2.5rem;
  }

  @media (max-width: 1024px) {
    .reviews-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    .review-card {
      padding: 1.5rem;
    }
  }
</style>
