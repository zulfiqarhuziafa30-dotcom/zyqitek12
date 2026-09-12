import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, CheckCircle2 } from 'lucide-react';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogPosts';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/ui/CTASection';
import { CONTACT } from '../config/constants';
import { getBreadcrumbSchema, getArticleSchema } from '../utils/structuredData';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center text-white pt-24 pb-16">
        <SEO 
          title="Article Not Found"
          description="The requested article could not be found. Explore our latest thinking on engineering, design, and growth."
          canonical="/blog"
          noindex={true}
        />
        <div className="max-w-md border border-white/10 bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
          <span className="text-xs font-mono tracking-widest text-[#B0A08D] uppercase mb-4 inline-block">
            404 · Article Not Found
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Article Not Found
          </h1>
          <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center font-bold px-6 py-2.5 rounded-xl bg-[#9C8A78] text-white hover:bg-[#B0A08D] transition-colors text-sm shadow-lg shadow-black/40"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (exclude current post)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2);

  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` }
    ]),
    getArticleSchema({
      headline: post.title,
      description: post.excerpt
    })
  ];

  return (
    <div className="flex flex-col w-full text-white">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, ${post.title}, digital transformation, software engineering, ZYQITEK`}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        schema={schemas}
      />

      {/* ARTICLE HEADER */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-4xl">
          {/* Back link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-xs md:text-sm font-semibold text-[#B0A08D] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to All Articles
          </Link>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#9C8A78]/20 text-[#B0A08D] border border-[#9C8A78]/30">
                {post.category}
              </span>
              <span className="text-zinc-500 text-xs">•</span>
              <span className="inline-flex items-center text-xs text-zinc-300">
                <Clock className="w-3.5 h-3.5 mr-1 text-zinc-400" />
                {post.readingTime}
              </span>
              <span className="text-zinc-500 text-xs">•</span>
              <span className="inline-flex items-center text-xs text-zinc-300">
                <Calendar className="w-3.5 h-3.5 mr-1 text-zinc-400" />
                {post.publishedDate}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-display leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-8">
              {post.excerpt}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-sm">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#B0A08D]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-zinc-400">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Key Takeaways Callout */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mb-12 p-6 md:p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-[#9C8A78]/30 shadow-xl shadow-black/40">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#B0A08D] font-bold mb-4 flex items-center gap-2">
                Key Strategic Takeaways
              </h2>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#B0A08D] flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Sections */}
          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display pt-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="pt-12 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/blog"
              className="inline-flex items-center text-sm font-semibold text-[#B0A08D] hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Articles
            </Link>
            <span className="text-xs text-zinc-400">
              Published by ZYQITEK · {post.publishedDate}
            </span>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 border-t border-white/10 bg-zinc-950/40">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-10">
              <span className="text-xs font-semibold tracking-widest text-[#B0A08D] uppercase mb-2 inline-block">
                Continue Reading
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
                Related Articles & Perspectives
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group block h-full"
                >
                  <article className="border border-white/10 bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#9C8A78]/40 hover:bg-zinc-900/70 shadow-xl shadow-black/40 h-full flex flex-col text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10 mb-4 inline-block w-fit">
                      {related.category}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#B0A08D] transition-colors leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                      {related.excerpt}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-[#B0A08D] mt-auto group-hover:text-white transition-colors">
                      Read Article
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <CTASection 
        heading="Let's build something great."
        subheading="Bring us your challenges. We'll engineer the solutions."
        primaryCtaText="Contact Us"
        primaryCtaLink={`mailto:${CONTACT.general.email}?subject=Inquiry%20from%20Website`}
      />
    </div>
  );
}
