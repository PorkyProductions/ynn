import {ABBR} from '../typescript/constants'
import Link from 'next/link';
export default () => {
  return (
    <nav className="bg-red-600 dark:bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 text-white no-underline">
            <h1 className='font-bold'>{ABBR}</h1>
          </Link>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Politics
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  World
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Technology
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Entertainment
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              type="button"
              className="bg-red-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Heroicon name: outline/x */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Politics
          </a>
          <a
            href="#"
            className="text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            World
          </a>
          <a
            href="#"
            className="text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Business
          </a>
          <a
            href="#"
            className="text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Technology
          </a>
          <a
            href="#"
            className="text-white hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Entertainment
          </a>
        </div>
      </div>
    </nav>
  );
};
