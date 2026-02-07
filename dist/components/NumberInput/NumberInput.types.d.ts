import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface NumberInputProps {
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
     * Additional CSS classes
     */
    styles?: string;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Minimum value
     * @default 0
     */
    min?: number;
    /**
     * Maximum value
     * @default 10000
     */
    max?: number;
    /**
     * The visual style variant
     * @default 'filled'
     */
    variant?: string;
    /**
     * The size of the input
     */
    size?: string;
    /**
     * The color theme
     * @default 'base'
     */
    color?: string;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
}
export interface NumberInputSlots {
}
export interface NumberInputEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: number | string];
}
