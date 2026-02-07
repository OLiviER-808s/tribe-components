import { FileInput } from '../../types/file';
export interface MediaInputProps {
    /**
     * The label text
     */
    label?: string;
    /**
     * The placeholder text for the drop zone
     */
    placeholder?: string;
    /**
     * Error message to display
     */
    error?: string;
}
export interface MediaInputSlots {
}
export interface MediaInputEmits {
    /**
     * Emitted when the files array changes
     */
    'update:modelValue': [value: FileInput[]];
}
