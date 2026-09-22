'use client';

import InstallationCard from '@/components/InstallationCard/InstallationCard';
import { AppContext } from '@/context/AppProvider';
import { TAppsTypes } from '@/Types/Types';
import { useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

type SortOrder = 'asc' | 'desc';

export interface IAppContext {
  installed: TAppsTypes[];
  uninstallApp: (id: number) => void;
}

const InstallationPage = () => {
  const { installed, uninstallApp } = useContext(AppContext);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedApps = useMemo(
    () =>
      [...installed].sort((a, b) =>
        sortOrder === 'asc' ? a.size - b.size : b.size - a.size,
      ),
    [installed, sortOrder],
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ========================================
          HEADER SECTION
      ======================================== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-600" />
              Your App Collection
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Your Installed{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Apps
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Manage all your installed applications in one place.
              Keep track of your apps and organize your personal collection
              with ease.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        
        {/* ========================================
            TOOLBAR
        ======================================== */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* App Count */}
            <div>
              <p className="text-sm font-medium text-slate-500">
                Your Library
              </p>

              <div className="mt-1 flex items-center gap-2">
                {/* Count Badge */}
                <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-indigo-600 px-2.5 text-sm font-bold text-white shadow-sm">
                  {installed.length}
                </span>

                <span className="text-lg font-bold text-slate-900">
                  {installed.length === 1 ? 'App' : 'Apps'}
                </span>

                <span className="text-sm font-medium text-slate-400">
                  installed
                </span>
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="sort"
                className="hidden text-sm font-semibold text-slate-600 sm:block"
              >
                Sort by
              </label>

              <div className="relative">
                <select
                  id="sort"
                  value={sortOrder}
                  onChange={(e) =>
                    setSortOrder(e.target.value as SortOrder)
                  }
                  className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 outline-none transition duration-200 hover:border-purple-300 hover:bg-white focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100 sm:w-56"
                >
                  <option value="asc">
                    Size: Low to High
                  </option>

                  <option value="desc">
                    Size: High to Low
                  </option>
                </select>

                {/* Dropdown Arrow */}
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
            INSTALLED APPS
        ======================================== */}
        {sortedApps.length === 0 ? (
          /* ======================================
             EMPTY STATE
          ====================================== */
          <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-purple-100/50 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-indigo-100/40 blur-3xl" />

            <div className="relative">
              {/* Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 text-4xl shadow-sm">
                📭
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                No apps installed yet
              </h3>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                Your installed applications will appear here.
                Browse the store and install your first app to start
                building your personal collection.
              </p>

              {/* Status */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                Your library is empty
              </div>
            </div>
          </div>
        ) : (
          /* ======================================
             APP LIST
          ====================================== */
          <div className="space-y-3">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="group rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-lg"
              >
                <InstallationCard
                  app={app}
                  onUninstall={() => {
                    uninstallApp(app.id);

                    toast.success(
                      `${app.title} Uninstalled Successfully`,
                    );
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* ========================================
            BOTTOM INFO
        ======================================== */}
        {installed.length > 0 && (
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-400 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {installed.length}{' '}
              {installed.length === 1 ? 'application' : 'applications'}{' '}
              currently installed
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default InstallationPage;

