<script>
  import Seo from '$lib/components/Seo.svelte';
  import { SITE } from '$lib/config/site.js';

  const updated = 'September 2026';
</script>

<Seo
  title="Terms & Conditions | Marshall Projects & Aqua-Genie"
  description="The terms that apply to using the Marshall Projects and Aqua-Genie website and enquiring about our services."
  path="/terms"
/>

<section class="legal">
  <div class="legal-inner">
    <h1>Terms &amp; Conditions</h1>
    <p class="updated">Last updated: {updated}</p>

    <p>
      These terms apply to your use of the {SITE.shortName} website and to enquiries you make through
      it. By using this site you agree to these terms.
    </p>

    <h2>About us</h2>
    <p>
      This website is operated by {SITE.shortName}, providing swimming pool maintenance (Aqua-Genie)
      and property maintenance services in Gauteng, South Africa. You can contact us at
      {SITE.emails[0]} or {SITE.phoneDisplay}.
    </p>

    <h2>Using this website</h2>
    <p>
      The content on this site is provided for general information about our services. We make every
      effort to keep it accurate and up to date, but we don't guarantee it is complete or error-free.
      The advice in our blog articles is general guidance, not a substitute for an on-site assessment
      of your specific pool or property.
    </p>

    <h2>Quotes and enquiries</h2>
    <p>
      Submitting an enquiry through our form does not create a booking or a contract. Any prices
      discussed before we've seen the job are estimates. A firm quote is provided after we've assessed
      the work, and the scope, price and timing of any job are agreed directly between you and us.
    </p>
    <h2>Deposits, guarantees and cancellations</h2>
    <p>
      For some jobs, particularly larger ones, we may ask for a deposit before work begins. Whether a
      deposit applies, and how much, is confirmed as part of your quote before you commit to anything.
    </p>
    <p>
      We stand behind our work and guarantee our workmanship. If something we've done isn't right,
      contact us and we'll put it right. The exact scope of any guarantee depends on the nature of the
      job and is confirmed with your quote.
    </p>
    <p>
      We understand plans change. If you need to reschedule or cancel a booked job, let us know as
      early as you can and we'll work with you. We handle cancellations flexibly on a case-by-case
      basis.
    </p>

    <h2>Intellectual property</h2>
    <p>
      The text, logos, and images on this site belong to {SITE.shortName} unless otherwise noted, and
      may not be copied or reused without our permission.
    </p>

    <h2>Limitation of liability</h2>
    <p>
      To the extent permitted by law, we are not liable for any loss arising from your reliance on
      general information published on this website. This does not affect any rights you have under a
      service agreement made directly with us, or under South African consumer law.
    </p>

    <h2>External links</h2>
    <p>
      Our site and blog may link to other websites for reference. We're not responsible for the
      content or practices of those external sites.
    </p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of South Africa.</p>

    <p class="disclaimer">
      These terms are a general starting point for a services business. For anything involving
      contracts, guarantees or liability on the actual work you carry out, it's worth having them
      reviewed by someone qualified before you rely on them.
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


  .disclaimer {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--divider);
    font-size: 0.88rem;
    opacity: 0.7;
    font-style: italic;
  }
</style>
