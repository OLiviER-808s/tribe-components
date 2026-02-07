export interface RadioProps {
    /**
     * The value of this radio option
     */
    value?: string | boolean
    /**
     * The label text
     */
    label?: string
    /**
     * The name attribute for grouping radios
     */
    name?: string
    /**
     * The current selected value for comparison
     */
    modelValue?: string
}

export interface RadioSlots {}

export interface RadioEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: string | boolean]
    /**
     * Emitted when the radio is selected
     */
    select: [e: Event]
}
