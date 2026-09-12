import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';
import { motion } from 'motion/react';

interface ServiceCardProps {
  num?: string;
  title: string;
  description: string;
  ctaText: string;
  link: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export function ServiceCard({ num, title, description, ctaText, link, theme = 'dark', className }: ServiceCardProps) {
  const isDark = theme !== 'light';
  return (
    <div 
      className={cn(
        "rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 h-full",
        isDark 
          ? "bg-zinc-900/55 backdrop-blur-xl text-white border border-white/10 hover:border-white/25 hover:bg-zinc-900/75 shadow-xl shadow-black/40" 
          : "bg-white/90 border border-zinc-200 hover:border-zinc-300 shadow-md",
        className
      )}
    >
      {num && (
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors",
          isDark 
            ? "bg-white/10 border-white/15 text-white" 
            : "bg-zinc-100 border-zinc-200 text-zinc-900"
        )}>
          <span className="font-bold">{num}</span>
        </div>
      )}
      <div>
        <h3 className={cn("text-xl font-bold mb-2 tracking-tight", isDark ? "text-white" : "text-zinc-950")}>{title}</h3>
        <p className={cn("text-sm leading-relaxed mb-6", isDark ? "text-zinc-300" : "text-zinc-600")}>{description}</p>
      </div>
      
      <Link to={link} className={cn(
        "text-sm font-semibold flex items-center gap-2 mt-auto transition-colors",
        isDark ? "text-zinc-200 group-hover:text-white" : "text-zinc-900 group-hover:text-black"
      )}>
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
