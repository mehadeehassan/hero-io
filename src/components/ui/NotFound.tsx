'use client';
import Link from 'next/link';

const NotFoundBackButton = () => {
  return (
    <Link
      href="/"
      className="
        group inline-flex items-center gap-2
        rounded-xl
        bg-linear-to-r from-purple-600 to-indigo-600
        px-7 py-3.5
        text-sm font-semibold text-white
        shadow-lg shadow-purple-900/30
        transition-all duration-300
        hover:-translate-y-1
        hover:from-purple-500 hover:to-indigo-500
        hover:shadow-xl hover:shadow-purple-900/40
        active:translate-y-0
      "
    >
      <svg
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <span>Go Back</span>
    </Link>
  );
};

export default NotFoundBackButton;

