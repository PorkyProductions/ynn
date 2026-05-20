import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import { Red_Hat_Display } from 'next/font/google';
import YNNnav from '@components/YNNnav';

const rhdFont = Red_Hat_Display({ subsets: ['latin', 'latin-ext'], weight: 'variable' });

const tickerItems = [
  'Markets close higher for third consecutive day amid global optimism',
  'Weather service issues advisory for coastal regions this weekend',
  'New infrastructure bill passes committee vote with bipartisan support',
  'Technology summit draws record attendance from industry leaders',
  'Sports league announces expanded playoff format for upcoming season',
];

export default function YNNTemplate(urlData: URLArticleProps) {
  const wordCount = urlData.article.split(' ').length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className={`${rhdFont.className} selection:bg-red-600 selection:text-white bg-body text-body min-h-screen`}>
      {/* Ticker bar */}
      <div className="bg-red-700 text-white overflow-hidden py-1.5">
        <div className="flex items-center">
          <span className="shrink-0 bg-black text-white text-xs font-black px-3 py-0.5 uppercase tracking-widest mr-3 ml-2">
            Live
          </span>
          <div className="overflow-hidden flex-1">
            <div
              className="flex gap-12 whitespace-nowrap"
              style={{ animation: 'marquee 40s linear infinite' }}
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="text-xs font-medium">
                  {item} &nbsp;•
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <YNNnav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category + meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
            Breaking News
          </span>
          <span className="text-gray-400 text-xs">{readTime} min read</span>
          <time className="text-gray-400 text-xs">{urlData.date}</time>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-black leading-tight text-body-emphasis mb-3">
          {urlData.title}
        </h1>

        {/* Deck */}
        <p className="text-lg text-body-secondary font-medium mb-6 leading-relaxed">
          Developing story — follow YNN for the latest updates as this situation continues to evolve.
        </p>

        {/* Author row */}
        {urlData.author && (
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            {urlData.authorPhotoURL ? (
              <Image
                src={urlData.authorPhotoURL}
                alt={urlData.author}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                <i className="bi bi-person text-red-600 dark:text-red-400" />
              </div>
            )}
            <div>
              <p className="font-bold text-body-emphasis text-sm leading-none mb-0.5">{urlData.author}</p>
              <p className="text-xs text-body-secondary">Senior Correspondent, YNN</p>
            </div>
          </div>
        )}

        {/* Hero image */}
        <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={urlData.photoURL}
            alt="Article image"
            width={900}
            height={500}
            className="w-full object-cover"
            style={{ maxHeight: '480px' }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-xs opacity-80">YNN / File Photo</p>
          </div>
        </div>

        {/* Article body */}
        <div className="text-[17px] leading-relaxed mb-8 space-y-4">
          <p>{urlData.article}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Breaking News', 'Developing Story', 'YNN Exclusive', 'Top Stories'].map((tag) => (
            <span
              key={tag}
              className="text-xs text-body-secondary bg-body-tertiary hover:opacity-75 px-3 py-1 rounded-full cursor-pointer transition-opacity"
            >
              #{tag.replace(/\s+/g, '')}
            </span>
          ))}
        </div>

        {/* More stories */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xs uppercase tracking-widest text-body-secondary font-bold mb-4">More on YNN</h3>
          <div className="space-y-4">
            {[
              { label: 'Politics', story: 'Senate Debates New Resolution on Unresolvable Things' },
              { label: 'Science', story: 'Researchers Find Correlation Between Correlation and Studies About Correlation' },
              { label: 'Business', story: 'Tech Giant Releases Update That Fixes the Problems the Last Update Caused' },
            ].map(({ label, story }) => (
              <div key={story} className="flex items-start gap-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">
                  {label}
                </span>
                <p className="text-sm font-semibold hover:text-red-600 cursor-pointer leading-snug">
                  {story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
