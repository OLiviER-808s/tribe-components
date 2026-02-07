import { Ref } from 'vue';
import { ToastMessage, ToastMessageInput } from '../types/toast';
export declare const useToast: () => {
    initializeToast: () => void;
    toastMessages: Ref<ToastMessage[], ToastMessage[]>;
    addToast: (message: ToastMessageInput) => number;
    closeToast: (uuid: string) => ToastMessage[];
};
