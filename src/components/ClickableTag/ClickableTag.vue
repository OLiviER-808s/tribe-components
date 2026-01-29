<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    color?: string
    size?: string
    rounded?: string
    styles?: string
}

const props = withDefaults(defineProps<Props>(), {
    color: 'secondary',
    size: 'md',
    rounded: 'full',
    styles: ''
})

const emit = defineEmits<{
    select: []
}>()

const selected = defineModel<boolean>({ default: false })

const classes = computed(() => {
    return `${props.styles} py-1 px-3 duration-100 text-center border-2 rounded-${props.rounded} text-${props.size} text-${props.color} border-${props.color} hover:bg-${props.color}/10`
})

const selectedClasses = computed(() => {
    return `${props.styles} py-1 px-3 duration-100 text-center border-2 rounded-${props.rounded} text-${props.size} bg-${props.color} border-${props.color} text-black`
})
</script>

<template>
    <button @click="emit('select')" :class="selected ? selectedClasses : classes">
        <slot />
    </button>
</template>
