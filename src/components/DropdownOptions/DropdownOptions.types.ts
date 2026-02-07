export interface DropdownOptionsProps {
    /**
     * The container element for positioning
     */
    container?: HTMLElement | null
    /**
     * Array of options to display
     */
    options?: any[]
    /**
     * The property name to use as the label
     */
    optionLabel?: string
    /**
     * The property name to use for tracking
     */
    trackBy?: string
    /**
     * The property name for option descriptions
     */
    optionDescription?: string
    /**
     * Width CSS class
     * @default 'w-full'
     */
    width?: string
    /**
     * Dropdown alignment direction
     * @default 'left'
     */
    direction?: string
    /**
     * Whether the dropdown is open
     */
    open?: boolean
    /**
     * Whether empty selection is accepted
     */
    acceptsEmptySelection?: boolean
}

export interface DropdownOptionsSlots {
    /**
     * Slot for custom option rendering
     */
    option?: (props: { option: any }) => any
}

export interface DropdownOptionsEmits {
    /**
     * Emitted when an option is selected
     */
    select: [option?: any]
}
