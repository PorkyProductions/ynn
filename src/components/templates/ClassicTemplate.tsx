import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import { Crimson_Text } from 'next/font/google';
import Nav from '@components/nav';

const ctFont = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function ClassicTemplate(urlData: URLArticleProps) {
  const wordCount = urlData.article.split(' ').length;
  const readTime = Math.max(1, Math.round(wordCount / 200));
  const pullQuote = urlData.article.length > 300
    ? urlData.article.slice(0, urlData.article.indexOf(' ', 120)).trimEnd() + '...'
    : null;

  return (
    <div className={`${ctFont.className} bg-body text-body min-h-screen`}>
      {/* Publication masthead */}
      <div className="bg-gray-950 text-white py-1 px-4 text-center text-xs tracking-widest uppercase border-b border-gray-700">
        The Chronicle &nbsp;·&nbsp; Est. 2021
      </div>

      <Nav />

      {/* Category breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">National</a>
          <span>›</span>
          <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">Breaking</a>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3 text-gray-900 dark:text-gray-100">
          {urlData.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-gray-700 py-3 mb-6">
          {urlData.author ? (
            <div className="flex items-center gap-2">
              {urlData.authorPhotoURL && (
                <Image
                  src={urlData.authorPhotoURL}
                  alt={urlData.author}
                  width={28}
                  height={28}
                  className="rounded-full object-cover"
                />
              )}
              <span>By <span className="font-semibold text-gray-800 dark:text-gray-200">{urlData.author}</span></span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">Staff Reporter</span>
            </div>
          ) : (
            <span>By <span className="font-semibold text-gray-800 dark:text-gray-200">Chronicle Staff</span></span>
          )}
          <span className="text-gray-300 dark:text-gray-600 hidden sm:block">|</span>
          <time className="text-gray-500 dark:text-gray-400">{urlData.date}</time>
          <span className="text-gray-300 dark:text-gray-600 hidden sm:block">|</span>
          <span>{readTime} min read</span>
        </div>

        {/* Hero image */}
        <div className="mb-6">
          <Image
            src={urlData.photoURL}
            alt="Article cover"
            width={900}
            height={500}
            className="w-full rounded-lg shadow-md object-cover"
            style={{ maxHeight: '480px' }}
            draggable={false}
          />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 italic">
            Photo via YNN Media Services
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mr-1">Share:</span>
          {[
            { icon: 'twitter-x', label: 'X' },
            { icon: 'facebook', label: 'Facebook' },
            { icon: 'envelope', label: 'Email' },
            { icon: 'link-45deg', label: 'Copy' },
          ].map(({ icon, label }) => (
            <button
              key={label}
              aria-label={`Share on ${label}`}
              className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1.5 rounded-full transition-all"
            >
              <i className={`bi bi-${icon}`} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Pull quote */}
        {pullQuote && (
          <blockquote className="border-l-4 border-gray-900 dark:border-gray-100 pl-4 my-6 text-xl italic text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            "{pullQuote}"
          </blockquote>
        )}

        {/* Article body */}
        <div className="text-lg leading-8 text-gray-800 dark:text-gray-200 [&>p]:mb-5">
          <p className="first-letter:float-left first-letter:font-bold first-letter:text-7xl first-letter:leading-none first-letter:mr-2 first-letter:mt-1">
            {urlData.article}
          </p>
        </div>

        {/* Author bio */}
        {urlData.author && (
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
              {urlData.authorPhotoURL ? (
                <Image
                  src={urlData.authorPhotoURL}
                  alt={urlData.author}
                  width={56}
                  height={56}
                  className="rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center shrink-0">
                  <i className="bi bi-person text-gray-500 dark:text-gray-400 text-xl" />
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">About the Author</p>
                <p className="font-bold text-gray-900 dark:text-gray-100">{urlData.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Staff Reporter at The Chronicle. Covers national affairs, politics, and breaking news.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Related articles */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">More from The Chronicle</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              'Local Man Discovers He Has Been Mispronouncing "Quinoa" For 12 Years',
              'Scientists Confirm That Coffee Does, In Fact, Make Everything Better',
              'Area Dog Receives Promotion, Named VP of Fetch Operations',
            ].map((headline) => (
              <div key={headline} className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
                  {headline}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">3 hours ago</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
