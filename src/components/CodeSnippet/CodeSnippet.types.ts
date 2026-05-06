import type { TribeIconType } from '../../types/icon'

export interface CodeSnippetProps {
    /**
     * The code snippet text to display
     */
    snippet?: string
    /**
     * Whether to show the copy button
     */
    allowCopy?: boolean
    /**
     * Additional CSS classes
     */
    styles?: string
    /**
     * The icon component used for the copy button
     * @default CopyIcon
     */
    copyIcon?: TribeIconType
}

export interface CodeSnippetSlots {}

export interface CodeSnippetEmits {}
