'use client';

import { TAppsTypes } from "@/Types/Types";
import { createContext, ReactNode, useState } from "react";

interface IAppContext {
    installed: TAppsTypes[],
    setInstalled: React.Dispatch<React.SetStateAction<TAppsTypes[]>>,
    uninstallApp: (id: number) => void
}

export const AppContext = createContext<IAppContext>(
    {
        installed: [],
        setInstalled: () => {},
        uninstallApp: () => {}
    }
);

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [installed, setInstalled] = useState<TAppsTypes[]>([]);

    const uninstallApp = (id: number) => {
        setInstalled((prev) => prev.filter((app) => app.id !== id));
    };

    const sharedState = {
        installed,
        setInstalled,
        uninstallApp
    }
  return (
    <AppContext.Provider value={sharedState}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider