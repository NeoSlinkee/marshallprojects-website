<script>
</script>

<footer class="footer">
  <div class="footer-background"></div>
  <div class="footer-content">
    <div class="footer-section footer-brand">
      <h3>Marshall Projects & Protective Coatings CC</h3>
      <p>Professional pool and property maintenance services across Gauteng</p>
    </div>

    <div class="footer-section">
      <h4>Our Services</h4>
      <ul>
        <li>Aqua-Genie Pool Services</li>
        <li>Handyman & Property Maintenance</li>
        <li>Painting & Protective Coatings</li>
        <li>Waterproofing & Damp Proofing</li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:+27714843047">+27 (0)71 484 3047</a></li>
        <li><a href="mailto:gautengprojects@gmail.com">gautengprojects@gmail.com</a></li>
        <li><a href="mailto:aquageniepools@gmail.com">aquageniepools@gmail.com</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Service Area</h4>
      <p>Serving residential clients across<br />Gauteng, South Africa</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Marshall Projects & Protective Coatings CC. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background: var(--mp-secondary);
    color: white;
    padding: 4rem 1.5rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .footer-background {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232DA9E1' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  .footer-section h3 {
    color: var(--aqua-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .footer-section h4 {
    color: var(--aqua-primary);
    font-size: 1.15rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .footer-section p {
    line-height: 1.7;
    opacity: 0.95;
  }

  .footer-brand p {
    font-size: 1.05rem;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
  }

  .footer-section ul li {
    margin-bottom: 0.75rem;
  }

  .footer-section a {
    color: white;
    text-decoration: none;
    transition: color 0.2s;
    opacity: 0.95;
  }

  .footer-section a:hover {
    color: var(--aqua-primary);
    opacity: 1;
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .footer-bottom p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding: 3rem 1.5rem 1.5rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      font-size: 1.25rem;
    }

    .footer-section h4 {
      font-size: 1.1rem;
    }
  }
</style>
