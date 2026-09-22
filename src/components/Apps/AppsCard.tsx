import { TAppsTypes } from '@/Types/Types';
import Image from 'next/image';
import { FaDownload, FaStar } from 'react-icons/fa';
import AppCardButton from '../ui/AppsDetailsButton';

interface AppCardProps {
  app: TAppsTypes;
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Animated rotating border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-transparent" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-12.5 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,#a855f7_90%,transparent_100%)]" />
      </div>
      <div className="absolute inset-[1.5px] rounded-2xl bg-white" />

      {/* Actual content wrapper (needs relative + z-10 to sit above the border layers) */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="flex items-start gap-4">
          {/* App Image */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <Image src={app.image} alt={app.title} fill sizes="80px" className="object-cover" />
          </div>

          {/* App Info */}
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-bold text-gray-900">{app.title}</h2>

            <p className="mt-1 truncate text-sm text-gray-500">{app.companyName}</p>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-1.5">
              <FaStar className="text-sm text-yellow-400" />

              <span className="text-sm font-semibold text-gray-800">{app.ratingAvg}</span>

              <span className="text-xs text-gray-400">({app.reviews})</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">{app.description}</p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-gray-200 rounded-xl bg-gray-50 py-3">
          <div className="text-center">
            <p className="text-sm font-bold text-gray-900">{app.downloads}</p>
            <p className="mt-1 text-xs text-gray-500">Downloads</p>
          </div>

          <div className="text-center">
            <p className="text-sm font-bold text-gray-900">{app.reviews}</p>
            <p className="mt-1 text-xs text-gray-500">Reviews</p>
          </div>

          <div className="text-center">
            <p className="text-sm font-bold text-gray-900">{app.size} MB</p>
            <p className="mt-1 text-xs text-gray-500">Size</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaDownload className="text-gray-400" />
            <span>{app.downloads}</span>
          </div>
          <AppCardButton app={app} />
        </div>
      </div>
    </div>
  );
};

export default AppCard;
