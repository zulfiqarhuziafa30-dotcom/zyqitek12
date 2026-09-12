import { Link } from 'react-router-dom';
import { cn } from './utils';
import type { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', className, href, target, rel, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#9C8A78] text-white hover:bg-[#B0A08D] shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-[#9C8A78]/10 px-8 py-3 rounded-xl font-bold border border-[#B0A08D]/40 transition-all",
    secondary: "bg-zinc-900/90 text-[#B0A08D] hover:bg-zinc-800 px-8 py-3 rounded-xl font-bold shadow-md shadow-black/40 border border-[#9C8A78]/30 backdrop-blur-md transition-all",
    dark: "bg-zinc-900/90 text-white hover:bg-zinc-800 px-8 py-3 rounded-xl font-bold shadow-md shadow-black/40 border border-white/15 backdrop-blur-md transition-all",
    outline: "border border-[#9C8A78]/40 text-[#B0A08D] bg-[#9C8A78]/5 backdrop-blur-md hover:bg-[#9C8A78]/15 hover:border-[#9C8A78]/60 px-8 py-3 rounded-xl font-bold transition-all",
    ghost: "text-[#B0A08D] hover:text-[#C5B7A6] hover:bg-[#9C8A78]/10 px-4 py-2 rounded-xl font-medium transition-all",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
