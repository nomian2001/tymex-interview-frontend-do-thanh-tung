import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface IAppConfigState {
    isDarkMode: boolean;
}

const initialValue = {
    isDarkMode: true,
};

const STORAGE_NAME = 'app-config';

export const createAppConfigStore = () => {
    return create<IAppConfigState>()(
        persist(
            immer((set, get) => ({
                ...(initialValue as IAppConfigState),
            })),
            {
                name: STORAGE_NAME,
            }
        )
    );
};
