import type { URLArticleProps } from '@/typescript/types';
import Image from 'next/image';
import { Playfair_Display, Lora } from 'next/font/google';
import MagazineNav from '@components/MagazineNav';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });

export default function MagazineTemplate(urlData: URLArticleProps) {
  const wordCount = urlData.article.split(' ').length;
  const readTime = Math.max(1, Math.round(wordCount / 200));
  const issueNum = Math.floor((new Date().getTime() - new Date('2021-01-01').getTime()) / (86400000 * 7)) + 1;

  const pullQuote = urlData.article.length > 300
    ? urlData.article.slice(urlData.article.indexOf(' ', 60), urlData.article.indexOf(' ', 160)).trim()
    : null;

  return (
    <div className={`${lora.className} bg-body text-body min-h-screen`}>
      <MagazineNav />

      {/* Issue label */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-[#ffffff] dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <span className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 font-medium">
            Culture &amp; Society
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">Issue {issueNum} · {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        <div className="relative w-full" style={{ height: '60vh', minHeight: '380px' }}>
          <Image
            src={urlData.photoURL}
            alt="Magazine hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-4 sm:px-6 pb-8">
          <p className="text-xs text-white/60 uppercase tracking-[0.3em] mb-3 font-medium">
            Culture &amp; Society — Issue {issueNum}
          </p>
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-black text-white leading-tight max-w-3xl`}>
            {urlData.title}
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Deck + byline */}
        <p className={`${lora.className} text-xl italic text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium`}>
          A story about the intersection of ambition, circumstance, and the relentless human need to be heard.
        </p>

        <div className="flex items-start justify-between border-y border-gray-200 dark:border-gray-700 py-4 mb-8">
          <div className="flex items-center gap-3">
            {urlData.authorPhotoURL ? (
              <Image
                src={urlData.authorPhotoURL}
                alt={urlData.author ?? 'Author'}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <i className="bi bi-person text-gray-500 dark:text-gray-400 text-xl" />
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">By</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">{urlData.author || 'YNN Staff'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                Photographs by YNN Staff
              </p>
            </div>
          </div>
          <div className="text-right">
            <time className="text-xs text-gray-500 dark:text-gray-400 block">{urlData.date}</time>
            <span className="text-xs text-gray-500 dark:text-gray-400">{readTime} min read</span>
          </div>
        </div>

        {/* Photo caption */}
        <p className="text-xs text-gray-400 dark:text-gray-500 italic -mt-4 mb-8 text-center">
          Above: {urlData.title}. Photo credit: YNN Magazine / File.
        </p>

        {/* Article body with drop cap */}
        <div className="text-[17px] leading-8 text-gray-800 dark:text-gray-200">
          <p className={`first-letter:float-left first-letter:font-black first-letter:text-7xl first-letter:leading-none first-letter:mr-2 first-letter:mt-1 ${playfair.className} first-letter:[font-family:inherit]`}>
            {urlData.article}
          </p>
        </div>

        {/* Pull quote */}
        {pullQuote && (
          <blockquote className="my-10 py-6 border-y border-gray-300 dark:border-gray-600">
            <p className={`${playfair.className} text-2xl sm:text-3xl font-bold italic text-gray-800 dark:text-gray-200 text-center leading-snug`}>
              &ldquo;{pullQuote}&rdquo;
            </p>
          </blockquote>
        )}

        {/* Author bio */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-medium">About the Author</p>
          <div className="flex items-start gap-5">
            {urlData.authorPhotoURL ? (
              <Image
                src={urlData.authorPhotoURL}
                alt={urlData.author ?? 'Author'}
                width={72}
                height={72}
                className="rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-[72px] h-[72px] rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                <i className="bi bi-person text-gray-400 dark:text-gray-500 text-2xl" />
              </div>
            )}
            <div>
              <p className={`${playfair.className} text-xl font-bold text-gray-900 dark:text-gray-100 mb-1`}>
                {urlData.author || 'YNN Magazine Staff'}
              </p>
              <p className={`${lora.className} text-sm italic text-gray-500 dark:text-gray-400 mb-2`}>
                Contributing writer, YNN Magazine
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                A longtime contributor to YNN Magazine, covering culture, ideas, and the stories that define a generation.
                Their work has appeared in publications across the known world (and several unknown ones).
              </p>
            </div>
          </div>
        </div>

        {/* Related reads */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mb-5">Also in This Issue</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { section: 'Ideas', story: 'The Lost Art of Doing Absolutely Nothing, Skillfully' },
              { section: 'Society', story: 'Everyone Is Performing Authenticity and No One Can Stop' },
              { section: 'Culture', story: 'Why the Best Years Are Always Exactly Ten Years Ago' },
            ].map(({ section, story }) => (
              <div key={story} className="border-t border-gray-200 dark:border-gray-600 pt-3">
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{section}</p>
                <p className={`${playfair.className} text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer`}>
                  {story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
