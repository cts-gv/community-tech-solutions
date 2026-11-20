import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { homeContent, siteConfig } from '../data/siteContent';
import Divider from '../components/Divider';
import HeroComputer from '../components/HeroComputer';
import Reveal from '../components/Reveal';
import NetworkCanvas from '../components/NetworkCanvas';
import DynamicIcon from '../components/IconMap';

export default function HomePage() {
  const { hero, credentials, featuredServices, testimonials } = homeContent;

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary to-primary-700" aria-label="Hero">
        <div className="hero-glow" aria-hidden="true" />
        <NetworkCanvas />

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-bold text-2xl sm:text-3xl tracking-tight mb-6 opacity-0 animate-slide-in-right [animation-delay:0.2s]">
                {siteConfig.tagline}
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                <span className="hero-line [animation-delay:0.4s]">Fast Wi-Fi.</span>
                <span className="hero-line [animation-delay:0.65s]">Great websites.</span>
                <span className="hero-line [animation-delay:0.9s]">Right here in the Valley.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-xl opacity-0 animate-hero-fade [animation-delay:1.2s]">
                {hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-hero-fade [animation-delay:1.4s]">
                <Link to={hero.ctaLink} className="btn-primary">
                  {hero.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
                <Link to={hero.secondaryCtaLink} className="btn-secondary">
                  {hero.secondaryCtaText}
                </Link>
              </div>
            </div>

            <div className="opacity-0 animate-hero-fade [animation-delay:1s]">
              <HeroComputer />
              <div className="flex flex-wrap justify-center gap-3 mt-6" aria-hidden="true">
                {siteConfig.serviceAreas.map((town) => (
                  <div key={town} className="flex items-center gap-2 text-white text-sm font-semibold backdrop-blur-sm bg-white/5 border border-white/15 rounded-full px-4 py-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    </span>
                    {town}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Divider overlay color="text-white" />
      </section>

      {/* ===== CREDENTIALS ===== */}
      <section className="bg-white border-b border-gray-100" aria-labelledby="credentials-heading">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Reveal className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Credentials
            </p>
            <h2 id="credentials-heading" className="text-3xl sm:text-4xl font-bold text-primary">
              {credentials.heading}
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              {credentials.description}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {credentials.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <DynamicIcon name={item.icon} className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <p className="text-primary font-semibold text-sm leading-snug">{item.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider bg="bg-white" color="text-gray-50" flip />

      {/* ===== FEATURED SERVICES ===== */}
      <section className="bg-gray-50 section-padding" aria-labelledby="services-heading">
        <div className="container-custom mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-primary"
            >
              Solutions That Drive Results
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 100} className="bg-white rounded-2xl p-8 shadow-sm card-lift group">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <DynamicIcon
                    name={service.icon}
                    className="w-7 h-7 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                {'demoLinks' in service && service.demoLinks && service.demoLinks.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {service.demoLinks.map((link: { label: string; url: string }) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent font-medium text-sm hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
                <Link
                  to="/services"
                  className="inline-flex items-center text-accent font-semibold text-sm hover:gap-2 transition-all"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider bg="bg-gray-50" color="text-primary" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-primary section-padding" aria-labelledby="testimonials-heading">
        <div className="container-custom mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              What Our Clients Say
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal as="blockquote" key={t.author} delay={i * 120} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <Quote className="w-8 h-8 text-accent/40 mb-4" aria-hidden="true" />
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider bg="bg-primary" color="text-accent" flip />

      {/* ===== CTA BANNER ===== */}
      <section className="bg-accent section-padding" aria-label="Call to action">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-primary/70 text-lg mb-8 max-w-xl mx-auto">
            Let us handle the technology so you can focus on what you do best.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300">
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
