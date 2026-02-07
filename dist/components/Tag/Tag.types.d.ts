export interface TagProps {
    /**
     * The background color
     * @default 'secondary'
     */
    color?: string;
    /**
     * The text size
     * @default 'md'
     */
    size?: string;
    /**
     * Additional CSS classes
     * @default ''
     */
    styles?: string;
    /**
     * Border radius
     * @default 'full'
     */
    rounded?: string;
}
export interface TagSlots {
    /**
     * Default slot for tag content
     */
    default?: () => any;
}
export interface TagEmits {
}
