import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownRight, Heart, LockKeyhole, Menu, MessageCircle, Play, ShieldCheck, Sparkles, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { MindnessMark } from '@/components/MindnessMark';
import { asset, assets } from '@/lib/assets';
import { plans } from '@/lib/plans';

const queryClient = new QueryClient();

function Brand() {
  return (
    <a className="brand" href="#top" data-testid="link-brand">
      <MindnessMark size={23} />
      <span>MINDNESS</span>
    </a>
  );
}

function StoreButton({ store, onClick }: { store: 'Apple' | 'Google'; onClick: () => void }) {
  return (
    <button className="store-button" onClick={onClick} data-testid={`button-download-${store.toLowerCase()}`} aria-label={`${store} download coming soon`}>
      {store === 'Apple' ? <span className="store-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.09.35-1.1-.46-2.1-.48-3.27 0-1.47.64-2.25.45-3.11-.35C2.79 15.25 3.51 7.59 8.99 7.31c1.33.07 2.26.74 3.05.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.44 4.09zM12.04 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg></span> : <Play size={22} fill="currentColor" aria-hidden="true" />}
      <span><small>COMING SOON ON</small><strong>{store === 'Apple' ? 'App Store' : 'Google Play'}</strong></span>
    </button>
  );
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadHint, setDownloadHint] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);
  const showDownloadHint = () => {
    setDownloadHint(true);
    window.setTimeout(() => setDownloadHint(false), 3000);
  };

  return (
    <main className="site-shell" id="top">
      <header className="nav">
        <div className="nav-inner">
          <Brand />
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <a href="#why" onClick={closeMenu} data-testid="link-why">Why Mindness</a>
            <a href="#how" onClick={closeMenu} data-testid="link-how">How it works</a>
            <a href="#privacy" onClick={closeMenu} data-testid="link-privacy">Our approach</a>
            <a href="#plans" onClick={closeMenu} data-testid="link-plans">Plans</a>
            <a href="#download" onClick={closeMenu} data-testid="link-download">Download</a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={asset(assets.hero)} alt="Two people sitting quietly beside a mountain lake at sunrise" />
        <div className="hero-content">
          <div className="hero-kicker mono-label">A quiet space for your mind</div>
          <h1 id="hero-title" className="serif">Talk.<br />Understand.<br /><em>Grow.</em></h1>
          <p className="hero-sub">An AI companion for the thoughts you carry, the questions you return to, and the small changes that make a life feel more like your own.</p>
          <div className="hero-bottom">
            <a href="#download" className="ghost-btn" data-testid="link-hero-start">Begin your journey <ArrowDownRight size={15} /></a>
            <span className="hero-note">Coming soon for iOS &amp; Android</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Mindness values">
        <div className="marquee-track">
          <span>Kindness for your mind</span><i /><span>Talk without judgement</span><i /><span>Make room for growth</span><i /><span>Kindness for your mind</span>
        </div>
      </div>

      <section className="intro" id="why">
        <div className="section-wrap intro-grid">
          <Reveal>
            <div className="eyebrow mono-label">01 / The idea</div>
            <h2 className="serif">A little more room to be human.</h2>
          </Reveal>
          <Reveal className="intro-copy">
            <p>Some days you need advice. Some days you need to hear yourself think. Mindness gives you a calm, private place to talk things through — with a companion that listens closely and meets you where you are.</p>
            <a className="text-link" href="#how" data-testid="link-intro-how">See how it works <span>→</span></a>
          </Reveal>
        </div>
      </section>

      <section className="feature-band" aria-labelledby="features-title">
        <div className="section-wrap">
          <Reveal className="feature-head">
            <div>
              <div className="eyebrow mono-label">02 / What you’ll find</div>
              <h2 id="features-title" className="serif">Built for the<br /><em>in-between.</em></h2>
            </div>
            <p>Not a score to chase or a problem to solve. Just thoughtful support for the moments that ask a little more of you.</p>
          </Reveal>
          <div className="feature-grid">
            <Reveal>
              <article className="feature-card" data-testid="card-feature-listening">
                <div className="feature-icon"><MessageCircle size={21} strokeWidth={1.5} /></div>
                <div><h3>Talk it out</h3><p>Say the thing as it is. Find the thread beneath the noise.</p></div>
              </article>
            </Reveal>
            <Reveal>
              <article className="feature-card" data-testid="card-feature-understanding">
                <div className="feature-icon"><Sparkles size={21} strokeWidth={1.5} /></div>
                <div><h3>Understand yourself</h3><p>Notice patterns, name what you need, and see your days with fresh eyes.</p></div>
              </article>
            </Reveal>
            <Reveal>
              <article className="feature-card" data-testid="card-feature-practice">
                <div className="feature-icon"><Heart size={21} strokeWidth={1.5} /></div>
                <div><h3>Grow gently</h3><p>Small reflections and daily practices that meet you at your pace.</p></div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="journey" id="how" aria-labelledby="journey-title">
        <div className="section-wrap journey-layout">
          <Reveal className="journey-copy">
            <div className="eyebrow mono-label">03 / Your rhythm</div>
            <h2 id="journey-title" className="serif">A companion<br />that <em>evolves</em><br />with you.</h2>
            <p>Start with a conversation. Come back for a check-in. Over time, Mindness gets to know what matters to you — without asking you to perform.</p>
            <div className="journey-list">
              <div className="journey-item"><span className="journey-num">01</span><div><strong>Choose your companion</strong><p>Find a voice that feels natural to you.</p></div></div>
              <div className="journey-item"><span className="journey-num">02</span><div><strong>Make it yours</strong><p>Shape your space, your pace, your practices.</p></div></div>
              <div className="journey-item"><span className="journey-num">03</span><div><strong>Come as you are</strong><p>There is no perfect way to begin.</p></div></div>
            </div>
          </Reveal>
          <Reveal className="phone-stage">
            <img className="phone-image back" src={asset(assets.screenChat)} alt="Mindness conversation screen with a companion" />
            <img className="phone-image" src={asset(assets.screenVoice)} alt="Mindness realtime voice screen with animated companion" />
            <span className="phone-caption">Talk naturally — chat or voice, whenever you need.</span>
          </Reveal>
        </div>
      </section>

      <section className="safe-section" id="privacy" aria-labelledby="safe-title">
        <div className="section-wrap safe-layout">
          <Reveal>
            <div className="eyebrow mono-label" style={{ color: 'hsl(41 56% 74%)' }}>04 / Our approach</div>
            <h2 id="safe-title" className="serif">The space<br />between<br /><em>you &amp; you.</em></h2>
            <p>Mindness is designed to feel safe enough for honesty and spacious enough for discovery. No judgement. No pressure to be positive. Just a thoughtful presence, whenever you need one.</p>
            <div className="privacy-note"><LockKeyhole size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Your conversations are yours. Privacy is not a feature we added later.</div>
          </Reveal>
          <Reveal className="safe-art">
            <div className="safe-art-inner">
              <div className="safe-orb"><ShieldCheck size={34} strokeWidth={1.2} /></div>
              <h3 className="serif">A private<br />place to land.</h3>
              <small className="mono-label">Thoughtful by design</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="screens" aria-labelledby="screens-title">
        <div className="section-wrap">
          <Reveal className="screens-head">
            <div>
              <div className="eyebrow mono-label">05 / In the app</div>
              <h2 id="screens-title" className="serif">Made for real<br /><em>life.</em></h2>
            </div>
            <p>From the first hello to a quiet moment of gratitude, every detail is designed to feel familiar, warm, and yours.</p>
          </Reveal>
          <div className="screen-row">
            <Reveal><div className="screen-frame"><img src={asset(assets.screenWelcome)} alt="Mindness welcome screen" /></div></Reveal>
            <Reveal><div className="screen-frame"><img src={asset(assets.screenCompanionIntro)} alt="Mindness companion introduction screen" /></div></Reveal>
            <Reveal><div className="screen-frame"><img src={asset(assets.screenPractices)} alt="Mindness daily practices screen" /></div></Reveal>
            <Reveal><div className="screen-frame"><img src={asset(assets.screenCompanionSelectB)} alt="Mindness companion selection screen" /></div></Reveal>
            <Reveal><div className="screen-frame"><img src={asset(assets.screenCompanionAccent)} alt="Mindness companion accent selection screen" /></div></Reveal>
          </div>
        </div>
      </section>

      <section className="plans" id="plans" aria-labelledby="plans-title">
        <div className="section-wrap">
          <Reveal className="plans-head">
            <div>
              <div className="eyebrow mono-label">06 / Plans</div>
              <h2 id="plans-title" className="serif">Start free,<br /><em>grow when ready.</em></h2>
            </div>
            <p>Choose the level of companionship that fits you. Subscriptions are managed in the app after download.</p>
          </Reveal>
          <div className="plans-grid">
            {plans.map((plan) => (
              <Reveal key={plan.name}>
                <article
                  className={`plan-card${plan.highlighted ? ' plan-card-highlighted' : ''}`}
                  data-testid={`card-plan-${plan.name.toLowerCase().replace('+', '-plus')}`}
                >
                  {plan.highlighted ? <span className="plan-badge mono-label">Popular</span> : null}
                  <h3 className="serif">{plan.name}</h3>
                  <p className="plan-price">{plan.price}</p>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <ul className="plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="plans-note">Pricing may vary by region. Companion+ includes premium voice, animated avatar, and personalised onboarding.</p>
          </Reveal>
        </div>
      </section>

      <section className="download" id="download" aria-labelledby="download-title">
        <Reveal>
          <div className="eyebrow mono-label">07 / Start whenever you’re ready</div>
          <h2 id="download-title" className="serif">You don’t have to<br /><em>figure it out alone.</em></h2>
          <p>Mindness is coming soon. Leave the noise at the door and make a little room for what’s true.</p>
          <div className="store-buttons">
            <StoreButton store="Apple" onClick={showDownloadHint} />
            <StoreButton store="Google" onClick={showDownloadHint} />
          </div>
          {downloadHint && <p className="download-hint" role="status" data-testid="status-download">We’ll let you know when Mindness is ready.</p>}
        </Reveal>
      </section>

      <footer className="footer">
        <div className="section-wrap">
          <div className="footer-top">
            <div><Brand /><p className="footer-note">A quiet space to talk, reflect, and grow. Kindness for your mind.</p></div>
            <div className="footer-links">
              <div><div className="mono-label" style={{ color: 'hsl(41 56% 74%)', marginBottom: 15 }}>Explore</div><a href="#why" data-testid="link-footer-why">Why Mindness</a><a href="#how" data-testid="link-footer-how">How it works</a><a href="#plans" data-testid="link-footer-plans">Plans</a><a href="#download" data-testid="link-footer-download">Download</a></div>
              <div><div className="mono-label" style={{ color: 'hsl(41 56% 74%)', marginBottom: 15 }}>Read</div><a href="#privacy" data-testid="link-footer-privacy">Our approach</a><a href="#top" data-testid="link-footer-top">Back to top</a></div>
              <div><div className="mono-label" style={{ color: 'hsl(41 56% 74%)', marginBottom: 15 }}>Contact</div><a href="mailto:info@mindness.co.uk" data-testid="link-footer-email">info@mindness.co.uk</a></div>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 Mindness</span><span>Made for the moments that matter.</span></div>
        </div>
      </footer>
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