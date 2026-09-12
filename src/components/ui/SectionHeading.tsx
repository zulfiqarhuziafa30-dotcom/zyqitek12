import { cn } from './utils';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  heading: ReactNode;
  subheading?: ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({ heading, subheading, theme = 'dark', className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl mb-16", className)}>
      <h2 className={cn(
        "text-4xl md:text-5xl font-bold tracking-tight mb-6",
        theme === 'light' ? "text-zinc-950" : "text-white"
      )}>
        {heading}
      </h2>
      {subheading && (
        <p className={cn(
          "text-xl leading-relaxed",
          theme === 'light' ? "text-zinc-600" : "text-zinc-300"
        )}>
          {subheading}
        </p>
      )}
    </div>
  );
}
