import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface ToggleProps {
    /**
     * The color when active
     * @default 'secondary'
     */
    activeColor?: string;
    /**
     * The initial value (deprecated, use v-model instead)
     * @default false
     */
    value?: boolean;
    /**
     * Icon to display inside the toggle circle
     */
    icon?: IconDefinition;
}
export interface ToggleSlots {
}
export interface ToggleEmits {
    /**
     * Emitted when the modelValue changes
     */
    'update:modelValue': [value: boolean];
    /**
     * Emitted when the toggle is clicked
     */
    toggle: [value: boolean];
}
