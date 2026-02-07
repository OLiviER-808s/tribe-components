export interface ClickableTagProps {
    /**
     * The color theme
     * @default 'secondary'
     */
    color?: string;
    /**
     * The text size
     * @default 'md'
     */
    size?: string;
    /**
     * Border radius
     * @default 'full'
     */
    rounded?: string;
    /**
     * Additional CSS classes
     * @default ''
     */
    styles?: string;
}
export interface ClickableTagSlots {
    /**
     * Default slot for tag content
     */
    default?: () => any;
}
export interface ClickableTagEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean];
    /**
     * Emitted when the tag is selected
     */
    select: [];
}
