import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';
import { LINKS } from "../config/constants";
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Palette, 
  Layout, 
  Sparkles, 
  Search, 
  TrendingUp, 
  BarChart3 
} from 'lucide-react';

export function Services() {
  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title="Our Services"
        description="Explore our end-to-end digital services at ZYQITEK: bespoke web and mobile software engineering, UI/UX product design, brand identity systems, and performance marketing."
        keywords="Our Services, ZYQITEK services, custom web development, mobile app development, UI UX design, performance marketing, brand identity"
        canonical="/services"
        schema={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Services', path: '/services' }
        ])}
      />
      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Integrated Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              Capabilities built to scale.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto">
              Engineering, design, and growth united into one focused team.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl pb-28 space-y-24">
        {/* CAPABILITY 01: DEVELOPMENT */}
        <section id="development" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 border border-[#9C8A78]/30 text-[#B0A08D] mb-4 inline-block">
                01 / Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Development & Software
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Custom web applications, cloud backends, and AI workflows built without technical debt.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Fast Delivery</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Clean Codebase</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Zero Lock-in</span>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Code2, 
                  title: "Custom Web Apps", 
                  desc: "Modern React and Next.js applications engineered for speed.",
                  tags: ["Full-Stack", "TypeScript", "REST/GraphQL"]
                },
                { 
                  icon: Smartphone, 
                  title: "Mobile Solutions", 
                  desc: "Cross-platform iOS and Android apps with native responsiveness.",
                  tags: ["React Native", "iOS", "Android"]
                },
                { 
                  icon: Cloud, 
                  title: "Cloud Infrastructure", 
                  desc: "Secure containerized backends that scale with user traffic.",
                  tags: ["AWS / GCP", "Docker", "Serverless"]
                },
                { 
                  icon: Cpu, 
                  title: "AI Workflows", 
                  desc: "Intelligent automations that streamline repetitive operational tasks.",
                  tags: ["Automations", "LLM APIs", "Integrations"]
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-zinc-900/50 backdrop-blur-xl p-6 border border-white/10 rounded-2xl hover:border-[#9C8A78]/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-zinc-400 font-mono">#{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITY 02: CREATIVE & BRANDING */}
        <section id="creative" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:order-last">
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 border border-[#9C8A78]/30 text-[#B0A08D] mb-4 inline-block">
                02 / Design
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Creative & Branding
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Distinctive identity systems and intuitive UI/UX crafted to differentiate your product.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Design Systems</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Accessible (WCAG)</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">High Conversion</span>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Palette, 
                  title: "Brand Identity", 
                  desc: "Logo marks, typography pairings, and complete brand style guides.",
                  tags: ["Logomark", "Visual Identity", "Guidelines"]
                },
                { 
                  icon: Layout, 
                  title: "UI/UX Systems", 
                  desc: "Intuitive product wireframes, user journeys, and component systems.",
                  tags: ["Figma", "Design Tokens", "Wireframing"]
                },
                { 
                  icon: Sparkles, 
                  title: "Web & Interface Design", 
                  desc: "High-contrast, responsive layouts tuned for maximum engagement.",
                  tags: ["Responsive", "Mobile-First", "Prototypes"]
                },
                { 
                  icon: Cpu, 
                  title: "Motion & Micro-interactions", 
                  desc: "Subtle animations that elevate product polish without slowing load time.",
                  tags: ["Animation", "Interactions", "Transitions"]
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-zinc-900/50 backdrop-blur-xl p-6 border border-white/10 rounded-2xl hover:border-[#9C8A78]/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-zinc-400 font-mono">#{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITY 03: MARKETING & GROWTH */}
        <section id="growth" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 border border-[#9C8A78]/30 text-[#B0A08D] mb-4 inline-block">
                03 / Growth
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Marketing & Growth
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Data-driven customer acquisition, search visibility, and conversion rate optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Measurable ROI</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Search Growth</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Live Dashboards</span>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Search, 
                  title: "Technical SEO", 
                  desc: "Structured data, Core Web Vitals, and keyword architecture.",
                  tags: ["On-Page", "Technical Audit", "Keyword Plan"]
                },
                { 
                  icon: TrendingUp, 
                  title: "Performance Ads", 
                  desc: "High-intent paid search and social campaigns optimized for conversions.",
                  tags: ["Search Ads", "Meta Campaigns", "Retargeting"]
                },
                { 
                  icon: Layout, 
                  title: "Conversion Optimization", 
                  desc: "Landing page audits and A/B testing to increase sign-up rates.",
                  tags: ["CRO Audits", "Heatmaps", "User Testing"]
                },
                { 
                  icon: BarChart3, 
                  title: "Growth Analytics", 
                  desc: "Multi-channel attribution tracking with transparent performance dashboards.",
                  tags: ["GA4", "Custom Reports", "Attribution"]
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-zinc-900/50 backdrop-blur-xl p-6 border border-white/10 rounded-2xl hover:border-[#9C8A78]/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-zinc-400 font-mono">#{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <CTASection 
        heading="Have a project in mind?"
        subheading="Tell us what you're building. We'll engineer the execution plan."
        primaryCtaText="Start a Project"
        primaryCtaLink={LINKS.forms.generalContact}
      />
    </div>
  );
}

