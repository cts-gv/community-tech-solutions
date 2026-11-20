import type { ReactNode } from 'react';
import Divider from './Divider';

interface PageHeroProps {
  headline: string;
  subheadline: string;
  backgroundImage?: string;
  background?: ReactNode;
  compact?: boolean;
}

export default function PageHero({
  headline,
  subheadline,
  backgroundImage,
  background,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center ${
        compact ? 'min-h-[40vh]' : 'min-h-[70vh]'
      } bg-primary`}
      aria-label="Page hero"
    >
      {background}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}
      <div
        className={`absolute inset-0 ${
          backgroundImage ? 'bg-primary/85' : background ? 'bg-transparent' : 'bg-primary'
        }`}
        aria-hidden="true"
      />
      <Divider overlay color="text-white" />

      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
      </div>
    </section>
  );
}
