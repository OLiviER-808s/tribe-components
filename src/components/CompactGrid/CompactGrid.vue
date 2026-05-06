<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import type { CompactGridProps, ResponsiveCols } from './CompactGrid.types'

const props = withDefaults(defineProps<CompactGridProps>(), {
    cols: (): ResponsiveCols => ({ default: 1, sm: 2, lg: 3 }),
    gap: 16,
})

const BREAKPOINTS: { key: keyof Omit<ResponsiveCols, 'default'>; minWidth: number }[] = [
    { key: 'sm',  minWidth: 640  },
    { key: 'md',  minWidth: 768  },
    { key: 'lg',  minWidth: 1024 },
    { key: 'xl',  minWidth: 1280 },
    { key: '2xl', minWidth: 1536 },
]

const gridRef = ref<HTMLDivElement | null>(null)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const gapPx = computed<number>(() => {
    if (typeof props.gap === 'number') return props.gap
    const parsed = parseFloat(props.gap)
    return isNaN(parsed) ? 16 : parsed
})

const currentCols = computed<number>(() => {
    if (typeof props.cols === 'number') return Math.max(1, props.cols)

    const map = props.cols as ResponsiveCols
    let resolved = map.default ?? 1

    for (const { key, minWidth } of BREAKPOINTS) {
        if (windowWidth.value >= minWidth && map[key] !== undefined) {
            resolved = map[key]!
        }
    }

    return Math.max(1, resolved)
})

const gridStyle = computed(() => ({
    gridTemplateColumns: `repeat(${currentCols.value}, 1fr)`,
    gridAutoRows: '1px',
    gap: typeof props.gap === 'number' ? `${props.gap}px` : props.gap,
}))

function resizeItems(): void {
    const grid = gridRef.value
    if (!grid) return

    const gap = gapPx.value
    const rowUnit = 1 + gap

    for (const item of grid.children) {
        const el = item as HTMLElement
        el.style.gridRowEnd = ''
        const height = el.getBoundingClientRect().height
        const span = Math.ceil((height + gap) / rowUnit)
        el.style.gridRowEnd = `span ${span}`
    }
}

function scheduleResize(): void {
    nextTick(() => requestAnimationFrame(resizeItems))
}

function onWindowResize(): void {
    windowWidth.value = window.innerWidth
    scheduleResize()
}

let resizeObserver: ResizeObserver | null = null

function observeChildren(): void {
    if (!gridRef.value || typeof ResizeObserver === 'undefined') return

    resizeObserver?.disconnect()
    resizeObserver = new ResizeObserver(scheduleResize)

    resizeObserver.observe(gridRef.value)
    for (const child of gridRef.value.children) {
        resizeObserver.observe(child)
    }
}

const childObserver: MutationObserver | null = typeof MutationObserver !== 'undefined'
    ? new MutationObserver(() => {
        observeChildren()
        scheduleResize()
    })
    : null

onMounted(() => {
    window.addEventListener('resize', onWindowResize)
    childObserver?.observe(gridRef.value!, { childList: true })
    observeChildren()
    scheduleResize()
})

onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)
    resizeObserver?.disconnect()
    childObserver?.disconnect()
})

watch([currentCols, gapPx], scheduleResize)
</script>

<template>
    <div ref="gridRef" class="grid items-start *:box-border *:min-w-0" :style="gridStyle">
        <slot />
    </div>
</template>
