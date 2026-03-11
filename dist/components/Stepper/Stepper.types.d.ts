import { TribeIconType } from '../../types/icon';
export interface Step {
    /**
     * The unique value for this step
     */
    value: string | number;
    /**
     * The display label for this step
     */
    label: string;
    /**
     * Optional icon to display for this step. Accepts a FontAwesome IconDefinition or any Vue component.
     */
    icon?: TribeIconType;
}
export interface StepperProps {
    /**
     * Array of steps to display
     */
    steps: Step[];
    /**
     * The color theme
     * @default 'primary'
     */
    color?: string;
    /**
     * The visual style variant
     * @default 'classic'
     */
    variant?: 'classic' | 'minimalist';
    /**
     * Whether users can click to move forward
     */
    canMoveForwards?: boolean;
    /**
     * Whether users can click to move backward
     */
    canMoveBackwards?: boolean;
}
export interface StepperSlots {
}
export interface StepperEmits {
    /**
     * Emitted when the selected step changes
     */
    'update:modelValue': [value: string | number];
}
