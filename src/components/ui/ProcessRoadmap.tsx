import { motion } from 'motion/react';
import { Compass, FileText, Code2, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProcessStep {
  num: string;
  title: string;
  shortDesc: string;
  icon: typeof Compass;
}

const steps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discover',
    shortDesc: 'Align on business goals, audience, and scope.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Plan',
    shortDesc: 'Map technical architecture and delivery milestones.',
    icon: FileText,
  },
  {
    num: '03',
    title: 'Build',
    shortDesc: 'Design, engineer, and test with weekly demos.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'Grow',
    shortDesc: 'Deploy, measure metrics, and scale continuously.',
    icon: Rocket,
  },
];

export function ProcessRoadmap() {
  return (
    <div className="w-full">
      {/* DESKTOP HORIZONTAL ROADMAP (hidden on small screens) */}
      <div className="hidden lg:block relative py-8">
        {/* Connecting line container */}
        <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-zinc-800 -z-0">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-[#9C8A78] via-[#B0A08D] to-[#9C8A78] shadow-[0_0_12px_rgba(176,160,141,0.5)]"
          />
        </div>

        {/* 4 Nodes evenly spaced */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.22 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Node Circle */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: idx * 0.22 + 0.15,
                  }}
                  className="w-20 h-20 rounded-2xl bg-zinc-950 border-2 border-white/15 flex flex-col items-center justify-center mb-6 shadow-xl shadow-black/80 transition-all duration-300 group-hover:border-[#9C8A78] group-hover:shadow-[0_0_24px_rgba(156,138,120,0.3)] relative"
                >
                  {/* Subtle active glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9C8A78]/20 to-transparent opacity-60" />
                  <Icon className="w-6 h-6 text-[#B0A08D] relative z-10 mb-1 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 relative z-10">
                    {step.num}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#B0A08D] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-[200px]">
                  {step.shortDesc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TABLET VERTICAL ROADMAP (hidden on large screens) */}
      <div className="lg:hidden relative py-4">
        {/* Continuous vertical connecting line */}
        <div className="absolute top-6 bottom-6 left-7 w-0.5 bg-zinc-800 -z-0">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-gradient-to-b from-[#9C8A78] via-[#B0A08D] to-[#9C8A78] shadow-[0_0_10px_rgba(176,160,141,0.5)]"
          />
        </div>

        {/* Vertical Nodes List */}
        <div className="space-y-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.15 }}
                className="flex items-start gap-5 group"
              >
                {/* Node Circle */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: idx * 0.15 + 0.1,
                  }}
                  className="w-14 h-14 rounded-2xl bg-zinc-950 border-2 border-white/15 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-black/80 relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9C8A78]/20 to-transparent opacity-60" />
                  <Icon className="w-5 h-5 text-[#B0A08D] relative z-10" />
                  <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-400 relative z-10">
                    {step.num}
                  </span>
                </motion.div>

                {/* Text card */}
                <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {step.shortDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle Link to Full Process Page */}
      <div className="mt-12 text-center">
        <Link
          to="/our-process"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#B0A08D] hover:text-white transition-colors group"
        >
          <span>See our 5-step delivery framework</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
