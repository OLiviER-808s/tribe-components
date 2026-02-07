export interface Cell {
    /**
     * The content to display in the cell
     */
    content?: string;
    /**
     * Width of the cell
     */
    width?: number | string;
    /**
     * Height of the cell
     */
    height?: number | string;
    /**
     * Text alignment
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Additional CSS classes
     */
    class?: string;
    /**
     * Number of columns to span
     */
    colspan?: number;
    /**
     * Number of rows to span
     */
    rowspan?: number;
}
export interface Row {
    /**
     * Array of cells in this row
     */
    cells?: Cell[];
    /**
     * Additional CSS classes
     */
    class?: string;
    /**
     * Click handler for this row
     */
    onClick?: (row: Row, index: number) => void;
}
export interface TableCardProps {
    /**
     * Array of rows or cell arrays
     */
    rows: Row[] | Cell[][];
    /**
     * CSS classes for the header row
     */
    headerClasses?: string;
    /**
     * Click handler for all rows
     */
    onRowClick?: (row: Row | Cell[], index: number) => void;
}
export interface TableCardSlots {
    /**
     * Dynamic slots for each cell (e.g., A1, B2, C3)
     */
    [key: string]: (() => any) | undefined;
}
export interface TableCardEmits {
}
