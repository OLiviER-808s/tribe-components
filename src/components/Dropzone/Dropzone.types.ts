export interface DropzoneProps {}

export interface DropzoneSlots {
    /**
     * Default slot with isDragOver binding
     */
    default?: (props: { isDragOver: boolean }) => any
}

export interface DropzoneEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean]
    /**
     * Emitted when files are dropped
     */
    drop: [event: DragEvent]
}
