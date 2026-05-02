import { legalPages, siteConfig } from '../data/siteContent';

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  pageKey: 'terms' | 'privacy' | 'consumerHealthData';
}

export default function LegalPage({ pageKey }: LegalPageProps) {
  const page = legalPages[pageKey];

  return (
    <section className="bg-white min-h-screen pt-28 pb-16">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {siteConfig.businessName}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            {page.title}
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Last updated: {page.lastUpdated}
          </p>

          <div className="space-y-10">
            {page.sections.map((section: LegalSection) => (
              <div key={section.heading}>
                <h2 className="text-lg font-semibold text-primary mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
