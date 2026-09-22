'use client';

import Link from 'next/link';

const Button = () => {
  return (
    <Link
      href="/apps"
      className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
    >
      Show More
    </Link>
  );
};

export default Button;
