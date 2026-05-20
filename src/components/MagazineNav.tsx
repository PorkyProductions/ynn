import Link from 'next/link';

export default function MagazineNav() {
  return (
    <header className="bg-[#ffffff] dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800">
          <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400">
            {['Culture', 'Ideas', 'Science', 'Politics'].map((item) => (
              <a key={item} href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <Link href="/" className="no-underline text-center">
            <span className="font-black text-2xl tracking-widest uppercase text-black dark:text-gray-100">YNN</span>
            <span className="block text-xs tracking-[0.4em] uppercase text-gray-500 dark:text-gray-400 -mt-0.5">Magazine</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400">
            {['Arts', 'Food', 'Travel', 'Style'].map((item) => (
              <a key={item} href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
