<script setup lang="ts">
interface Props {
    color?: string
    size?: string
    styles?: string
    rounded?: string
}

const props = withDefaults(defineProps<Props>(), {
    color: 'secondary',
    size: 'md',
    styles: '',
    rounded: 'full'
})
</script>

<template>
    <div :class="`py-1 px-4 rounded-${rounded} duration-100 text-center text-black text-${size} bg-${color}`">
        <slot />
    </div>
</template>
