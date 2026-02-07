import type { IconSize } from '../../types/icon'

export interface DatePickerProps {
    /**
     * Error message to display
     */
    error?: string
    /**
     * The label text
     * @default ''
     */
    label?: string
    /**
     * The placeholder text
     * @default ''
     */
    placeholder?: string
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: string
    /**
     * The size of the icon
     */
    size?: IconSize
    /**
     * The color theme
     * @default 'base'
     */
    color?: string
    /**
     * Whether to enable date range selection
     */
    range?: boolean
    /**
     * Maximum selectable date
     */
    maxDate?: Date
    /**
     * Minimum selectable date
     */
    minDate?: Date
    /**
     * Whether to include time picker
     */
    includeTime?: boolean
    /**
     * Whether the datepicker is disabled
     */
    disabled?: boolean
    /**
     * Additional CSS classes
     */
    styles?: string
}

export interface DatePickerSlots {}

export interface DatePickerEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: Date | Date[] | null]
}
