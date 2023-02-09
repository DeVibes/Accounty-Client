import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

export const useFeedbackStore = create((set) => ({
    isOpen: false,
    msg: '',
    openFeedback: (msg) =>
        set({
            isOpen: true,
            msg: msg,
        }),
    closeFeedback: () =>
        set({
            isOpen: false,
            msg: '',
        }),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useFeedbackStore);
}
