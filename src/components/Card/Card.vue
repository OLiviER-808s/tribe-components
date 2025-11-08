<script setup>
const props = defineProps({
    styles: {
        type: String,
        default: '',
    },
    padding: {
        type: String,
        default: 'p-4',
    },
    flat: Boolean,
    boxed: Boolean,
})
</script>

<template>
    <div :class="[
        styles,
        padding,
        { 'shadow-sm': !flat && !styles.includes('shadow') },
        { 'rounded-md': !boxed && !styles.includes('rounded') },
        'bg-card border border-border dark:border-none'
    ]">
        <slot />
    </div>
</template>
