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
        { 'shadow-sm': !flat },
        { 'rounded-md': !boxed },
        'bg-card border border-border dark:border-none rounded-md shadow-sm'
    ]">
        <slot />
    </div>
</template>
