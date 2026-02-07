<script setup lang="ts">
interface Props {
    styles?: string
    padding?: string
    flat?: boolean
    boxed?: boolean
    border?: string
}

const props = withDefaults(defineProps<Props>(), {
    styles: '',
    padding: 'p-4',
    flat: false,
    boxed: false,
    border: 'border-border dark:border-none'
})
</script>

<template>
    <div :class="[
        styles,
        padding,
        border,
        { 'shadow-sm': !flat && !styles.includes('shadow') },
        { 'rounded-md': !boxed && !styles.includes('rounded') },
        'border bg-card'
    ]">
        <slot />
    </div>
</template>
