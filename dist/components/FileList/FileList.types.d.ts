import { FileInput } from '../../types/file';
export interface FileListProps {
    /**
     * Array of files to display
     */
    files?: File[] | FileInput[];
    /**
     * Whether to show the download button
     */
    showDownload?: boolean;
    /**
     * Whether to show the delete button
     */
    showDelete?: boolean;
}
export interface FileListSlots {
}
export interface FileListEmits {
    /**
     * Emitted when the download button is clicked
     */
    download: [file: File | FileInput];
    /**
     * Emitted when the delete button is clicked
     */
    delete: [file: File | FileInput];
}
