<script setup lang="ts">
interface Cell {
    content?: string
    width?: number | string
    height?: number | string
    align?: 'left' | 'center' | 'right'
    class?: string
    colspan?: number
    rowspan?: number
}

interface Row {
    cells?: Cell[]
    class?: string
    onClick?: (row: Row, index: number) => void
}

interface Props {
    rows: Row[] | Cell[][]
    headerClasses?: string
    onRowClick?: (row: Row | Cell[], index: number) => void
}

const props = defineProps<Props>()

const getCellStyles = (cell: Cell): { width?: string; height?: string } => ({
    width: cell.width ? (typeof cell.width === 'number' ? `${cell.width}px` : cell.width) : undefined,
    height: cell.height ? (typeof cell.height === 'number' ? `${cell.height}px` : cell.height) : undefined
})

const getCellClasses = (cell: Cell, ri: number, ci: number): any[] => {
    const row = props.rows[ri]
    const cells = Array.isArray(row) ? row : (row as Row).cells
    const cellsLength = cells?.length ?? 0

    return [
        `text-${cell.align ?? 'left'} p-2 border-border`,
        { 'border-r': ci !== cellsLength - 1 },
        cell.class
    ]
}

const getRowClasses = (row: Row | Cell[], ri: number): any[] => {
    const rowObj = Array.isArray(row) ? {} : (row as Row)

    return [
        rowObj.class ?? '',
        'border-border',
        { 'border-b': ri !== props.rows.length - 1 },
        { 'cursor-pointer hover:bg-muted/50': rowObj.onClick || props.onRowClick }
    ]
}

const handleRowClick = (row: Row | Cell[], ri: number): void => {
    const rowObj = Array.isArray(row) ? {} : (row as Row)

    if (rowObj.onClick) {
        rowObj.onClick(row as Row, ri)
    } else if (props.onRowClick) {
        props.onRowClick(row, ri)
    }
}

const colLetter = (index: number): string => String.fromCharCode(65 + index)
</script>

<template>
    <div class="overflow-hidden rounded-xl shadow-full-box border border-border">
        <table class="w-full border-collapse table-fixed bg-card overflow-hidden">
            <tbody>
                <tr
                    v-for="(row, ri) in rows"
                    :key="'row-' + ri"
                    :class="getRowClasses(row, ri)"
                    @click="handleRowClick(row, ri)"
                >
                    <td
                        v-for="(cell, ci) in (Array.isArray(row) ? row : row.cells)"
                        :key="'cell-' + ri + '-' + ci"
                        :colspan="cell.colspan || 1"
                        :rowspan="cell.rowspan || 1"
                        :class="getCellClasses(cell, ri, ci)"
                        :style="getCellStyles(cell)"
                    >
                        <slot :name="`${colLetter(ci)}${ri + 1}`">
                            {{ cell.content }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
