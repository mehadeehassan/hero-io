import { TAppsTypes } from '@/Types/Types';
import Image from 'next/image';
import { FaComments, FaDownload, FaStar } from 'react-icons/fa';
import BackButtonPage from '../ui/BackButtonApps';
import InstallButton from '../ui/InstallButton';

interface AppDetailsProps {
  app: TAppsTypes;
}

const AppDetails = ({ app }: AppDetailsProps) => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* ================= BACK BUTTON ================= */}

        <BackButtonPage />

        {/* ================= APP HEADER ================= */}
        <section className="border-b border-gray-300 pb-8">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* App Image */}
            <div className="flex shrink-0 justify-center md:justify-start">
              <div className="relative h-64 w-64 overflow-hidden bg-white shadow-sm sm:h-72 sm:w-72">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-contain p-6"
                />
              </div>
            </div>

            {/* App Information */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{app.title}</h1>

              <p className="mt-2 text-base text-slate-500">
                Developed by{' '}
                <span className="font-semibold text-purple-600">{app.companyName}</span>
              </p>

              <div className="my-6 border-t border-gray-300" />

              {/* Statistics */}
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {/* Downloads */}
                <div>
                  <FaDownload className="mb-2 text-2xl text-green-500" />

                  <p className="text-sm text-slate-500">Downloads</p>

                  <p className="mt-1 text-3xl font-bold text-slate-900">{app.downloads}</p>
                </div>

                {/* Rating */}
                <div>
                  <FaStar className="mb-2 text-2xl text-orange-500" />

                  <p className="text-sm text-slate-500">Average Ratings</p>

                  <p className="mt-1 text-3xl font-bold text-slate-900">{app.ratingAvg}</p>
                </div>

                {/* Reviews */}
                <div>
                  <FaComments className="mb-2 text-2xl text-purple-600" />

                  <p className="text-sm text-slate-500">Total Reviews</p>

                  <p className="mt-1 text-3xl font-bold text-slate-900">{app.reviews}</p>
                </div>
              </div>

              {/* Install Button */}
              <InstallButton app={app} />
            </div>
          </div>
        </section>

        {/* ================= RATINGS ================= */}
        <section className="border-b border-gray-300 py-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Ratings</h2>

          <div className="space-y-4">
            {app.ratings
              .slice()
              .reverse()
              .map((rating) => {
                const maxCount = Math.max(...app.ratings.map((item) => item.count));

                const percentage = (rating.count / maxCount) * 100;

                return (
                  <div key={rating.name} className="flex items-center gap-3">
                    {/* Star Label */}
                    <span className="w-12 shrink-0 text-sm text-slate-500">{rating.name}</span>

                    {/* Rating Bar */}
                    <div className="h-6 flex-1 overflow-hidden bg-gray-200">
                      <div
                        className="h-full bg-purple-500 transition-all duration-500"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    {/* Rating Count */}
                    <span className="w-20 shrink-0 text-right text-sm font-medium text-slate-500">
                      {rating.count.toLocaleString()}
                    </span>
                  </div>
                );
              })}
          </div>
        </section>

        {/* ================= DESCRIPTION ================= */}
        <section className="py-8">
          <h2 className="mb-5 text-xl font-bold text-slate-900">Description</h2>

          <div className="rounded-md border border-dashed border-purple-400 bg-white p-4">
            <p className="whitespace-pre-line text-base leading-7 text-slate-500">
              {app.description}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AppDetails;
