import { FileInput } from '../../types/file';
export interface DragAndDropFilesProps {
    /**
     * The label text
     */
    label?: string;
    /**
     * The drop zone text
     * @default 'Drag and drop files here, or click to select files'
     */
    dropText?: string;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Whether to show the upload icon
     */
    withIcon?: boolean;
    /**
     * Maximum number of files allowed
     */
    limit?: number;
    /**
     * Accepted file types (e.g., 'image/*')
     */
    accept?: string;
    /**
     * Whether to show the file list
     */
    showFileList?: boolean;
    /**
     * Whether the component is disabled
     */
    disabled?: boolean;
}
export interface DragAndDropFilesSlots {
}
export interface DragAndDropFilesEmits {
    /**
     * Emitted when the files array changes
     */
    'update:modelValue': [value: File[] | FileInput[]];
}
