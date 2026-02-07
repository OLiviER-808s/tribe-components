export interface FileButtonProps {
    /**
     * Whether to allow multiple file selection
     * @default true
     */
    multiple?: boolean;
    /**
     * Whether the file button is disabled
     */
    disabled?: boolean;
    /**
     * Accepted file types (e.g., 'image/*')
     */
    accept?: string;
}
export interface FileButtonSlots {
    /**
     * Default slot for button content
     */
    default?: () => any;
}
export interface FileButtonEmits {
    /**
     * Emitted when files are selected
     */
    change: [event: Event];
}
