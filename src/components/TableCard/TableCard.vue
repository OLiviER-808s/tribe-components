<script setup>
import { defineProps } from "vue"

// interface TableCell {
//     content?: string | number | null
//     align?: string
//     colspan?: number
//     rowspan?: number
//     width?: string | number
//     height?: string | number
//     class?: string
// }
//
// type TableRow = TableCell[]
//
// interface Props {
//     rows: TableRow[]
//     headerClasses?: string
// }

const props = defineProps({
    rows: Array,
    headerClasses: String,
})

const getCellStyles = (cell) => {
    return {
        width: cell.width ? (typeof cell.width === "number" ? `${cell.width}px` : cell.width) : undefined,
        height: cell.height ? (typeof cell.height === "number" ? `${cell.height}px` : cell.height) : undefined,
    }
}

const getCellClasses = (cell, ri, ci) => (
    [
        `text-${cell.align ?? 'left'} p-2 border-border`,
        { 'border-r': ci !== props.rows[ri].length - 1 },
        cell.class
    ]
)

const getHeaderClasses = (ri) => (
    [
        ri === 0 && props.headerClasses ? props.headerClasses : '',
        'border-border',
        { 'border-b': ri !== props.rows.length - 1 }
    ]
)

const colLetter = (index) => String.fromCharCode(65 + index)
</script>

<template>
    <div class="overflow-hidden rounded-xl shadow-full-box border border-border">
        <table class="w-full border-collapse table-fixed bg-card overflow-hidden">
            <tbody>
                <tr
                    v-for="(row, ri) in rows"
                    :key="'row-' + ri"
                    :class="getHeaderClasses(ri)"
                >
                    <td
                        v-for="(cell, ci) in row"
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
