import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconSize } from '../../types/icon';
export interface TextboxProps {
    /**
     * The name attribute
     */
    name?: string;
    /**
     * The current value (controlled)
     */
    value?: string;
    /**
     * The input type
     * @default 'text'
     */
    type?: string;
    /**
     * Whether the input is disabled
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
     * The visual style variant
     * @default 'filled'
     */
    variant?: string;
    /**
     * The size of the input
     */
    size?: IconSize;
    /**
     * The color theme
     * @default 'base'
     */
    color?: string;
    /**
     * Additional CSS classes
     */
    styles?: string;
    /**
     * The label text
     */
    label?: string;
    /**
     * Icon to display in the input
     */
    icon?: IconDefinition;
    /**
     * The placeholder text
     */
    placeholder?: string;
    /**
     * Additional CSS classes for the label
     * @default 'font-medium'
     */
    labelStyles?: string;
}
export interface TextboxSlots {
    /**
     * Slot for content on the left side inside the input
     */
    'left-section'?: () => any;
    /**
     * Slot for content on the right side inside the input
     */
    'right-section'?: () => any;
}
export interface TextboxEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: string];
    /**
     * Emitted when the input element reference changes
     */
    'update:input': [value: HTMLInputElement | null];
    /**
     * Emitted on input
     */
    input: [e: Event];
    /**
     * Emitted when the input gains focus
     */
    focus: [e: Event];
    /**
     * Emitted when the input loses focus
     */
    blur: [e: Event];
}
