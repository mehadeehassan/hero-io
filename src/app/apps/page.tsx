import AppCard from '@/components/Apps/AppsCard';
import { getAllApps } from '@/lib/apps';

const Apps = async () => {
  const data = await getAllApps();

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero / Header Section */}
      <section className="bg-linear-to-br from-purple-700 to-purple-400 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-200">
            HERO.IO Applications
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Our All Applications
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-purple-100 sm:text-base">
            Explore all apps on the market developed by us.
            We code for millions and build products that make life easier.
          </p>

        </div>
      </section>

      {/* Apps Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Result Count */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              All Applications
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Browse our complete collection of applications.
            </p>
          </div>

          <div className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            {data.length} Apps Found
          </div>

        </div>

        {/* Apps Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((app) => (
              <AppCard
                key={app.id}
                app={app}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                No Apps Found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                There are no applications available right now.
              </p>
            </div>
          </div>
        )}

      </section>
    </main>
  );
};

export default Apps;
