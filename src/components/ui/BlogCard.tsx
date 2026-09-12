import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

export function BlogCard({ category, title, excerpt, link }: BlogCardProps) {
  const isInternal = link && link !== '#' && !link.startsWith('http');
  const isExternal = link && link.startsWith('http');

  const content = (
    <article className="border border-white/10 bg-zinc-900/55 backdrop-blur-xl rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-[#9C8A78]/40 hover:bg-zinc-900/75 shadow-xl shadow-black/40 h-full flex flex-col text-white">
      <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/15 mb-4 inline-block w-fit">
        {category}
      </span>
      <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-[#B0A08D] transition-colors">
        {title}
      </h3>
      <p className="text-zinc-300 text-base leading-relaxed mb-8 flex-grow">
        {excerpt}
      </p>
      <span className="inline-flex items-center text-[#B0A08D] font-semibold mt-auto group-hover:text-white transition-colors">
        Read Article
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );

  if (isInternal) {
    return (
      <Link to={link} className="group block h-full">
        {content}
      </Link>
    );
  }

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
        {content}
      </a>
    );
  }

  return (
    <div className="group block h-full">
      {content}
    </div>
  );
}
