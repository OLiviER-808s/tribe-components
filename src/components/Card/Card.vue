<script setup lang="ts">
import type { CardProps } from './Card.types'

const props = withDefaults(defineProps<CardProps>(), {
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
