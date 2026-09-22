'use client';

import GlobalErrorButton from '@/components/ui/GlobalErrorButton';
import Image from 'next/image';
import Logo from '../assets/error-404.png';

const GlobalError = ({ reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
          <div className="w-full max-w-2xl text-center">
            <Image src={Logo} alt="App not found" width={450} height={350} className="w-full" />

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Error
            </p>

            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">
              The page you are looking for is not available.
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-gray-500">
              Something unexpected happened while loading this page. Please try again.
            </p>

            <GlobalErrorButton reset={reset} />
          </div>
        </main>
      </body>
    </html>
  );
};

export default GlobalError;
