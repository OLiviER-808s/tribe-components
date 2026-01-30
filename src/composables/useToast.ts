import {inject, provide, Ref, ref} from "vue";
import {v4 as uuidv4} from "uuid";
import { ToastMessage, ToastMessageInput } from "@/types/toast";

export const useToast = () => {
    const toastMessages = inject<Ref<ToastMessage[]>>('toastMessages', ref([]))

    const initializeToast = () => provide('toastMessages', ref([]))

    const addToast = (message: ToastMessageInput) => toastMessages.value.push({ ...message, uuid: uuidv4() })
    const closeToast = (uuid: string) => toastMessages.value = toastMessages.value.filter(toast => toast.uuid !== uuid)

    return {
        initializeToast,
        toastMessages,
        addToast,
        closeToast,
    }
}
