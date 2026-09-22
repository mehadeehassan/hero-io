import { getAllApps } from '@/lib/apps';
import AppCard from '../Apps/AppsCard';
import Button from '../ui/ShowMoreButton';

const TrendingApps = async () => {
  const data = await getAllApps();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Trending Apps
        </h1>

        <p className="mt-3 text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Show More */}
      <div className="mt-10 flex justify-center">
        <Button/>
      </div>

    </section>
  );
};

export default TrendingApps;

