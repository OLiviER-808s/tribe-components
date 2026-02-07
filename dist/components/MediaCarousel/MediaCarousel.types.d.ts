import { FormattedFile } from '../../types/file';
export interface MediaCarouselProps {
    /**
     * Array of formatted files to display in the carousel
     */
    files?: FormattedFile[];
    /**
     * Maximum height CSS class for media items
     * @default 'max-h-72'
     */
    maxMediaHeight?: string;
}
export interface MediaCarouselSlots {
}
export interface MediaCarouselEmits {
    /**
     * Emitted when the selected index changes
     */
    'update:selectedIdx': [value: number];
}
