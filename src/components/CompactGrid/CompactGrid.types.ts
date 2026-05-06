export interface ResponsiveCols {
    /**
     * Default number of columns
     */
    default?: number
    /**
     * Number of columns at sm breakpoint (>= 640px)
     */
    sm?: number
    /**
     * Number of columns at md breakpoint (>= 768px)
     */
    md?: number
    /**
     * Number of columns at lg breakpoint (>= 1024px)
     */
    lg?: number
    /**
     * Number of columns at xl breakpoint (>= 1280px)
     */
    xl?: number
    /**
     * Number of columns at 2xl breakpoint (>= 1536px)
     */
    '2xl'?: number
}

export interface CompactGridProps {
    /**
     * Number of columns, either fixed or per-breakpoint
     * @default { default: 1, sm: 2, lg: 3 }
     */
    cols?: number | ResponsiveCols
    /**
     * Gap between items, in pixels (number) or any CSS length (string)
     * @default 16
     */
    gap?: number | string
}

export interface CompactGridSlots {
    /**
     * Default slot for grid items
     */
    default?: () => any
}

export interface CompactGridEmits {}
