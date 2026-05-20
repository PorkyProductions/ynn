import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import { Crimson_Text } from 'next/font/google';
import Link from 'next/link';

const ctFont = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function NewspaperTemplate(urlData: URLArticleProps) {
  const today = new Date();
  const edition = Math.floor((today.getTime() - new Date('2021-01-01').getTime()) / 86400000);
  const pullQuote = urlData.article.length > 200
    ? urlData.article.slice(0, urlData.article.indexOf(' ', 100)).trimEnd() + '…'
    : null;

  return (
    <div className={`${ctFont.className} bg-body text-body min-h-screen`}>
      {/* Masthead */}
      <header className="border-b-4 border-[var(--bs-emphasis-color)]">
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-2">
          <div className="flex justify-between items-center text-xs border-b border-gray-400 dark:border-gray-600 pb-1 mb-2">
            <span>{today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>VOL. CXLII · · · No. {edition}</span>
            <span>Price: 75¢</span>
          </div>
          <div className="text-center py-3">
            <Link href="/" className="no-underline">
              <h1 className="font-black text-5xl sm:text-6xl tracking-tight text-body-emphasis leading-none">
                THE YNN TIMES
              </h1>
              <p className="text-xs tracking-[0.35em] uppercase mt-1 text-gray-600 dark:text-gray-400">
                "All the News That&apos;s Fit to Print (or Not)"
              </p>
            </Link>
          </div>
          <div className="border-t border-gray-400 dark:border-gray-600 pt-1">
            <nav className="flex justify-center gap-6 text-xs uppercase tracking-widest">
              {['International', 'Politics', 'Business', 'Arts', 'Science', 'Sports', 'Opinion'].map((s) => (
                <a key={s} href="#" className="hover:underline text-body-emphasis">
                  {s}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Section label */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 pb-1">
        <div className="flex items-center gap-2">
          <span className="bg-[var(--bs-emphasis-color)] text-[var(--bs-body-bg)] text-xs px-2 py-0.5 uppercase tracking-widest font-bold">
            News
          </span>
          <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 text-body-emphasis">
          {urlData.title}
        </h2>

        {/* Byline */}
        <div className="flex items-center gap-2 text-sm italic border-t border-b border-gray-300 dark:border-gray-600 py-2 mb-4">
          <span>By{' '}
            <span className="font-bold not-italic uppercase tracking-wide">
              {urlData.author || 'YNN Staff'}
            </span>
          </span>
          <span className="text-gray-400">|</span>
          <time>{urlData.date}</time>
        </div>

        {/* Hero image */}
        <div className="flex justify-center mb-4">
          <div className="w-full">
            <Image
              src={urlData.photoURL}
              alt="Article"
              width={800}
              height={450}
              className="w-full object-cover"
              style={{ maxHeight: '420px' }}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-1 text-center">
              Photo Credit: YNN Archives / File
            </p>
          </div>
        </div>

        {/* Pull quote */}
        {pullQuote && (
          <blockquote className="border-t-2 border-b-2 border-[var(--bs-emphasis-color)] py-3 my-4 text-center">
            <p className="text-xl font-bold italic leading-snug">
              &ldquo;{pullQuote}&rdquo;
            </p>
          </blockquote>
        )}

        {/* Multi-column article body */}
        <div
          className="text-justify text-base leading-7"
          style={{
            columnCount: 2,
            columnGap: '2.5rem',
          }}
        >
          <p
            className="first-letter:font-bold first-letter:text-5xl first-letter:leading-none first-letter:float-left first-letter:mr-1.5 first-letter:mt-0.5"
          >
            {urlData.article}
          </p>
        </div>

        {/* Author credit */}
        <p className="text-xs text-body-secondary italic mt-6 border-t border-gray-200 dark:border-gray-700 pt-3">
          <span className="font-bold not-italic">{urlData.author || 'YNN Staff'}</span>
          {urlData.author ? ' is a staff reporter covering national and international affairs for The YNN Times.' : ' contributed to this report.'}
        </p>

        {/* Related headlines */}
        <div className="mt-8 border-t-2 border-black dark:border-gray-100 pt-4">
          <p className="text-xs uppercase tracking-widest font-bold mb-3 text-body-emphasis">Also in Today&apos;s Edition</p>
          <div className="grid sm:grid-cols-3 gap-x-6 gap-y-3">
            {[
              'City Council to Hold Emergency Session on Emergency Session Scheduling',
              'Local Weather Continues to Behave Like Weather, Meteorologists Confirm',
              'Opinion: Why I Believe Everything I Read, Including This Column',
            ].map((h) => (
              <div key={h} className="border-t border-gray-300 dark:border-gray-600 pt-2">
                <p className="text-sm font-semibold leading-snug cursor-pointer hover:underline">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
