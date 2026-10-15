import { Link } from 'wouter';
import { MindnessMark } from '@/components/MindnessMark';

const LAST_UPDATED = '15 October 2026';
const CONTACT_EMAIL = 'info@mindness.co.uk';

export default function PrivacyPolicyPage() {
  return (
    <main className="site-shell legal-shell">
      <header className="legal-nav container">
        <Link href="/" className="brand" aria-label="Mindness home">
          <MindnessMark size={31} /> MINDNESS
        </Link>
        <Link href="/" className="legal-back">
          Back to home
        </Link>
      </header>

      <article className="legal-document container">
        <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
        <h1>Privacy Policy</h1>
        <p className="legal-lead">
          Mindness (&ldquo;Mindness&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides a wellness companion
          mobile application and this website at mindness.co.uk. This policy explains how we handle personal
          information when you use the Mindness app or contact us.
        </p>

        <section>
          <h2>Who we are</h2>
          <p>
            Mindness is operated from the United Kingdom. For privacy questions or requests, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2>What Mindness is (and is not)</h2>
          <p>
            Mindness offers emotional support, reflection, and everyday wellness tools. It is not a medical
            device, does not provide diagnosis or treatment, and is not for emergencies. If you are in crisis,
            contact local emergency services or a qualified professional.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>When you create an account and use the app, we may process:</p>
          <ul>
            <li>
              <strong>Account information</strong> — email address and, if you provide it, your name or
              preferred name.
            </li>
            <li>
              <strong>Wellness and health-related content you choose to enter</strong> — for example mood
              check-ins, journal entries, gratitude notes, intake questionnaire answers, and messages you
              send to your companion.
            </li>
            <li>
              <strong>Voice data</strong> — if you use voice mode, audio from your microphone is processed
              so you can talk with your companion in real time.
            </li>
            <li>
              <strong>Identifiers</strong> — an account and user ID so your data stays linked to your account.
            </li>
            <li>
              <strong>Technical data</strong> — basic information needed to run the service (for example
              requests to our servers). We do not use third-party advertising or cross-app tracking in the
              app.
            </li>
          </ul>
          <p>
            This website is mostly informational. If you email us, we process your email address and message
            content to respond.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>We use personal information to:</p>
          <ul>
            <li>Provide and secure your account (sign-in, verification, password reset).</li>
            <li>Run app features — chat, mood, journal, gratitude, companion memory, and voice mode.</li>
            <li>Personalise your experience when you use companion memory and related features.</li>
            <li>Respond to support requests and legal obligations.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information. We do <strong>not</strong> use your
            private conversations to train public AI models.
          </p>
        </section>

        <section>
          <h2>Legal basis (UK &amp; EEA)</h2>
          <p>
            Where UK GDPR or EU GDPR applies, we rely on <strong>contract</strong> (to provide the app you
            signed up for) and <strong>legitimate interests</strong> (to keep the service secure and improve
            it), and on <strong>consent</strong> where required (for example optional features you choose
            to use). You may withdraw consent without affecting the lawfulness of processing before
            withdrawal.
          </p>
        </section>

        <section>
          <h2>Service providers</h2>
          <p>
            We use trusted providers to host and operate Mindness — for example cloud hosting, email delivery,
            and AI or speech technology used to power chat and voice. They process data only on our
            instructions to deliver the service, under appropriate safeguards.
          </p>
        </section>

        <section>
          <h2>Retention</h2>
          <p>
            We keep your information while your account is active and as needed to provide the service. When
            you delete your account, we delete or anonymise associated personal data from our systems, subject
            to limited retention where the law requires (for example certain security or accounting records).
          </p>
        </section>

        <section>
          <h2>Your choices and rights</h2>
          <ul>
            <li>
              <strong>Delete your account</strong> — in the app, open <strong>Privacy</strong> (tab) →{' '}
              <strong>Your account</strong> → <strong>Delete account</strong>. Email/password accounts
              require your password to confirm; Google sign-in accounts can confirm in the app. This
              permanently removes your account and stored wellness data on our servers.
            </li>
            <li>
              <strong>Delete conversations</strong> — you can delete all chat history from the Privacy
              centre without deleting your whole account.
            </li>
            <li>
              <strong>Access or export</strong> — email {CONTACT_EMAIL} to request a copy of your data.
            </li>
            <li>
              <strong>UK / EEA rights</strong> — you may have rights to access, rectify, erase, restrict,
              object, or port data, and to complain to your supervisory authority (in the UK, the ICO).
            </li>
          </ul>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            Mindness is not directed at children under 13. We do not knowingly collect personal information
            from children under 13. If you believe a child has provided us data, contact us and we will
            take appropriate steps.
          </p>
        </section>

        <section>
          <h2>International transfers</h2>
          <p>
            Our providers may process data in the UK, EEA, or other countries. Where required, we use
            appropriate safeguards (such as standard contractual clauses) for transfers outside the UK or
            EEA.
          </p>
        </section>

        <section>
          <h2>Subscriptions and payments</h2>
          <p>
            App Store subscription payments are handled by Apple. If Mindness is offered on Google
            Play, those payments are handled by Google. We do not receive your full payment card details.
            Store terms and privacy notices apply to those transactions.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will post the new version on this page and
            update the &ldquo;Last updated&rdquo; date. Significant changes may also be communicated in the
            app or by email where appropriate.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </section>
      </article>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <span>© 2026 Mindness</span>
            <Link href="/">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
