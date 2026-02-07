export interface BadgeProps {
    /**
     * The content to display in the badge
     */
    content?: string | number | null;
    /**
     * The background color
     * @default 'primary'
     */
    color?: string;
    /**
     * The text size
     * @default 'xs'
     */
    size?: string;
    /**
     * Additional CSS classes
     */
    styles?: string;
}
export interface BadgeSlots {
    /**
     * Default slot for badge content
     */
    default?: () => any;
}
export interface BadgeEmits {
}
