export interface TextareaProps {
    /**
     * The name attribute
     */
    name?: string;
    /**
     * Whether the textarea is disabled
     */
    disabled?: boolean;
    /**
     * Error message to display
     */
    error?: string | boolean;
    /**
     * Success message to display
     */
    success?: string | boolean;
    /**
     * The label text
     */
    label?: string;
    /**
     * The placeholder text
     */
    placeholder?: string;
    /**
     * The current value (controlled)
     */
    modelValue?: string;
    /**
     * Maximum character length
     */
    maxlength?: number;
    /**
     * Additional CSS classes
     */
    styles?: string;
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: string;
    /**
     * The color theme
     * @default 'base'
     */
    color?: string;
    /**
     * Number of visible rows
     * @default 4
     */
    rows?: number;
    /**
     * Whether to enable field-sizing: content
     * @default false
     */
    fieldSizingContent?: boolean;
}
export interface TextareaSlots {
}
export interface TextareaEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: string];
    /**
     * Emitted when the input element reference changes
     */
    'update:input': [value: HTMLTextAreaElement | null];
    /**
     * Emitted when the textarea gains focus
     */
    focus: [e: Event];
    /**
     * Emitted when the textarea loses focus
     */
    blur: [e: Event];
    /**
     * Emitted on key press
     */
    keyPress: [e: KeyboardEvent];
    /**
     * Emitted on input
     */
    input: [e: Event];
}
