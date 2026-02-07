export interface HoverBoxProps {}

export interface HoverBoxSlots {
    /**
     * Default slot for content
     */
    default?: () => any
}

export interface HoverBoxEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean]
}
