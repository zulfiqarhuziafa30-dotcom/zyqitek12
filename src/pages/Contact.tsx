import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { CONTACT, LINKS } from '../config/constants';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/structuredData';

export function Contact() {
  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title="Contact Us"
        description="Get in touch with ZYQITEK. Schedule a consultation, request an architectural audit, or connect directly with our engineering and design leadership."
        keywords="Contact Us, contact ZYQITEK, hire software agency, web design consultation, tech consulting, Karachi software company"
        canonical="/contact"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: '/contact' }
          ]),
          getLocalBusinessSchema()
        ]}
      />

      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 border-b border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Start a Conversation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              Let's engineer your growth.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Have an ambitious project in mind or need an audit of your current tech stack? Reach out directly to our leadership team.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECT CHANNELS */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 border border-[#9C8A78]/30 text-[#B0A08D] mb-4 inline-block">
                  Direct Channels
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                  Get in touch directly.
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We reply to every inquiry within 24 business hours. No spam, no automated sales loops.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT.general.email}?subject=Project%20Inquiry`}
                  className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:border-[#9C8A78]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] group-hover:bg-[#9C8A78]/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Email Us</div>
                    <div className="text-base font-semibold text-white group-hover:text-[#B0A08D] transition-colors">{CONTACT.general.email}</div>
                  </div>
                </a>

                <a 
                  href={`tel:${CONTACT.general.phone}`}
                  className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:border-[#9C8A78]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] group-hover:bg-[#9C8A78]/20 transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Direct Call</div>
                    <div className="text-base font-semibold text-white group-hover:text-[#B0A08D] transition-colors">{CONTACT.general.phone}</div>
                  </div>
                </a>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Headquarters</div>
                    <div className="text-base font-semibold text-white">{CONTACT.general.location}</div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Working Hours</div>
                    <div className="text-base font-semibold text-white">Mon – Fri: 9:00 AM – 6:00 PM PKT</div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Social Channels</div>
                      <div className="text-base font-semibold text-white">Connect Online</div>
                    </div>
                  </div>
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
            </div>

            {/* Project Consultation Box */}
            <div className="lg:col-span-7 bg-zinc-900/60 backdrop-blur-2xl border border-white/12 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/60">
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 border border-[#9C8A78]/30 text-[#B0A08D] mb-4 inline-block">
                Project Intake
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Initiate your project scope.
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
                To help us prepare the most accurate timeline, tech stack recommendations, and milestone estimates, complete our secure intake questionnaire.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-[#9C8A78]/20 text-[#B0A08D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                  <p><strong className="text-white">Review & Research:</strong> We analyze your requirements and existing tech assets within 24 hours.</p>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-[#9C8A78]/20 text-[#B0A08D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                  <p><strong className="text-white">Discovery Call:</strong> 30-minute deep dive with our technical and creative partners.</p>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-[#9C8A78]/20 text-[#B0A08D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                  <p><strong className="text-white">Milestone Proposal:</strong> Clear pricing, architecture breakdown, and weekly delivery schedule.</p>
                </div>
              </div>

              <Button 
                href={LINKS.forms.generalContact}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full py-4 text-base font-semibold justify-center shadow-lg shadow-[#9C8A78]/20"
              >
                <span>Launch Intake Form</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
