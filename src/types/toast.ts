export interface ToastMessage {
    uuid: string
    title: string
    content?: string
    color?: string
    duration?: number
    opacity?: number
}

export type ToastMessageInput = Omit<ToastMessage, 'uuid'>