export interface ButtonProps {
    /**
     * The color theme of the button
     * @default 'primary'
     */
    color?: string;
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'dashed';
    /**
     * Additional CSS classes
     * @default ''
     */
    styles?: string;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The HTML button type
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * URL to open when clicked
     * @default ''
     */
    href?: string;
    /**
     * Whether to show hover effects
     * @default true
     */
    hoverEffects?: boolean;
    /**
     * Custom text color
     * @default ''
     */
    textColor?: string;
}
export interface ButtonSlots {
    /**
     * Default slot for button content
     */
    default?: () => any;
}
export interface ButtonEmits {
    /**
     * Emitted when the button is clicked
     */
    click: [e: Event];
}
