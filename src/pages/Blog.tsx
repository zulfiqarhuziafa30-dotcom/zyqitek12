import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/SEO';
import { CONTACT } from '../config/constants';
import { getBreadcrumbSchema, getArticleSchema } from '../utils/structuredData';
import { BLOG_POSTS } from '../data/blogPosts';

export function Blog() {
  const featuredArticle = BLOG_POSTS[0];
  const articles = BLOG_POSTS.slice(1);

  const blogSchemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' }
    ]),
    getArticleSchema({
      headline: featuredArticle.title,
      description: featuredArticle.excerpt
    }),
    ...articles.map(article => getArticleSchema({
      headline: article.title,
      description: article.excerpt
    }))
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title="Blog & Insights"
        description="Explore articles and strategic perspectives from ZYQITEK on modern web architecture, digital branding, conversion optimization, and tech company growth."
        keywords="Blog, insights, digital agency blog, web development articles, software engineering insights, UI UX trends, ZYQITEK blog"
        canonical="/blog"
        schema={blogSchemas}
      />
      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Perspectives
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white font-display">
              Ideas behind better digital work.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto">
              Insights on engineering, brand strategy, and scalable growth.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link to={`/blog/${featuredArticle.slug}`} className="group block">
            <article className="bg-zinc-900/60 backdrop-blur-xl border border-white/12 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:border-[#9C8A78]/40 shadow-2xl shadow-black/50 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#9C8A78]/15 text-[#B0A08D] border border-[#9C8A78]/30 mb-4 inline-block w-fit">
                Featured · {featuredArticle.category}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 group-hover:text-[#B0A08D] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-zinc-300 text-sm md:text-base mb-6 leading-relaxed max-w-3xl">
                {featuredArticle.excerpt}
              </p>
              <span className="inline-flex items-center text-[#B0A08D] font-semibold group-hover:text-white transition-colors text-sm">
                Read Full Story
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          </Link>
        </div>
      </section>

      {/* MORE ARTICLES */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="sr-only">Latest Articles and Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.div 
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Link to={`/blog/${article.slug}`} className="group block h-full">
                  <article className="border border-white/10 bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#9C8A78]/40 hover:bg-zinc-900/70 shadow-xl shadow-black/40 h-full flex flex-col text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10 mb-4 inline-block w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#B0A08D] transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-[#B0A08D] mt-auto group-hover:text-white transition-colors">
                      Read Article
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        heading="Let's build something great."
        subheading="Bring us your challenges. We'll engineer the solutions."
        primaryCtaText="Contact Us"
        primaryCtaLink={`mailto:${CONTACT.general.email}?subject=Inquiry%20from%20Website`}
      />
    </div>
  );
}
