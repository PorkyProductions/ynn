import { parentCompany } from "@typescript/constants";
import Title from "./title";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="no-underline group">
            <Title />
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Make your own
            </Link>
            <Link href="https://demotivator.web.app" className="text-gray-400 hover:text-white transition-colors">
              {parentCompany}
            </Link>
            <Link href="https://porkyproductions.github.io" className="text-gray-400 hover:text-white transition-colors">
              PorkyProductions
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <span className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} {parentCompany}. For entertainment purposes only.
            All articles are fake. Obviously.
          </span>
        </div>
      </div>
    </footer>
  );
}
