import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { servicesContent } from '../data/siteContent';
import PageHero from '../components/PageHero';
import DynamicIcon from '../components/IconMap';

export default function ServicesPage() {
  const { hero, services, cta } = servicesContent;

  return (
    <>
      <PageHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        backgroundImage={hero.backgroundImage}
      />

      {/* ===== SERVICES GRID ===== */}
      <section className="section-padding bg-white" aria-labelledby="all-services-heading">
        <div className="container-custom mx-auto">
          <h2 id="all-services-heading" className="sr-only">All Services</h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <DynamicIcon
                        name={service.icon}
                        className="w-6 h-6 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-primary/5 rounded-2xl p-8 lg:p-12 ${
                    index % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] rounded-xl bg-primary/10 flex items-center justify-center">
                      <DynamicIcon
                        name={service.icon}
                        className="w-20 h-20 text-primary/20"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-accent" aria-label="Call to action">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{cta.headline}</h2>
          <p className="text-primary/70 text-lg mb-8 max-w-xl mx-auto">{cta.description}</p>
          <Link to={cta.buttonLink} className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300">
            {cta.buttonText}
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
