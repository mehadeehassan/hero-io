'use client';

interface GlobalErrorButtonProps {
  reset: () => void;
}

const GlobalErrorButton = ({ reset }: GlobalErrorButtonProps) => {
  return (
    <button
      type="button"
      onClick={reset}
      className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1 hover:from-purple-500 hover:to-indigo-500 active:translate-y-0"
    >
      Try Again
    </button>
  );
};

export default GlobalErrorButton;