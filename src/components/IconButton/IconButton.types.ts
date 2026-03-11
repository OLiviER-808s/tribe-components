import type { TribeIconType, IconSize } from '../../types/icon'

export interface IconButtonProps {
    /**
     * The icon to display. Accepts a FontAwesome IconDefinition or any Vue component.
     */
    icon: TribeIconType
    /**
     * The size of the icon
     */
    size?: IconSize
    /**
     * The color theme of the button
     * @default 'primary'
     */
    color?: string
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'dashed'
    /**
     * Additional CSS classes
     * @default ''
     */
    styles?: string
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean
    /**
     * The HTML button type
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset'
    /**
     * URL to open when clicked
     * @default ''
     */
    href?: string
    /**
     * Whether to show hover effects
     * @default true
     */
    hoverEffects?: boolean
    /**
     * Custom text color
     * @default ''
     */
    textColor?: string
}

export interface IconButtonSlots {}

export interface IconButtonEmits {
    /**
     * Emitted when the button is clicked
     */
    click: [e: Event]
}
