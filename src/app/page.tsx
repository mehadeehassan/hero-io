import HeroPage from '@/components/Banner/HeroSection';
import FactsPage from '@/components/Facts/Facts';
import TrendingApps from '@/components/Trending/Trending';

const Home = () => {
  return (
    <div className="m-0 p-0">
      <HeroPage />
      <FactsPage />
      <TrendingApps />
    </div>
  );
};

export default Home;