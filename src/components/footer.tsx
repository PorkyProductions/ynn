import { parentCompany } from "@typescript/constants";
import Title from "./title";
import Link from "next/link";

export default () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex content-center justify-center text-white no-underline">
          <Title />
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-sm">
              &copy; {new Date().getFullYear()} {parentCompany}. All rights reserved.
            </span>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Make your own!
                </Link>
              </li>
              <li>
                <Link
                  href="https://demotivator.web.app"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {parentCompany}
                </Link>
              </li>
              <li>
                <Link
                  href="https://porkyproductions.github.io"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  PorkyProductions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
