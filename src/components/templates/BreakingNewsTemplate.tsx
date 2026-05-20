import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import BreakingNav from '@components/BreakingNav';

const tickerItems = [
  'MARKETS: Dow Jones +0.4% · NASDAQ +0.7% · S&P 500 +0.5%',
  'WEATHER: Storm system moving toward East Coast · Residents urged to prepare',
  'POLITICS: Congressional leaders meet for emergency budget talks',
  'TECH: Major tech company announces surprise acquisition',
  'SPORTS: Championship results delayed due to weather conditions',
];

export default function BreakingNewsTemplate(urlData: URLArticleProps) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="bg-body text-body min-h-screen font-sans selection:bg-red-600 selection:text-white">
      {/* Breaking news alert banner */}
      <div className="bg-red-600 py-2 overflow-hidden">
        <div className="flex items-center max-w-none">
          <span className="shrink-0 bg-black text-white font-black text-sm px-4 py-1 uppercase tracking-widest mr-0">
            ⚡ BREAKING NEWS
          </span>
          <div className="overflow-hidden flex-1 bg-red-600 py-1 px-3">
            <div
              className="flex gap-16 whitespace-nowrap text-white text-sm font-semibold"
              style={{ animation: 'marquee 30s linear infinite' }}
            >
              {[urlData.title, ...Array(3).fill(urlData.title)].map((t, i) => (
                <span key={i}>{t} &nbsp;&nbsp;•&nbsp;&nbsp;</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BreakingNav />

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Live indicator + timestamp */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-red-600 font-black text-sm uppercase tracking-widest">LIVE</span>
          <span className="text-gray-500 dark:text-gray-400 text-xs">{dateStr} · {timeStr}</span>
        </div>

        {/* Category */}
        <div className="flex gap-2 mb-3">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            Breaking
          </span>
          <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            Developing Story
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-black leading-tight text-body-emphasis mb-4 max-w-3xl">
          {urlData.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main column */}
          <div className="flex-1">
            {/* Hero image */}
            <div className="relative mb-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={urlData.photoURL}
                alt="Breaking news"
                width={800}
                height={450}
                className="w-full object-cover"
                style={{ maxHeight: '420px' }}
              />
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white text-xs font-black px-2 py-1 rounded uppercase tracking-widest">
                  ⚡ Breaking
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-xs opacity-75">YNN / AP / File Photo</p>
              </div>
            </div>

            {/* Reporter byline */}
            {urlData.author && (
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                {urlData.authorPhotoURL ? (
                  <Image
                    src={urlData.authorPhotoURL}
                    alt={urlData.author}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <i className="bi bi-person text-gray-600 dark:text-gray-400" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-body-emphasis">{urlData.author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">YNN Correspondent</p>
                </div>
                <time className="text-xs text-gray-400 ml-auto">{urlData.date}</time>
              </div>
            )}

            {/* Article text */}
            <div className="text-[16px] leading-relaxed space-y-4">
              <p className="font-semibold text-body-emphasis text-lg border-l-4 border-red-600 pl-4">
                DEVELOPING — This is a breaking news story. Details are being confirmed and this article will be updated as more information becomes available.
              </p>
              <p>{urlData.article}</p>
              <p className="text-sm text-body-secondary italic border-t border-gray-200 dark:border-gray-700 pt-3">
                YNN will continue to provide live coverage. Refresh for the latest updates.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-72 shrink-0">
            <div className="bg-body-tertiary border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
              <h3 className="font-black text-xs uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                Latest Headlines
              </h3>
              <div className="space-y-3">
                {[
                  { time: '2m ago', headline: 'Officials Confirm Situation Is Ongoing, Urge Patience' },
                  { time: '15m ago', headline: 'Expert Weighs In: "This Is Definitely Something"' },
                  { time: '31m ago', headline: 'Eyewitness Says It Seemed Like a Big Deal at the Time' },
                  { time: '1h ago', headline: 'Sources Familiar With the Matter Decline to Specify the Matter' },
                ].map(({ time, headline }) => (
                  <div key={headline} className="flex gap-2 border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-red-600 font-bold text-xs shrink-0 mt-0.5 w-12">{time}</span>
                    <p className="text-sm font-medium leading-snug cursor-pointer hover:text-red-600 dark:hover:text-red-400">
                      {headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-4">
              <h3 className="font-black text-xs uppercase tracking-widest mb-2 text-red-400">
                📺 Watch Live
              </h3>
              <p className="text-xs text-gray-400">
                Follow continuous live coverage on YNN at channel 42 and stream at ynn.com/live
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower third ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-700 z-40">
        <div className="flex items-stretch">
          <div className="bg-red-600 text-white font-black text-xs px-4 py-2 flex items-center uppercase tracking-widest shrink-0">
            YNN
          </div>
          <div className="overflow-hidden flex-1 py-2">
            <div
              className="flex gap-12 whitespace-nowrap text-white text-xs font-medium"
              style={{ animation: 'marquee 50s linear infinite' }}
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i}>{item} &nbsp;|</span>
              ))}
            </div>
          </div>
          <div className="text-gray-400 text-xs px-4 py-2 flex items-center shrink-0 border-l border-gray-700">
            {timeStr}
          </div>
        </div>
      </div>

      {/* Bottom padding to avoid ticker overlap */}
      <div className="h-10" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
