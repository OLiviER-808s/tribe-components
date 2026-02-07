export interface ParagraphProps {
    /**
     * The text content to display
     */
    text?: string;
    /**
     * Additional CSS classes
     */
    styles?: string;
    /**
     * Character limit for truncation
     */
    limit?: number;
    /**
     * Whether to preserve whitespace and line breaks
     */
    includeWhitespace?: boolean;
}
export interface ParagraphSlots {
}
export interface ParagraphEmits {
}
