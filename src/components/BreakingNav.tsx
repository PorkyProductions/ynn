import Link from 'next/link';

export default function BreakingNav() {
  return (
    <nav className="bg-[#1a1a1a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="text-white font-black text-2xl tracking-tight">YNN</span>
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              Live
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {['Politics', 'World', 'Business', 'Tech', 'Sports'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-xs hidden sm:block">
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        </div>
      </div>
    </nav>
  );
}
