import type { IconSize, TribeIconType } from '../../types/icon'

export interface MultiselectProps {
    /**
     * Array of options to display
     */
    options?: any[]
    /**
     * The label text
     */
    label?: string
    /**
     * The property name to use as the option label
     */
    optionLabel?: string
    /**
     * The property name to use for tracking
     */
    trackBy?: string
    /**
     * Whether the input is searchable
     */
    searchable?: boolean
    /**
     * Icon to display in the input
     */
    icon?: TribeIconType
    /**
     * Error message to display
     */
    error?: string | boolean
    /**
     * The placeholder text
     * @default 'Select an option...'
     */
    placeholder?: string
    /**
     * The size of the input
     */
    size?: IconSize
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: string
    /**
     * The color theme
     * @default 'base'
     */
    color?: string
    /**
     * Function to format the selected result
     * @default (option: any) => option
     */
    formatResult?: (option: any) => any
    /**
     * Additional CSS classes
     */
    styles?: string
    /**
     * Additional CSS classes for the textbox
     */
    textboxStyles?: string
    /**
     * Whether empty selection is accepted
     */
    acceptsEmptySelection?: boolean
    /**
     * Whether duplicate selections are allowed
     */
    acceptsDuplicates?: boolean
}

export interface MultiselectSlots {
    /**
     * Slot for rendering selected tags
     */
    selectedTag?: (props: { option: any; deselect: () => void }) => any
    /**
     * Slot for custom option rendering
     */
    option?: (props: { option: any }) => any
}

export interface MultiselectEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: any[]]
    /**
     * Emitted when the search query changes
     */
    'update:searchQuery': [value: string]
    /**
     * Emitted when the input element changes
     */
    'update:input': [value: HTMLInputElement | null]
    /**
     * Emitted when an option is selected
     */
    select: [option: any]
    /**
     * Emitted when the input gains focus
     */
    focus: [e: Event]
    /**
     * Emitted when the input loses focus
     */
    blur: [e: Event]
}
