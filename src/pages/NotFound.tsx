import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Compass } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center text-white">
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved. Explore ZYQITEK digital solutions, capabilities, and insights."
        canonical="/404"
        noindex={true}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto border border-white/10 bg-zinc-900/55 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl shadow-black/60"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-zinc-300">
          <Compass className="w-8 h-8 text-[#B0A08D]" />
        </div>

        <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
          Error 404
        </span>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white font-display">
          Page Not Found
        </h1>

        <p className="text-zinc-300 text-base leading-relaxed mb-8">
          The link you followed may be broken, or the page may have been moved. Return home to discover our capabilities, process, and latest insights.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
          <Button variant="secondary" href="/services">
            View Capabilities
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
