import Image from 'next/image';
import Logo from '../assets/App-Error.png';
import NotFoundBackButton from '@/components/ui/NotFound';

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-900 px-4 py-10">
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
        
        {/* Error Image */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl" />

            <Image
              src={Logo}
              alt="App not found"
              width={260}
              height={260}
              className="relative mx-auto animate-[float_3s_ease-in-out_infinite] object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Error Code */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Oops! App Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
          The app you are looking for could not be found on our system.
          It may have been removed, moved, or the link might be incorrect.
        </p>

        {/* Back Button */}
        <NotFoundBackButton />
      </div>
    </main>
  );
};

export default NotFound;

