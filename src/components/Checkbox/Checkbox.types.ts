export interface CheckboxProps {
    /**
     * The name attribute for the checkbox
     */
    name?: string
    /**
     * Error message to display
     */
    error?: string
}

export interface CheckboxSlots {
    /**
     * Default slot for checkbox label
     */
    default?: () => any
}

export interface CheckboxEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean]
    /**
     * Emitted when the checkbox is toggled
     */
    toggle: [value: boolean]
}
