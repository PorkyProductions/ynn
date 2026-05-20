import Link from 'next/link';

export default function TechNav() {
  return (
    <nav className="bg-[#0f0f10] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-white font-black text-xl tracking-tight">YNN</span>
            <span className="text-[#00d4ff] font-bold text-xl tracking-tight">TECH</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {['AI', 'Gadgets', 'Science', 'Gaming', 'Reviews'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-white/5 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#00d4ff] hover:bg-[#00b8d9] text-black text-xs font-bold px-3 py-1.5 rounded transition-colors hidden sm:block">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
