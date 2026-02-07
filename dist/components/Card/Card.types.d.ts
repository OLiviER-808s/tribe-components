export interface CardProps {
    /**
     * Additional CSS classes
     * @default ''
     */
    styles?: string;
    /**
     * Padding CSS class
     * @default 'p-4'
     */
    padding?: string;
    /**
     * Whether to remove shadow
     * @default false
     */
    flat?: boolean;
    /**
     * Whether to remove rounded corners
     * @default false
     */
    boxed?: boolean;
    /**
     * Border CSS classes
     * @default 'border-border dark:border-none'
     */
    border?: string;
}
export interface CardSlots {
    /**
     * Default slot for card content
     */
    default?: () => any;
}
export interface CardEmits {
}
