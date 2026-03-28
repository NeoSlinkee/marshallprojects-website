<script>
  const testimonials = [
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
</script>

<section class="testimonials">
  <div class="container">
    <div class="section-header">
      <h2>What Our Clients Say</h2>
      <p class="subtitle">Trusted by homeowners across Gauteng</p>
    </div>

    <div class="testimonials-grid">
      {#each testimonials as testimonial}
        <div class="testimonial-card">
          <div class="rating">
            {#each Array(testimonial.rating) as _}
              <span class="star">★</span>
            {/each}
          </div>
          <p class="testimonial-text">"{testimonial.text}"</p>
          <div class="testimonial-author">
            <p class="author-name">{testimonial.name}</p>
            <p class="author-location">{testimonial.location}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials {
    background: var(--bg-main);
    padding: 4rem 0;
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
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border-top: 4px solid var(--aqua-primary);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
  }

  .testimonial-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }

  .rating {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1.25rem;
  }

  .star {
    color: #FFD700;
    font-size: 1.25rem;
  }

  .testimonial-text {
    flex: 1;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .testimonial-author {
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
  }

  @media (max-width: 1024px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .testimonials {
      padding: 4rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    h2 {
      font-size: 2rem;
    }

    .testimonial-card {
      padding: 1.5rem;
    }
  }
</style>
