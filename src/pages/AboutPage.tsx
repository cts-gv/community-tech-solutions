import { aboutContent } from '../data/siteContent';
import PageHero from '../components/PageHero';
import DynamicIcon from '../components/IconMap';

export default function AboutPage() {
  const { hero, story, values } = aboutContent;

  return (
    <>
      <PageHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        backgroundImage={hero.backgroundImage}
      />

      {/* ===== OUR STORY ===== */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                {story.title}
              </h2>
              <div className="space-y-5">
                {story.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={story.image}
                  alt="Our team working together"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-2xl -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section-padding bg-gray-50" aria-labelledby="values-heading">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-primary">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <DynamicIcon
                    name={value.icon}
                    className="w-7 h-7 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
