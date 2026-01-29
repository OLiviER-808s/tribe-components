<script setup lang="ts">
interface Props {
    styles?: string
    padding?: string
    flat?: boolean
    boxed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    styles: '',
    padding: 'p-4',
    flat: false,
    boxed: false
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
