import Image from 'next/image';
import { BsGooglePlay } from 'react-icons/bs';
import { FaAppStoreIos } from 'react-icons/fa';

import heroImage from '../../assets/hero.png';

const HeroPage = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-16 pb-0 text-center sm:px-6 md:pt-20 lg:px-8">

        {/* Small Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600" />
          Build. Innovate. Impact.
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          We Build
          <br />
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          At <span className="font-semibold text-gray-900">HERO.IO</span>,
          we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>

        {/* Store Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          {/* Google Play */}
          <button className="group flex items-center justify-center gap-3 rounded-xl bg-gray-900 px-6 py-3.5 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl">
            <BsGooglePlay className="text-2xl text-white transition-transform duration-300 group-hover:scale-110" />

            <div className="text-left">
              <p className="text-[10px] leading-none text-gray-400">
                GET IT ON
              </p>

              <p className="mt-1 text-sm font-semibold">
                Google Play
              </p>
            </div>
          </button>

          {/* App Store */}
          <button className="group flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-gray-900 shadow-md transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
            <FaAppStoreIos className="text-2xl transition-transform duration-300 group-hover:scale-110" />

            <div className="text-left">
              <p className="text-[10px] leading-none text-gray-500">
                DOWNLOAD ON THE
              </p>

              <p className="mt-1 text-sm font-semibold">
                App Store
              </p>
            </div>
          </button>

        </div>

        {/* Hero Image */}
        <div className="relative mt-12 flex w-full items-center justify-center sm:mt-16">
          
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl sm:h-96 sm:w-96" />

          {/* Image */}
          <div className="relative z-10 w-[55vw] max-w-sm animate-[float_5s_ease-in-out_infinite] sm:max-w-md lg:max-w-lg">
            <Image
              src={heroImage}
              alt="HERO.IO App"
              width={500}
              height={500}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroPage;