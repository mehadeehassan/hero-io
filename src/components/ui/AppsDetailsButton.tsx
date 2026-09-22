'use client'
import Link from 'next/link';
import { TAppsTypes } from '@/Types/Types';


interface ButtonProps {
  app: TAppsTypes;
}

const Button = ({ app }: ButtonProps) => {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-purple-700 active:scale-95"
    >
      View Details
    </Link>
  );
};

export default Button;

