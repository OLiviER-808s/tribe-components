import type { FileInput } from '../../types/file'

export interface AttachmentListProps {
    /**
     * The size of the attachment thumbnails
     * @default 'md'
     */
    size?: 'lg' | 'md'
}

export interface AttachmentListSlots {
    /**
     * Additional items to display before the file list
     */
    'additional-items-before'?: () => any
    /**
     * Additional items to display after the file list
     */
    'additional-items-after'?: () => any
}

export interface AttachmentListEmits {
    /**
     * Emitted when the files array changes
     */
    'update:files': [value: FileInput[]]
    /**
     * Emitted when the selected index changes
     */
    'update:selectedIdx': [value: number]
}
