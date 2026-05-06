<script setup lang="ts">
import type { BadgeProps } from './Badge.types'

const props = withDefaults(defineProps<BadgeProps>(), {
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
