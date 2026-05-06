<script setup lang="ts">
import type { TagProps } from './Tag.types'

const props = withDefaults(defineProps<TagProps>(), {
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
