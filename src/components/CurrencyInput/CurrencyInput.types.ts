export interface CurrencyInputProps {
    /**
     * The currency symbol to display
     * @default '$'
     */
    currencySymbol?: string
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: string
    /**
     * The size of the input
     */
    size?: string
    /**
     * The color theme
     * @default 'base'
     */
    color?: string
    /**
     * The label text
     */
    label?: string
    /**
     * Error message to display
     */
    error?: string
}

export interface CurrencyInputSlots {}

export interface CurrencyInputEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: number | string]
}
