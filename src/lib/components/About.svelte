<script>
</script>

<section class="about">
  <h2>About Us</h2>
  <div class="about-content">
    <p>
      <strong>Marshall Projects & Protective Coatings CC</strong> operates two specialised 
      service divisions to better serve residential homeowners:
    </p>
    <div class="divisions">
      <div class="division">
        <h3>Aqua-Genie</h3>
        <p>Professional swimming pool maintenance, repairs, and refurbishments</p>
      </div>
      <div class="division">
        <h3>Marshall Projects</h3>
        <p>Handyman, painting, and general home maintenance services</p>
      </div>
    </div>
    <p class="closing">
      By combining these services under one umbrella, we provide a convenient, reliable, 
      and cost-effective solution for ongoing property and pool care.
    </p>
  </div>
</section>

<style>
  .about {
    background: var(--bg-main);
  }

  h2 {
    font-size: 2.5rem;
    color: var(--mp-primary);
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }

  .about-content > p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .divisions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .division {
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: white;
    border-left: 4px solid var(--aqua-primary);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
  }

  .division:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .division h3 {
    color: var(--aqua-secondary);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .division p {
    color: var(--mp-secondary);
    line-height: 1.7;
  }

  .closing {
    text-align: center;
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    .divisions {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .division {
      padding: 1.5rem;
    }
  }
</style>
