export interface ModalProps {
    /**
     * CSS classes for the modal content container
     * @default 'w-full max-w-xl p-2'
     */
    contentClass?: string
    /**
     * Whether clicking outside closes the modal
     * @default true
     */
    clickToClose?: boolean
    /**
     * Whether pressing ESC closes the modal
     * @default true
     */
    escToClose?: boolean
}

export interface ModalSlots {
    /**
     * Default slot for modal content
     */
    default?: () => any
}

export interface ModalEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean]
}
