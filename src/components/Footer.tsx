import { Link, useLocation } from 'react-router-dom';
import { ZyqitekLogo } from './ZyqitekLogo';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT, LINKS } from '../config/constants';

export function Footer() {
  const location = useLocation();
  const isCareers = location.pathname.startsWith('/careers');
  const isContact = location.pathname.startsWith('/contact');

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 pt-16 pb-8 px-6 md:px-10 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 text-xl font-black tracking-tighter text-white group w-fit">
              <ZyqitekLogo className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">ZYQITEK</span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs mt-2">
              A premium digital agency combining intelligent technology, elegant creative execution, and targeted digital growth.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Explore</h4>
            <Link to="/about" className="text-sm hover:text-white transition-colors w-fit">About</Link>
            <Link to="/services" className="text-sm hover:text-white transition-colors w-fit">Services</Link>
            <Link to="/our-process" className="text-sm hover:text-white transition-colors w-fit">Our Process</Link>
            <Link to="/blog" className="text-sm hover:text-white transition-colors w-fit">Insights</Link>
            <Link to="/careers" className="text-sm hover:text-white transition-colors w-fit">Careers</Link>
            <Link to="/contact" className="text-sm hover:text-white transition-colors w-fit">Contact</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Contact</h4>
            {!isCareers ? (
              <>
                <a href={`mailto:${CONTACT.general.email}?subject=Inquiry%20from%20Website`} className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {CONTACT.general.email}
                </a>
                {!isContact && (
                  <a href={`tel:${CONTACT.general.phone}`} className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {CONTACT.general.phone}
                  </a>
                )}
                <span className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {CONTACT.general.location}
                </span>
              </>
            ) : (
              <>
                <a href={`mailto:${CONTACT.careers.email}?subject=Application`} className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {CONTACT.careers.email}
                </a>
                <a href={`tel:${CONTACT.careers.phone}`} className="text-sm hover:text-white transition-colors w-fit flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {CONTACT.careers.phone}
                </a>
              </>
            )}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Social</h4>
            <div className="flex items-center gap-4">
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
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          <span>© {new Date().getFullYear()} ZYQITEK. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
