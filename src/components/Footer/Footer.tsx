import Link from 'next/link';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              HERO<span className="text-purple-500">.IO</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              We build innovative and productive apps designed to make
              everyday life simpler, smarter, and more exciting.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center gap-3 sm:justify-start">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600 hover:text-white"
              >
                <FaGithub />
              </a>

            </div>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-purple-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-purple-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/apps"
                  className="transition hover:text-purple-400"
                >
                  All Apps
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-white">
              Support
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/help"
                  className="transition hover:text-purple-400"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-purple-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-purple-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-purple-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-white">
              Get Our App
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Download our apps and enjoy a better experience.
            </p>

            <div className="mt-5 flex flex-col items-center gap-3 sm:items-start">

              <button className="w-full max-w-48 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
                Google Play
              </button>

              <button className="w-full max-w-48 rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-500 hover:bg-purple-600">
                App Store
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="my-10 border-t border-gray-800" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 sm:flex-row sm:text-left">

          <p>
            © {new Date().getFullYear()} HERO.IO. All rights reserved.
          </p>

          <p>
            Built with love for better digital experiences.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

