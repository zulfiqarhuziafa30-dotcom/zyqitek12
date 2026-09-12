/**
 * Minimalist, seamless skeleton fallback matching the studio dark theme.
 * Replaces jarring spinners or blank flashes with an instant, dark-neutral layout placeholder.
 */
export function PageSkeleton() {
  return (
    <div className="flex flex-col w-full text-white min-h-[60vh] animate-pulse">
      {/* Hero Skeleton */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 border-b border-white/5">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <div className="w-28 h-6 bg-white/5 rounded-full mb-6 border border-white/5" />
          <div className="w-3/4 max-w-xl h-12 md:h-16 bg-white/10 rounded-2xl mb-6" />
          <div className="w-1/2 max-w-md h-5 bg-white/5 rounded-lg" />
        </div>
      </div>
      {/* Content Skeleton */}
      <div className="container mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-48 bg-zinc-900/30 rounded-2xl border border-white/5" />
        <div className="h-48 bg-zinc-900/30 rounded-2xl border border-white/5" />
        <div className="h-48 bg-zinc-900/30 rounded-2xl border border-white/5" />
      </div>
    </div>
  );
}
