import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { createAppConfigStore, IAppConfigState } from './store';

type AppConfigStoreType = ReturnType<typeof createAppConfigStore>;
const AppConfigContext = createContext<AppConfigStoreType | null>(null);

type AppConfigProviderProps = {
    children: React.ReactNode;
};
export const AppConfigProvider = ({ children }: AppConfigProviderProps) => {
    const storeRef = useRef<AppConfigStoreType | null>(null);

    if (!storeRef.current) {
        storeRef.current = createAppConfigStore();
    }

    return <AppConfigContext.Provider value={storeRef.current}>{children}</AppConfigContext.Provider>;
};

export function useAppConfigContextStore<T>(selector: (state: IAppConfigState) => T): T {
    const store = useContext(AppConfigContext);

    if (!store) {
        console.log('Outside App Config Context');
        throw new Error('Missing AppConfigContext.Provider');
    }

    return useStore(store, selector);
}
