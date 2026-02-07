export interface TooltipProps {
    /**
     * The text to display in the tooltip
     */
    text: string
    /**
     * The position of the tooltip relative to the trigger
     * @default 'top'
     */
    position?: string
}

export interface TooltipSlots {
    /**
     * Default slot for the trigger element
     */
    default?: () => any
    /**
     * Slot for custom tooltip content
     */
    'tooltip-content'?: () => any
}

export interface TooltipEmits {}
