import Image from 'next/image';
import { BiDownload } from 'react-icons/bi';
import { SiTarget } from 'react-icons/si';


interface App {
  id: number;
  title: string;
  image: string;
  size: number;
  downloads: string;
  ratingAvg: number;
}

interface AppCardProps {
  app: App;
  onUninstall: () => void;
}

const InstallationCard = ({ app, onUninstall }: AppCardProps) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
          <Image src={app.image} alt={app.title} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{app.title}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-1 text-green-600">
              <BiDownload size={14} /> {app.downloads}
            </span>
            <span className="flex items-center gap-1 text-orange-500">
              <SiTarget size={14} fill="currentColor" /> {app.ratingAvg}
            </span>
            <span>{app.size} MB</span>
          </div>
        </div>
      </div>
      <button
        onClick={onUninstall}
        className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallationCard;