<script>
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>Marshall Projects & Protective Coatings CC</h3>
      <p>Professional home and pool maintenance services</p>
    </div>

    <div class="footer-section">
      <h4>Our Services</h4>
      <ul>
        <li>Aqua-Genie Pool Services</li>
        <li>Handyman & Property Maintenance</li>
        <li>Painting & Protective Coatings</li>
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
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-section h3 {
    color: var(--aqua-primary);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .footer-section h4 {
    color: var(--aqua-primary);
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .footer-section p {
    line-height: 1.6;
    opacity: 0.9;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
  }

  .footer-section ul li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: white;
    text-decoration: none;
    transition: color 0.2s;
    opacity: 0.9;
  }

  .footer-section a:hover {
    color: var(--aqua-primary);
    opacity: 1;
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .footer-bottom p {
    opacity: 0.8;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .footer {
      padding: 2rem 1rem 1rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
