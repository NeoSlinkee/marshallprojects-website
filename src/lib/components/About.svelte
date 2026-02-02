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
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }

  .about-content > p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .divisions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .division {
    padding: 2rem;
    border-radius: 8px;
    background: var(--mp-accent);
    border-left: 4px solid var(--aqua-primary);
  }

  .division h3 {
    color: var(--aqua-secondary);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .division p {
    color: var(--mp-secondary);
  }

  .closing {
    text-align: center;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    .divisions {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
