import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { internetSlowContent } from '../data/siteContent';
import PageHero from '../components/PageHero';
import DynamicIcon from '../components/IconMap';

export default function InternetSlowPage() {
  const { hero, causes, cta } = internetSlowContent;

  return (
    <>
      <PageHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        backgroundImage={hero.backgroundImage}
      />

      {/* ===== COMMON CAUSES ===== */}
      <section className="section-padding bg-white" aria-labelledby="causes-heading">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Troubleshooting Guide
            </p>
            <h2 id="causes-heading" className="text-3xl sm:text-4xl font-bold text-primary">
              Common Causes of Slow Internet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <article
                key={cause.title}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <DynamicIcon
                      name={cause.icon}
                      className="w-6 h-6 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-accent font-bold text-sm" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{cause.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{cause.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK TIPS ===== */}
      <section className="section-padding bg-gray-50" aria-labelledby="tips-heading">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 id="tips-heading" className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
              Quick Fixes to Try Now
            </h2>
            <ol className="space-y-6">
              {[
                'Restart your router and modem — unplug for 30 seconds, then plug back in.',
                'Move your router to a central, elevated location away from walls and metal.',
                'Disconnect devices you are not actively using from the network.',
                'Run a speed test at speedtest.net to confirm your actual speeds.',
                'Check for firmware updates on your router.',
                'If using Wi-Fi, try switching to a 5GHz band if your router supports it.',
              ].map((tip, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-accent text-primary font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{tip}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-primary" aria-label="Call to action">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{cta.headline}</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">{cta.description}</p>
          <Link to={cta.buttonLink} className="btn-primary">
            {cta.buttonText}
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
