import {inject, provide, ref} from "vue";
import {v4 as uuidv4} from "uuid";

export const useToast = () => {
    const toastMessages = inject('toastMessages', ref([]))

    const initializeToast = () => provide('toastMessages', ref([]))

    const addToast = (message) => toastMessages.value.push({ ...message, uuid: uuidv4() })
    const closeToast = (uuid) => toastMessages.value = toastMessages.value.filter(toast => toast.uuid !== uuid)

    return {
        initializeToast,
        toastMessages,
        addToast,
        closeToast,
    }
}
