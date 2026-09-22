'use client'

import { AppContext } from "@/context/AppProvider";
import { TAppsTypes } from "@/Types/Types";
import { useContext } from "react";
import { toast } from "react-toastify";

interface InstallButtonProps {
    app: TAppsTypes
}
const InstallButton = ({ app }: InstallButtonProps) => {
  const { installed, setInstalled } = useContext(AppContext);

  const isInstalled = installed.some((item) => item.id === app.id);

  const handleInstall = () => {
    if (isInstalled) {
      toast.info(`${app.title} Already Installed`);
      return;
    }
    setInstalled([...installed, app]);
    toast.success(`${app.title} Installed Successfully`);
  }

  return (
    <button
      onClick={handleInstall}
      type="button"
      disabled={isInstalled}
      className="mt-6 rounded-md bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:active:scale-100"
    >
      {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
    </button>
  );
};

export default InstallButton;