import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const initialState = {
    linkedAccountId: '',
    email: '',
    name: '',
    picUrl: '',
    userId: '',
    role: '',
};

export const useUserDataStore = create((set, get) => ({
    ...initialState,
    updateLinkedAccountId: (acc) =>
        set((state) => ({ ...state, linkedAccountId: acc })),
    updateUserData: (data) => set((state) => ({ ...state, ...data })),
    resetUserData: () => set(() => initialState),
    hasUserData: () => {
        return (
            get().linkedAccountId !== initialState.linkedAccountId &&
            get().email !== initialState.email &&
            get().name !== initialState.name &&
            get().picUrl !== initialState.picUrl &&
            get().userId !== initialState.userId &&
            get().role !== initialState.role
        );
    },
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useUserDataStore);
}
