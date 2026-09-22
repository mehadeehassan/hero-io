const FactsPage = () => {
  return (
    <section className="relative m-0 bg-linear-to-br from-purple-700 to-purple-400 px-4 py-16 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-6xl text-center">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Trusted by Millions, Built for You
        </h1>

        {/* Facts */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Total Downloads */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15">
            <p className="text-sm font-medium uppercase tracking-wide text-purple-100">
              Total Downloads
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              29.6M
            </h2>

            <p className="mt-3 text-sm text-purple-100">
              21% more than last month
            </p>
          </div>

          {/* Total Reviews */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15">
            <p className="text-sm font-medium uppercase tracking-wide text-purple-100">
              Total Reviews
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              906K
            </h2>

            <p className="mt-3 text-sm text-purple-100">
              46% more than last month
            </p>
          </div>

          {/* Active Apps */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15">
            <p className="text-sm font-medium uppercase tracking-wide text-purple-100">
              Active Apps
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              132+
            </h2>

            <p className="mt-3 text-sm text-purple-100">
              31 more will Launch
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FactsPage;