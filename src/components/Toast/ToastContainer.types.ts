export interface ToastContainerProps {
    /**
     * The name of the container to filter toast messages
     */
    containerName?: string
    /**
     * Position CSS classes for the toast container
     * @default 'top-0 right-0'
     */
    position?: string
}

export interface ToastContainerSlots {
    /**
     * Default slot for page content
     */
    default?: () => any
    /**
     * Slot for custom toast message rendering
     */
    'toast-content'?: (props: { message: any }) => any
}

export interface ToastContainerEmits {}
