import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from './ui/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ZyqitekLogo } from './ZyqitekLogo';

import { LINKS } from '../config/constants';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Process', path: '/our-process' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'sticky z-50 flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-300',
        'md:mx-auto md:w-[95%] md:max-w-6xl',
        isScrolled
          ? 'top-0 md:top-6 bg-zinc-950/85 backdrop-blur-2xl border-b md:border border-white/15 shadow-2xl shadow-black/80 md:rounded-full'
          : 'top-0 md:top-6 bg-zinc-950/30 backdrop-blur-xl border-b md:border border-white/5 md:rounded-full'
      )}
    >
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2.5 text-2xl font-black tracking-tighter text-white z-50 group">
          <ZyqitekLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 group-hover:via-white transition-all">ZYQITEK</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200 relative",
                  isActive 
                    ? "text-[#B0A08D] font-semibold" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-[#9C8A78]/10 shadow-[0_0_15px_rgba(156,138,120,0.15)] border border-[#9C8A78]/30 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden md:block">
        <Button href={LINKS.forms.generalContact} target="_blank" rel="noopener noreferrer" variant="primary" className="px-6 py-2 rounded-full text-sm">Let's Work Together</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 p-2 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 pt-24 bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 z-40 flex flex-col px-6 pb-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4 text-xl font-display font-medium mb-12">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "py-2 transition-colors",
                      isActive 
                        ? "text-[#B0A08D] font-bold border-l-2 border-[#B0A08D] pl-3 bg-[#9C8A78]/10 rounded-r-lg" 
                        : "text-zinc-400 hover:text-white pl-3"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
              <Button href={LINKS.forms.generalContact} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">Let's Work Together</Button>
              <div className="flex items-center justify-center gap-6 pt-2">
                <a 
                  href={LINKS.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={LINKS.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={LINKS.socials.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
