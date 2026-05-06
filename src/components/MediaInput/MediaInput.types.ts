import type { FileInput } from '../../types/file'
import type { TribeIconType } from '../../types/icon'

export interface MediaInputProps {
    /**
     * The label text
     */
    label?: string
    /**
     * The placeholder text for the drop zone
     */
    placeholder?: string
    /**
     * Error message to display
     */
    error?: string
    /**
     * Icon shown on the add-files button
     * @default PlusIcon
     */
    addIcon?: TribeIconType
}

export interface MediaInputSlots {}

export interface MediaInputEmits {
    /**
     * Emitted when the files array changes
     */
    'update:modelValue': [value: FileInput[]]
}
