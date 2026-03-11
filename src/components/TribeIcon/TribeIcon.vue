<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconSize, TribeIconType } from '../../types/icon'
import { isFAIconDefinition } from '../../types/icon'

interface Props {
    icon: TribeIconType
    size?: IconSize
}

const props = defineProps<Props>()

const sizeClass = computed(() => {
    const map: Record<string, string> = {
        '2xs': 'w-2 h-2',
        'xs': 'w-3 h-3',
        'sm': 'w-4 h-4',
        'lg': 'w-5 h-5',
        'xl': 'w-6 h-6',
        '2xl': 'w-8 h-8',
        '1x': 'w-4 h-4',
        '2x': 'w-8 h-8',
        '3x': 'w-12 h-12',
        '4x': 'w-16 h-16',
        '5x': 'w-20 h-20',
    }
    return props.size ? (map[props.size] ?? 'w-4 h-4') : 'w-4 h-4'
})
</script>

<template>
    <FontAwesomeIcon v-if="isFAIconDefinition(icon)" :icon="icon" :size="size" />
    <component v-else :is="icon as any" :class="sizeClass" />
</template>
