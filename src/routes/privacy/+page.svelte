<script>
  import Seo from '$lib/components/Seo.svelte';
  import { SITE } from '$lib/config/site.js';

  const updated = 'September 2026';
</script>

<Seo
  title="Privacy Policy | Marshall Projects & Aqua-Genie"
  description="How Marshall Projects and Aqua-Genie collect, use and protect your personal information in line with South Africa's POPIA."
  path="/privacy"
/>

<section class="legal">
  <div class="legal-inner">
    <h1>Privacy Policy</h1>
    <p class="updated">Last updated: {updated}</p>

    <p>
      This policy explains how {SITE.shortName} ("we", "us", "our") collects, uses and protects your
      personal information when you visit our website or contact us about our services. We are
      committed to handling your information responsibly and in line with the Protection of Personal
      Information Act (POPIA) of South Africa.
    </p>

    <h2>Who we are</h2>
    <p>
      {SITE.shortName} provides swimming pool maintenance (trading as Aqua-Genie) and property
      maintenance services across Gauteng. If you have any questions about this policy or your
      personal information, you can reach us at {SITE.emails[0]} or {SITE.phoneDisplay}.
    </p>

    <h2>What information we collect</h2>
    <p>We collect information you give us directly and some information automatically:</p>
    <ul>
      <li>
        <strong>Information you provide:</strong> when you fill in our enquiry form or contact us by
        phone, WhatsApp or email, we collect your name, contact details, and the details of your
        enquiry.
      </li>
      <li>
        <strong>Usage information:</strong> if you accept analytics cookies, we collect anonymised
        information about how you use the site (pages visited, time on site, approximate region)
        through Google Analytics. Your IP address is anonymised.
      </li>
    </ul>

    <h2>How we use your information</h2>
    <ul>
      <li>To respond to your enquiry and provide a quote</li>
      <li>To arrange and carry out the services you request</li>
      <li>To contact you about your job or booking</li>
      <li>
        With your opt-in consent, to send you occasional maintenance reminders, updates and offers by
        email
      </li>
      <li>To improve our website and understand what visitors find useful</li>
    </ul>
    <p class="newsletter-note">
      With your consent, we may add you to our mailing list to send occasional updates, seasonal pool
      and property maintenance reminders, and offers. You are only added if you opt in (for example, by
      ticking a box), and every marketing email includes an unsubscribe link so you can opt out at any
      time. We do not add clients to marketing lists automatically.
    </p>

    <h2>Cookies</h2>
    <p>
      Our site uses essential cookies to function, and optional analytics cookies (Google Analytics)
      only if you accept them via our cookie banner. You can decline analytics cookies and the site
      will still work fully. You can change your choice at any time by clearing your browser's site
      data for our domain.
    </p>

    <h2>Who we share it with</h2>
    <p>
      We do not sell your personal information. We use Google Analytics (Google) to understand site
      usage, and Formspree to process enquiry-form submissions and deliver them to us by email. These
      providers process data on our behalf. We may share information where required by law.
    </p>

    <h2>How long we keep it</h2>
    <p>
      We keep enquiry and client information for as long as needed to provide our services and meet
      our legal and tax obligations, after which it is securely deleted.
    </p>

    <h2>Your rights</h2>
    <p>
      Under POPIA you have the right to ask what personal information we hold about you, to correct
      it, and to ask us to delete it where we're not legally required to keep it. To make any of
      these requests, contact us at {SITE.emails[0]}.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      We may update this policy from time to time. The date at the top shows when it was last changed.
    </p>

    <p class="disclaimer">
      This policy is provided as a starting point and covers the common bases for a South African
      services business. For full legal assurance, have it reviewed by someone familiar with POPIA
      before relying on it.
    </p>
  </div>
</section>

<style>
  .legal {
    padding: 3rem 0 4rem;
  }

  .legal-inner {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  h1 {
    font-size: 2.2rem;
    color: var(--aqua-secondary);
    margin-bottom: 0.4rem;
  }

  .updated {
    color: var(--mp-primary);
    opacity: 0.65;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.3rem;
    color: var(--aqua-secondary);
    margin-top: 2rem;
    margin-bottom: 0.6rem;
  }

  p,
  li {
    color: var(--text-main);
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  ul {
    margin: 0 0 1rem 1.25rem;
    padding: 0;
  }

  .newsletter-note {
    background: var(--aqua-tint);
    border-left: 3px solid var(--aqua-secondary);
    padding: 1rem 1.25rem;
    border-radius: 6px;
    font-size: 0.95rem;
  }

  .disclaimer {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--divider);
    font-size: 0.88rem;
    opacity: 0.7;
    font-style: italic;
  }
</style>
