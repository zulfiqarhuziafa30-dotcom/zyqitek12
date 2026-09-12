import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';
import { LINKS } from "../config/constants";
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { 
  Compass, 
  FileText, 
  Code2, 
  Rocket, 
  TrendingUp, 
  MessageSquare, 
  Kanban, 
  ShieldCheck 
} from 'lucide-react';

export function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Audit requirements, define user journeys, and establish business metrics.",
      icon: Compass,
      deliverables: ["Scope & Spec", "User Journeys", "Tech Feasibility"]
    },
    {
      num: "02",
      title: "Plan",
      desc: "Architect systems, create wireframes, and outline sprint milestones.",
      icon: FileText,
      deliverables: ["System Architecture", "UX Wireframes", "Sprint Schedule"]
    },
    {
      num: "03",
      title: "Build",
      desc: "Full-stack development and interface styling with weekly staging reviews.",
      icon: Code2,
      deliverables: ["Clean Codebase", "Design Tokens", "Weekly Staging"]
    },
    {
      num: "04",
      title: "Launch",
      desc: "Security hardening, performance optimization, and seamless zero-downtime deployment.",
      icon: Rocket,
      deliverables: ["Security Checks", "Speed Audit", "Production Deploy"]
    },
    {
      num: "05",
      title: "Grow",
      desc: "Track telemetry, optimize conversion funnels, and iterate based on data.",
      icon: TrendingUp,
      deliverables: ["Analytics Audit", "Conversion Tests", "Iterative Features"]
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title="Our Process"
        description="Discover ZYQITEK's agile five-stage delivery framework: Discover, Plan, Build, Launch, and Scale. Transparent milestones, clean architecture, and rapid execution."
        keywords="Our Process, agile software development, web development methodology, project delivery framework, ZYQITEK process"
        canonical="/our-process"
        schema={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Our Process', path: '/our-process' }
        ])}
      />
      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Delivery Framework
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              How we build for growth.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto">
              A transparent, five-step framework from discovery to long-term scale.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="sr-only">Our Five-Step Methodology</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#9C8A78] before:via-[#B0A08D]/40 before:to-zinc-800">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Node Circle */}
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 border-[#9C8A78] bg-zinc-950 text-[#B0A08D] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl shadow-black/80 font-bold text-sm z-10 ml-0 md:ml-auto">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl shadow-black/50 ml-6 md:ml-0 hover:border-[#9C8A78]/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-[#B0A08D]">
                        {step.num}
                      </span>
                      <h3 className="font-bold text-xl md:text-2xl text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-5">
                      {step.desc}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {step.deliverables.map((deliv) => (
                        <span key={deliv} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNICATION GUARANTEE - Visual 3-Column Grid */}
      <section className="py-20 md:py-28 border-t border-white/10 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Direct, transparent communication.
            </h2>
            <p className="text-base text-zinc-300">
              No middle managers. No radio silence. You talk directly with the engineers and designers building your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#9C8A78]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#B0A08D]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Shared Slack / Teams</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Direct channel access for asynchronous questions, quick feedback, and instant updates.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#9C8A78]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#B0A08D]">
                <Kanban className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Live Sprint Boards</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Track deliverables, tickets, and milestones in real time on shared Kanban boards.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#9C8A78]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-[#B0A08D]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Weekly Live Demos</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Regular sprint reviews to demonstrate working features and iterate together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        heading="Ready to start the process?"
        subheading="Let's review your requirements and outline a delivery schedule."
        primaryCtaText="Get in Touch"
        primaryCtaLink={LINKS.forms.generalContact}
      />
    </div>
  );
}

