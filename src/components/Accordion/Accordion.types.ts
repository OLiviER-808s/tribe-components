export interface AccordionProps {
    /**
     * The title displayed in the accordion header
     */
    title?: string
    /**
     * The visual style variant
     * @default 'card'
     */
    variant?: 'card' | 'minimal'
}

export interface AccordionSlots {
    /**
     * Default slot for accordion content
     */
    default?: () => any
}

export interface AccordionEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean]
}
