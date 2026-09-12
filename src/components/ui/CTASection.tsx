import { Button } from './Button';

interface CTASectionProps {
  heading: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function CTASection({ heading, subheading, primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink }: CTASectionProps) {
  const isPrimaryExternal = primaryCtaLink.startsWith('http');
  const isSecondaryExternal = secondaryCtaLink && secondaryCtaLink.startsWith('http');

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="bg-zinc-900/55 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/60">
          {/* Subtle overhead spotlight inside CTA card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-white/10 blur-3xl pointer-events-none rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              {heading}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button 
              href={primaryCtaLink} 
              variant="primary" 
              className="w-full sm:w-auto text-lg px-8 py-4"
              target={isPrimaryExternal ? "_blank" : undefined}
              rel={isPrimaryExternal ? "noopener noreferrer" : undefined}
            >
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button 
                href={secondaryCtaLink} 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                target={isSecondaryExternal ? "_blank" : undefined}
                rel={isSecondaryExternal ? "noopener noreferrer" : undefined}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
