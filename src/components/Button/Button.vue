<script setup>
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'primary',
    },
    variant: {
        type: String,
        default: 'filled',
    },
    styles: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
    },
    href: {
        type: String,
        default: '',
    },
    onClick: {
        type: Function,
        default: (e) => {},
    },
    hoverEffects: {
        type: Boolean,
        default: true,
    },
})
const emit = defineEmits(['click'])

const isPressed = ref(false)

const handleClick = (e) => {
    if (props.href) {
        window.open(props.href)
    }
    
    emit('click', e)
}

const btnColor = computed(() => {
    return props.color === 'base' ? 'secondary-text' : props.color
})

const classes = computed(() => {
    const result = [
        'btn', 
        props.styles,
        { pressed: isPressed }, 
        { 'disabled-btn': disabled },
        { 'cursor-default': props.hoverEffects }
    ]

    switch (props.variant) {
        case 'light':
            result.push(`bg-${btnColor.value}/20 text-${btnColor.value}`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/35`)

            break
        case 'outline':
            result.push(`text-${btnColor.value} border-${btnColor.value} border-2`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break    
        case 'subtle':
            result.push(`text-${btnColor.value} bg-transparent`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break
        case 'dashed':
            result.push(`text-${btnColor.value} border-${btnColor.value} border-2 border-dashed`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break
        default:
            result.push(`text-black bg-${btnColor.value}`)
            break
    }

    return result
})
</script>

<template>
    <button
        @click="handleClick"
        @mousedown="isPressed = true"
        @mouseup="isPressed = false"
        :class="classes"
        :disabled="disabled"
        :type="type"
    >
        <slot />
    </button>
</template>
