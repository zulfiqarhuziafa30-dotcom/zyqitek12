import { motion } from 'motion/react';
import { ShieldCheck, Zap, Layers, Users, HeartHandshake, Award } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEO } from '../components/SEO';
import { LINKS } from '../config/constants';
import { getBreadcrumbSchema } from '../utils/structuredData';

export function About() {
  const values = [
    {
      icon: Zap,
      title: "Engineered for Longevity",
      desc: "We write clean, modular software and design systems built to adapt as your business scales, avoiding costly technical debt."
    },
    {
      icon: Users,
      title: "Senior Partner Involvement",
      desc: "Every project is led directly by senior engineers and designers with skin in the game — no junior handoffs or bureaucratic layers."
    },
    {
      icon: Layers,
      title: "One Unified Discipline",
      desc: "We bridge the gap between engineering, brand identity, and growth marketing into one synchronized, high-velocity team."
    },
    {
      icon: ShieldCheck,
      title: "Radical Transparency",
      desc: "Clear milestones, weekly deployments, shared communication channels, and complete ownership of all code and IP."
    },
    {
      icon: HeartHandshake,
      title: "Skin in the Outcome",
      desc: "We measure our success by your operational stability, user retention, and commercial performance, not just launch day."
    },
    {
      icon: Award,
      title: "Uncompromising Polish",
      desc: "From WCAG accessibility and sub-second load times to responsive typography, every pixel and endpoint is refined."
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title="About Us"
        description="Learn about ZYQITEK: our engineering standards, creative design philosophy, and senior team dedicated to building resilient software and scalable digital products."
        keywords="About Us, ZYQITEK, about zyqitek, software engineering team, digital agency, tech leadership, creative agency"
        canonical="/about"
        schema={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' }
        ])}
      />

      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 border-b border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              About ZYQITEK
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              Building digital solutions that last.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              We are an integrated digital agency founded on one premise: ambitious businesses deserve senior craftsmanship across technology, design, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* STORY & MISSION */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 border border-[#9C8A78]/30 text-[#B0A08D] mb-4 inline-block">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                Eliminating the friction between strategy and execution.
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                Most companies struggle because their development agency builds without marketing insight, their marketing team runs campaigns without technical tracking, and their branding agency produces assets disconnected from product usability.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                ZYQITEK eliminates these silos. We combine high-performance software engineering, modern brand identity systems, and performance marketing under one roof.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl shadow-black/40">
                <div className="text-3xl md:text-4xl font-bold text-[#B0A08D] mb-2 font-display">95%</div>
                <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">Client Retention</div>
                <p className="text-[11px] text-zinc-400 mt-2">Ongoing development and growth partnerships.</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl shadow-black/40">
                <div className="text-3xl md:text-4xl font-bold text-[#B0A08D] mb-2 font-display">100%</div>
                <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">Senior Delivery</div>
                <p className="text-[11px] text-zinc-400 mt-2">Zero junior delegation or outsourced relays.</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl shadow-black/40">
                <div className="text-3xl md:text-4xl font-bold text-[#B0A08D] mb-2 font-display">&lt; 1s</div>
                <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">Core Web Vitals</div>
                <p className="text-[11px] text-zinc-400 mt-2">Optimized for search ranking and conversion.</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-xl shadow-black/40">
                <div className="text-3xl md:text-4xl font-bold text-[#B0A08D] mb-2 font-display">0%</div>
                <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">Vendor Lock-In</div>
                <p className="text-[11px] text-zinc-400 mt-2">You retain 100% code, IP, and repository rights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading 
            heading="Our core principles."
            subheading="The operating tenets that guide every architecture, pixel, and partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#9C8A78]/40 hover:bg-zinc-900/70 transition-all text-white shadow-xl shadow-black/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-white/5 border border-white/10 text-[#B0A08D]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white mb-2">{val.title}</h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        heading="Ready to partner with ZYQITEK?"
        subheading="Let's discuss how we can engineer your product, brand, and growth roadmap."
        primaryCtaText="Start a Project"
        primaryCtaLink={LINKS.forms.generalContact}
        secondaryCtaText="Explore Capabilities"
        secondaryCtaLink="/services"
      />
    </div>
  );
}
