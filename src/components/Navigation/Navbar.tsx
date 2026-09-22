'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GrGithub } from 'react-icons/gr';

import logo from '../../assets/logo.png';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Apps',
    href: '/apps',
  },
  {
    name: 'Installation',
    href: '/installation',
  },
];

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl p-2">
            <Image src={logo} alt="HERO.IO" className="h-full w-full object-contain" />
          </div>

          <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
            HERO<span className="text-purple-500">.IO</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-purple-50 hover:text-purple-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop GitHub Button */}
        <div className="hidden md:block">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-linear-to-br from-purple-700 to-purple-400 px-5 py-2 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <GrGithub className="text-lg transition-transform duration-300 group-hover:rotate-12" />
            Contribute
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-200/70 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {/* Mobile Links */}
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-purple-50 hover:text-purple-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile GitHub Button */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-purple-700 to-purple-400 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            <GrGithub className="text-lg" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
