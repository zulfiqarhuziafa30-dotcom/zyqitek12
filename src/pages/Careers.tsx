import { motion } from 'motion/react';
import { CTASection } from '../components/ui/CTASection';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { CONTACT, LINKS } from '../config/constants';
import { getBreadcrumbSchema } from '../utils/structuredData';
import { 
  Rocket, 
  Code2, 
  Lightbulb, 
  Users, 
  Target, 
  TrendingUp, 
  Palette, 
  BarChart3 
} from 'lucide-react';

export function Careers() {
  const benefits = [
    {
      title: "Real Client Impact",
      desc: "Build products that directly drive revenue for established companies.",
      icon: Rocket,
    },
    {
      title: "Engineering Craft",
      desc: "Work at the intersection of clean architecture and refined UI design.",
      icon: Code2,
    },
    {
      title: "Mastery & Growth",
      desc: "Dedicated stipend for books, conferences, and technical toolkits.",
      icon: Lightbulb,
    },
    {
      title: "Flat Collaborative Team",
      desc: "Direct partnership with founders and leads — zero corporate bureaucracy.",
      icon: Users,
    },
    {
      title: "High Autonomy",
      desc: "Propose solutions, own sprint deliverables, and deploy without friction.",
      icon: Target,
    },
    {
      title: "Long-Term Equity",
      desc: "Competitive compensation aligned with agency milestones and growth.",
      icon: TrendingUp,
    }
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title="Careers"
        description="Explore career opportunities at ZYQITEK. We're hiring senior full-stack developers, UI/UX designers, and growth marketers to build premier digital products."
        keywords="Careers, ZYQITEK careers, tech jobs, software engineering jobs, UI UX designer hiring, digital agency jobs, remote developer roles"
        canonical="/careers"
        schema={getBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' }
        ])}
      />
      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Open Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              Build with us.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto">
              Opportunities for ambitious engineers, designers, and growth strategists.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN ZYQITEK */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-white">
              Why join ZYQITEK?
            </h2>
            <p className="text-base text-zinc-300">
              A high-autonomy culture focused on technical craft, design standards, and direct client impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#9C8A78]/40 hover:bg-zinc-900/70 transition-all duration-300 text-white shadow-xl shadow-black/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-white/5 border border-white/10 text-[#B0A08D]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white mb-2">{benefit.title}</h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section className="py-20 md:py-28 px-6 border-t border-white/10 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-white">
            Find your discipline.
          </h2>
          <p className="text-base text-zinc-300 mb-12 max-w-xl mx-auto">
            Choose your focus area below to apply directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Category 1 */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-left shadow-lg hover:border-[#9C8A78]/40 transition-colors flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] mb-5">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Development</h3>
                <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                  Full-stack TypeScript, React/Next.js, mobile, and cloud architectures.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'TypeScript', 'Node.js', 'Cloud'].map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <Button href={LINKS.forms.careersApplication} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center text-xs py-2.5">
                Apply for Engineering
              </Button>
            </div>

            {/* Category 2 */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-left shadow-lg hover:border-[#9C8A78]/40 transition-colors flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] mb-5">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Creative & Design</h3>
                <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                  Brand identities, UI/UX systems, and responsive digital interfaces.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Figma', 'UI/UX', 'Branding', 'Motion'].map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <Button href={LINKS.forms.careersApplication} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center text-xs py-2.5">
                Apply for Design
              </Button>
            </div>

            {/* Category 3 */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-left shadow-lg hover:border-[#9C8A78]/40 transition-colors flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B0A08D] mb-5">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Marketing & Growth</h3>
                <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                  Organic search optimization, performance media, and CRO analytics.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['SEO', 'Ads', 'CRO', 'GA4'].map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <Button href={LINKS.forms.careersApplication} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center text-xs py-2.5">
                Apply for Growth
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-sm font-bold text-white mb-0.5">Custom inquiry or portfolio?</h3>
              <p className="text-xs text-zinc-400">Email our talent lead directly.</p>
            </div>
            <Button href={`mailto:${CONTACT.careers.email}?subject=Application`} variant="secondary" className="w-full sm:w-auto text-xs py-2 px-4 whitespace-nowrap">
              Email Portfolio
            </Button>
          </div>
        </div>
      </section>

      <CTASection 
        heading="Not looking right now?"
        subheading="Follow our work and stay updated on future openings."
        primaryCtaText="Follow on Instagram"
        primaryCtaLink={LINKS.socials.instagram}
      />
    </div>
  );
}

