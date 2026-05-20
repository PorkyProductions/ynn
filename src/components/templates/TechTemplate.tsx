import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import TechNav from '@components/TechNav';

export default function TechTemplate(urlData: URLArticleProps) {
  const wordCount = urlData.article.split(' ').length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="bg-[#0f0f10] min-h-screen text-white selection:bg-[#00d4ff] selection:text-black">
      <TechNav />

      {/* Hero section */}
      <div className="relative">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <Image
            src={urlData.photoURL}
            alt="Article hero"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f10]/60 to-[#0f0f10]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-[#00d4ff] text-black text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
              Exclusive
            </span>
            <span className="text-gray-400 text-xs">{readTime} min read</span>
            <time className="text-gray-400 text-xs">{urlData.date}</time>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white max-w-3xl">
            {urlData.title}
          </h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Deck + meta */}
        <p className="text-gray-400 text-lg leading-relaxed mt-4 mb-6 max-w-2xl">
          A deep dive into the latest developments — what you need to know and why it matters.
        </p>

        <div className="flex flex-wrap items-center gap-4 border-y border-gray-800 py-3 mb-8">
          {urlData.author && (
            <div className="flex items-center gap-2">
              {urlData.authorPhotoURL ? (
                <Image
                  src={urlData.authorPhotoURL}
                  alt={urlData.author}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="bi bi-person text-gray-400 text-sm" />
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-white leading-none">{urlData.author}</p>
                <p className="text-xs text-gray-500">@{urlData.author.toLowerCase().replace(/\s+/g, '')}</p>
              </div>
            </div>
          )}
          <div className="flex gap-2 ml-auto">
            {[
              { icon: 'twitter-x', label: 'Share' },
              { icon: 'link-45deg', label: 'Copy' },
            ].map(({ icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full transition-all"
              >
                <i className={`bi bi-${icon}`} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main article */}
          <div className="flex-1 min-w-0">
            {/* Highlight/lede */}
            <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg p-4 mb-6">
              <p className="text-[#00d4ff] font-semibold text-sm leading-relaxed">
                <span className="font-black">TL;DR:</span> {urlData.title}. Here&apos;s what you need to know in under 60 seconds.
              </p>
            </div>

            {/* Article body */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-5">
              <p>{urlData.article}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Technology', 'Innovation', 'YNN Tech', 'Must Read'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full cursor-pointer transition-colors border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author bio */}
            {urlData.author && (
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-start gap-4 bg-gray-900 rounded-xl p-4">
                  {urlData.authorPhotoURL ? (
                    <Image
                      src={urlData.authorPhotoURL}
                      alt={urlData.author}
                      width={56}
                      height={56}
                      className="rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                      <i className="bi bi-person text-gray-400 text-xl" />
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-[#00d4ff] uppercase tracking-widest mb-0.5">Written by</p>
                    <p className="font-bold text-white">{urlData.author}</p>
                    <p className="text-[#00d4ff] text-xs mb-2">
                      @{urlData.author.toLowerCase().replace(/\s+/g, '')} · YNN Tech Staff
                    </p>
                    <p className="text-sm text-gray-400">
                      Senior technology writer covering AI, consumer electronics, and the intersection of tech and society.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-64 shrink-0 space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <h3 className="text-[#00d4ff] font-black text-xs uppercase tracking-widest mb-3">
                Trending on YNN Tech
              </h3>
              <div className="space-y-3">
                {[
                  'AI Model Claims to Have Feelings; Researchers Unsure How to Feel About That',
                  'New Gadget Does The Thing Your Old Gadget Did, But Now It Connects to Wi-Fi',
                  'Social Media Platform Announces Feature No One Asked For, Everyone Will Use',
                  'Startup Raises $50M to Solve Problem Only Startups Have',
                ].map((headline, i) => (
                  <div key={headline} className="flex gap-2">
                    <span className="text-[#00d4ff] font-black text-lg leading-none mt-0.5 shrink-0 w-5">
                      {i + 1}
                    </span>
                    <p className="text-xs text-gray-400 hover:text-white cursor-pointer leading-snug transition-colors">
                      {headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-xl p-4">
              <p className="text-[#00d4ff] font-bold text-xs uppercase tracking-widest mb-1">Newsletter</p>
              <p className="text-gray-400 text-xs mb-3">Get the latest tech news in your inbox.</p>
              <button className="w-full bg-[#00d4ff] text-black font-bold text-xs py-2 rounded-lg hover:bg-[#00b8d9] transition-colors">
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
