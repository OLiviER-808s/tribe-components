<script setup lang="ts">
interface Props {
    content?: string | number | null
    color?: string
    size?: string
    styles?: string
}

const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    size: 'xs'
})
</script>

<template>
    <div :class="`text-${size} text-black font-bold bg-${color} rounded-xl px-1 ${styles} min-w-3 min-h-3`">
        <slot>
            {{ content }}
        </slot>
    </div>
</template>
