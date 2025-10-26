<script setup>
const props = defineProps({
    rows: {
        type: Array,
        required: true,
    },
    headerClasses: String,
    onRowClick: Function,
})


const getCellStyles = (cell) => ({
    width: cell.width ? (typeof cell.width === "number" ? `${cell.width}px` : cell.width) : undefined,
    height: cell.height ? (typeof cell.height === "number" ? `${cell.height}px` : cell.height) : undefined,
})

const getCellClasses = (cell, ri, ci) => ([
    `text-${cell.align ?? 'left'} p-2 border-border`,
    { 'border-r': ci !== props.rows[ri].cells?.length - 1 && ci !== props.rows[ri].length - 1 },
    cell.class
])

const getRowClasses = (row, ri) => ([
    row.class ?? '',
    'border-border',
    { 'border-b': ri !== props.rows.length - 1 },
    { 'cursor-pointer hover:bg-muted/50': row.onClick || props.onRowClick }
])

const handleRowClick = (row, ri) => {
    if (row.onClick) return row.onClick(row, ri)
    if (props.onRowClick) return props.onRowClick(row, ri)
}

const colLetter = (index) => String.fromCharCode(65 + index)
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
                        v-for="(cell, ci) in (row.cells ?? row)"
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
