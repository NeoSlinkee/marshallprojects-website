<script>
  let formData = {
    name: '',
    phone: '',
    email: '',
    serviceType: 'pool',
    message: ''
  };
  
  let formStatus = 'idle'; // idle, submitting, success, error
  let errorMessage = '';

  async function handleSubmit(event) {
    event.preventDefault();
    formStatus = 'submitting';
    
    try {
      // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceType: formData.serviceType,
          message: formData.message
        })
      });

      if (response.ok) {
        formStatus = 'success';
        formData = { name: '', phone: '', email: '', serviceType: 'pool', message: '' };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      formStatus = 'error';
      errorMessage = 'There was an error submitting your enquiry. Please email us directly.';
    }
  }
</script>

<section class="contact" id="contact">
  <div class="container">
    <h2>Contact Us</h2>
    <p class="intro">
      If you would like more information or wish to request a quotation, please get in touch.
    </p>

    <div class="contact-wrapper">
      <div class="contact-container">
        <div class="contact-details">
          <h3>Get In Touch</h3>
          
          <div class="contact-item">
            <strong>Phone:</strong>
            <a href="tel:+27792281033">+27 (0)79 228 1033</a>
          </div>

          <div class="contact-item">
            <strong>Email:</strong>
            <a href="mailto:gautengprojects@gmail.com">gautengprojects@gmail.com</a>
            <a href="mailto:aquageniepools@gmail.com">aquageniepools@gmail.com</a>
          </div>

          <div class="contact-item">
            <strong>WhatsApp:</strong>
            <a 
              href="https://wa.me/27714843047?text=Hello,%20I'd%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              class="whatsapp-link"
            >
              <span class="whatsapp-icon">💬</span>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        <div class="contact-form-container">
          <h3>Send Enquiry</h3>
          
          {#if formStatus === 'success'}
            <div class="success-message">
              <p>✓ Thank you for your enquiry. We will contact you as soon as possible.</p>
            </div>
          {:else}
            <form on:submit={handleSubmit} class="contact-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  bind:value={formData.name}
                  required 
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  bind:value={formData.phone}
                  required 
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={formData.email}
                  required 
                />
              </div>

              <div class="form-group">
                <label for="serviceType">Service Required *</label>
                <select id="serviceType" bind:value={formData.serviceType} required>
                  <option value="pool">Pool Services</option>
                  <option value="handyman">Handyman Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  bind:value={formData.message}
                  required
                ></textarea>
              </div>

              {#if formStatus === 'error'}
                <div class="error-message">
                  <p>{errorMessage}</p>
                </div>
              {/if}

              <button 
                type="submit" 
                class="submit-button"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    background: linear-gradient(180deg, var(--aqua-light) 0%, var(--bg-main) 100%);
    padding: 5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--mp-primary);
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .intro {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 3.5rem;
    color: var(--mp-secondary);
  }

  .contact-wrapper {
    display: grid;
    gap: 2rem;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 2.5rem;
    align-items: start;
  }

  .contact-details, 
  .contact-form-container {
    background: white;
    padding: 2.25rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    height: 100%;
  }

  h3 {
    font-size: 1.8rem;
    color: var(--aqua-secondary);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: white;
    padding: 2rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    height: fit-content;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-item strong {
    color: var(--mp-secondary);
    font-size: 1.1rem;
  }

  .contact-item a {
    color: var(--aqua-primary);
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-item a:hover {
    color: var(--aqua-secondary);
    text-decoration: underline;
  }

  .whatsapp-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
  }

  .whatsapp-icon {
    font-size: 1.2rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-weight: 600;
    color: var(--mp-secondary);
  }

  input, select, textarea {
    padding: 0.875rem 1rem;
    border: 2px solid var(--divider);
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-family: inherit;
    transition: all var(--transition-base);
    background: white;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--aqua-primary);
    box-shadow: var(--shadow-focus);
  }

  input:hover, select:hover, textarea:hover {
    border-color: var(--aqua-primary);
  }

  .submit-button {
    background: var(--aqua-primary);
    color: white;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: var(--radius-md);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
    align-self: start;
  }

  .submit-button:hover:not(:disabled) {
    background: var(--aqua-secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .submit-button:active:not(:disabled) {
    transform: translateY(0);
  }

  .submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 1.5rem;
    border-radius: var(--radius-md);
    border-left: 4px solid #28a745;
  }

  .success-message p {
    margin: 0;
    font-size: 1.1rem;
  }

  .error-message {
    background: #f8d7da;
    color: #721c24;
    padding: 1rem;
    border-radius: var(--radius-md);
    border-left: 4px solid #dc3545;
  }

  .error-message p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .contact {
      padding: 4rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    h2 {
      font-size: 2rem;
    }

    .contact-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-details, 
    .contact-form-container {
      padding: 1.75rem;
    }

    .submit-button {
      width: 100%;
    }
  }
</style>
