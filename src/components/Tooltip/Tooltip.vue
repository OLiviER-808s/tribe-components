<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TooltipProps } from './Tooltip.types'

const props = withDefaults(defineProps<TooltipProps>(), {
    position: 'top'
})

const visible = ref<boolean>(false)

const positionStyles = computed(() => {
    let styles: string | undefined

    switch (props.position) {
        case 'right':
            styles = 'left-full pl-4'
            break
        // Add when needed
    }

    return styles
})
</script>

<template>
    <div class="relative flex items-center" @mouseenter="visible = true" @mouseleave="visible = false">
        <slot></slot>

        <Transition name="fade">
            <div v-if="visible" :class="[positionStyles, 'absolute delay-1000 z-50']">
                <div class="rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap">
                    <slot name="tooltip-content">
                        {{ text }}
                    </slot>
                </div>
            </div>
        </Transition>
    </div>
</template>
