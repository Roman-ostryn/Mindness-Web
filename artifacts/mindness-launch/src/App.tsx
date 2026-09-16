import { type ReactNode, useEffect, useState } from 'react';
import { Apple, ArrowRight, ArrowUpRight, CircleCheck, Feather, LockKeyhole, Menu, MessageCircle, Play, ShieldCheck, Sparkles, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { MindnessMark } from '@/components/MindnessMark';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { images } from '@/lib/assets';

const queryClient = new QueryClient();

type StoreKind = 'App Store' | 'Google Play';

function DownloadButton({ store, onDownload, quiet = false }: { store: StoreKind; onDownload: (store: StoreKind) => void; quiet?: boolean }) {
  const isAppStore = store === 'App Store';
  return (
    <button
      className={`store-badge ${quiet ? 'store-badge-quiet' : ''}`}
      onClick={() => onDownload(store)}
      aria-label={`${store} download coming soon`}
    >
      <span className="store-icon" aria-hidden="true">
        {isAppStore ? <Apple size={21} strokeWidth={1.8} /> : <Play size={20} strokeWidth={1.8} fill="currentColor" />}
      </span>
      <span className="store-copy">
        <small>Coming soon on</small>
        <strong>{store}</strong>
      </span>
      <ArrowUpRight className="store-arrow" size={15} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}

function Phone({ src, alt, small = false }: { src: string; alt: string; small?: boolean }) {
  return <div className={`phone-frame ${small ? 'small' : ''}`}><img src={src} alt={alt} loading="lazy" /></div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(''), 4200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const handleDownload = (store: StoreKind) => {
    setNotice(`${store} is on its way. Leave a little room in your day — Mindness is coming soon.`);
  };

  const jump = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    const href = event.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={jump} aria-label="Mindness home">
            <MindnessMark size={31} /> MINDNESS
          </a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#why" onClick={jump}>Why Mindness</a>
            <a href="#journey" onClick={jump}>Your journey</a>
            <a href="#plans" onClick={jump}>Plans</a>
            <a href="#privacy" onClick={jump}>Privacy</a>
            <a className="nav-cta" href="#download" onClick={jump}>Get the app <ArrowUpRight size={14} /></a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
        <div className="container hero-content reveal">
          <div className="eyebrow hero-kicker">A quieter kind of intelligence</div>
          <h1>Make room for <em>what matters.</em></h1>
          <p className="hero-copy">Mindness is a calm space to talk things through, notice what you feel, and take your next small step with a thoughtful presence beside you.</p>
          <div className="hero-triad" aria-label="Talk, understand, grow">
            <span>Talk</span><i aria-hidden="true">·</i><span>Understand</span><i aria-hidden="true">·</i><span>Grow</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#why" onClick={jump}>Step inside <ArrowRight size={16} /></a>
            <a className="button button-quiet" href="#download" onClick={jump}>See the app</a>
          </div>
        </div>
        <div className="hero-note"><span /> Built for the in-between moments</div>
      </section>

      <section className="flow-line" aria-label="Mindness principles">
        <div className="flow-track" aria-hidden="true">
          <div className="flow-set">
            <span>Kindness for your mind</span><i />
            <span>Talk without judgement</span><i />
            <span>Make room for growth</span><i />
            <span>A quiet space to return to</span><i />
          </div>
          <div className="flow-set">
            <span>Kindness for your mind</span><i />
            <span>Talk without judgement</span><i />
            <span>Make room for growth</span><i />
            <span>A quiet space to return to</span><i />
          </div>
        </div>
      </section>

      <section className="intro" id="why">
        <div className="container intro-grid">
          <div className="reveal">
            <div className="eyebrow">The idea</div>
            <h2>Not another tool to keep up with. <em>A room to come back to.</em></h2>
          </div>
          <div className="intro-body reveal delay-1">
            <p>Some days need a plan. Others need a pause. Mindness meets you without a dashboard to clear or a streak to protect — just a private, unhurried conversation that helps you hear yourself again.</p>
            <p>Talk in the way that feels natural. Reflect with a little more kindness. Grow at the pace of a real life.</p>
            <a className="text-link" href="#journey" onClick={jump}>How it works <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="feature dark-section" id="conversation">
        <div className="container">
          <div className="feature-header reveal">
            <div>
              <div className="eyebrow">A presence, not a prompt</div>
              <h2>Start wherever you are. The conversation can follow.</h2>
            </div>
            <p>Text when you want to shape the words. Voice when you would rather simply speak.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-visual reveal">
              <Phone src={images.chat} alt="Mindness chat conversation with a companion named Maya" />
              <Phone src={images.voice} alt="Mindness realtime voice conversation screen" small />
              <div className="feature-quote">“You don't have to make it make sense before you say it.”</div>
            </div>
            <div className="feature-list reveal delay-1">
              <div className="feature-list-item">
                <div className="list-number">01</div>
                <div><h3>Say the unfinished thing</h3><p>Mindness listens for the feeling beneath the sentence, without rushing to solve it.</p></div>
              </div>
              <div className="feature-list-item">
                <div className="list-number">02</div>
                <div><h3>Find your own clarity</h3><p>Gentle questions create the little bit of space where a new perspective can arrive.</p></div>
              </div>
              <div className="feature-list-item">
                <div className="list-number">03</div>
                <div><h3>Leave with something lighter</h3><p>A thought captured, a next step named, or simply the relief of having been heard.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="container">
          <div className="journey-intro reveal">
            <div>
              <div className="eyebrow">A gentle rhythm</div>
              <h2>Small rituals. Real change.</h2>
            </div>
            <p>There is no ideal version of you waiting on the other side. Just a version that knows itself a little better.</p>
          </div>
          <div className="journey-steps">
            <article className="journey-card reveal">
              <div className="step-top"><span className="step-index">01 / Talk</span><span className="step-icon"><MessageCircle size={20} /></span></div>
              <div><div className="card-line" /><h3>Open the door.</h3><p>Bring the bright thought, the difficult one, or nothing in particular.</p></div>
            </article>
            <article className="journey-card reveal delay-1">
              <div className="step-top"><span className="step-index">02 / Understand</span><span className="step-icon"><Feather size={20} /></span></div>
              <div><div className="card-line" /><h3>Notice the shape of it.</h3><p>Reflect, journal, and see your inner weather with a little more distance.</p></div>
            </article>
            <article className="journey-card reveal delay-2">
              <div className="step-top"><span className="step-index">03 / Grow</span><span className="step-icon"><Sparkles size={20} /></span></div>
              <div><div className="card-line" /><h3>Keep what helps.</h3><p>Build quiet practices that fit into your day, not the other way around.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="plans" id="plans">
        <div className="container">
          <div className="plans-heading reveal">
            <div>
              <div className="eyebrow">Plans</div>
              <h2>Start free,<br /><em>grow when ready.</em></h2>
            </div>
            <p>Choose the level of companionship that fits you. Subscriptions are managed in the app after download.</p>
          </div>
          <div className="plans-grid">
            <article className="plan-card reveal">
              <div>
                <h3>Free</h3>
                <div className="plan-price">£0</div>
                <p className="plan-summary">Start your wellness journey</p>
              </div>
              <ul>
                <li>Limited daily chat with your companion</li>
                <li>Basic companion setup</li>
                <li>Mood, journal, and habit tracking</li>
              </ul>
            </article>
            <article className="plan-card plan-card-featured reveal delay-1">
              <div className="plan-badge">Popular</div>
              <div>
                <h3>Companion</h3>
                <div className="plan-price">£1.99<span>/mo</span></div>
                <p className="plan-summary">Your companion, every day</p>
              </div>
              <ul>
                <li>Unlimited chat</li>
                <li>Companion memory across sessions</li>
                <li>Proactive check-ins &amp; goals</li>
                <li>Basic voice replies</li>
              </ul>
            </article>
            <article className="plan-card reveal delay-2">
              <div>
                <h3>Companion<span className="plan-plus">+</span></h3>
                <div className="plan-price">£5.99<span>/mo</span></div>
                <p className="plan-summary">The fullest experience</p>
              </div>
              <ul>
                <li>Everything in Companion</li>
                <li>Premium natural voice</li>
                <li>Animated, alive avatar</li>
                <li>Deeper memory &amp; richer chat</li>
                <li>Personal profile questionnaire</li>
              </ul>
            </article>
          </div>
          <p className="plans-note">Pricing may vary by region. Companion+ includes premium voice, animated avatar, and personalised onboarding.</p>
        </div>
      </section>

      <section className="companion dark-section" id="companion">
        <div className="container companion-grid">
          <div className="companion-copy reveal">
            <div className="eyebrow">Meet your companion</div>
            <h2>Thoughtful by design. Human in tone.</h2>
            <p>Choose a companion whose voice, story, and energy feel like a good fit. Mindness is made to feel personal — never performative, never one-size-fits-all.</p>
            <div className="companion-points">
              <div className="companion-point"><strong>Warm, never saccharine</strong><span>Support that respects your intelligence and your edges.</span></div>
              <div className="companion-point"><strong>There when you are</strong><span>Morning clarity, midnight spirals, and every hour between.</span></div>
            </div>
          </div>
          <div className="companion-visual reveal delay-1">
            <div className="companion-tag">The right presence changes the room.</div>
            <Phone src={images.companionIntro} alt="Mindness companion introduction screen welcoming Philip" />
          </div>
        </div>
      </section>

      <section className="gallery" id="practices">
        <div className="container">
          <div className="gallery-top reveal">
            <div>
              <div className="eyebrow">Beyond the conversation</div>
              <h2>A few minutes can change the rest of the day.</h2>
            </div>
            <p>Designed for tiny returns to yourself: a breath, a note, a moment of perspective.</p>
          </div>
          <div className="gallery-stage reveal delay-1" aria-label="Mindness app screen preview">
            <div className="gallery-phone gallery-phone-welcome">
              <Phone src={images.welcome} alt="Mindness welcome screen with talk, understand, and grow choices" />
            </div>
            <div className="gallery-phone gallery-phone-practices">
              <Phone src={images.practices} alt="Mindness practices screen with breathing, gratitude, and journaling" />
            </div>
            <div className="gallery-phone gallery-phone-voice">
              <Phone src={images.animatedAvatar} alt="Mindness animated avatar voice screen" />
            </div>
            <div className="gallery-stage-note" aria-hidden="true">
              <span>Small returns to yourself</span>
              <span className="gallery-stage-dots"><i /><i /><i /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy" id="privacy">
        <div className="container privacy-grid">
          <div className="reveal">
            <div className="eyebrow">A private room</div>
            <h2>Your thoughts are yours. Full stop.</h2>
          </div>
          <div className="privacy-copy reveal delay-1">
            <p>Vulnerability needs a little quiet around it. Mindness is built with the care that an intimate conversation deserves, so you can show up honestly without wondering who is listening.</p>
            <div className="privacy-points">
              <div className="privacy-point"><LockKeyhole size={18} strokeWidth={1.5} /><h3>Your space stays yours</h3><p>Private conversations, treated with discretion from the first word.</p></div>
              <div className="privacy-point"><ShieldCheck size={18} strokeWidth={1.5} /><h3>Clear by default</h3><p>No dark patterns, no pressure, no productivity theater.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="download">
        <div className="container reveal">
          <h2>You don't have to <em>figure it out alone.</em></h2>
          <p>Mindness is coming soon. Leave the noise at the door and make a little room for what's true.</p>
          <div className="store-row">
            <DownloadButton store="App Store" onDownload={handleDownload} quiet />
            <DownloadButton store="Google Play" onDownload={handleDownload} quiet />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand" href="#top" onClick={jump}><MindnessMark size={31} /> MINDNESS</a>
              <p>A quiet space to talk, reflect, and grow.<br />Kindness for your mind.</p>
            </div>
            <div className="footer-nav-grid">
              <div className="footer-column">
                <span className="footer-label">Explore</span>
                <a href="#why" onClick={jump}>Why Mindness</a>
                <a href="#journey" onClick={jump}>How it works</a>
                <a href="#conversation" onClick={jump}>Talk & reflect</a>
                <a href="#plans" onClick={jump}>Plans</a>
                <a href="#download" onClick={jump}>Download</a>
              </div>
              <div className="footer-column">
                <span className="footer-label">Read</span>
                <a href="#conversation" onClick={jump}>Our approach</a>
                <a href="#privacy" onClick={jump}>Privacy</a>
                <a href="#top" onClick={jump}>Back to top</a>
              </div>
              <div className="footer-column">
                <span className="footer-label">Contact</span>
                <a href="mailto:info@mindness.co.uk">info@mindness.co.uk</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Mindness</span>
            <span>Made for the moments that matter.</span>
          </div>
        </div>
      </footer>
      <div className={`notice ${notice ? 'show' : ''}`} role="status" aria-live="polite"><CircleCheck size={17} style={{ verticalAlign: 'middle', marginRight: 8, color: '#e4c985' }} />{notice}</div>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;