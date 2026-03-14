<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ButtonVariant, ButtonType } from '@/types/button'

interface Props {
    color?: string
    variant?: ButtonVariant
    styles?: string
    disabled?: boolean
    type?: ButtonType
    href?: string
    hoverEffects?: boolean
    clickEffects?: boolean
    textColor?: string
    padding?: string
}

const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    variant: 'filled',
    styles: '',
    disabled: false,
    type: 'button',
    href: '',
    hoverEffects: true,
    clickEffects: true,
    textColor: '',
    padding: 'px-6 py-2'
})

const emit = defineEmits<{
    click: [e: Event]
}>()

const isPressed = ref<boolean>(false)

const handleClick = (e: Event): void => {
    if (props.href) {
        window.open(props.href)
    }

    emit('click', e)
}

const btnColor = computed(() => {
    return props.color === 'base' ? 'secondary-text' : props.color
})

const textColor = computed(() => {
    return props.textColor ? props.textColor : (props.variant === 'filled' ? 'black' : btnColor.value)
})

const classes = computed(() => {
    const result = [
        'btn', 
        props.styles,
        props.padding,
        { 'pressed': props.clickEffects && isPressed.value }, 
        { 'disabled-btn': props.disabled },
        { 'cursor-pointer': props.hoverEffects }
    ]

    switch (props.variant) {
        case 'light':
            result.push(`bg-${btnColor.value}/20 text-${textColor.value}`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/35`)

            break
        case 'outline':
            result.push(`text-${textColor.value} border-${btnColor.value} border-2`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break    
        case 'subtle':
            result.push(`text-${textColor.value} bg-transparent`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break
        case 'dashed':
            result.push(`text-${textColor.value} border-${btnColor.value} border-2 border-dashed`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break
        default:
            result.push(`text-${textColor.value} bg-${btnColor.value}`)
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
        @touchstart="isPressed = true"
        @touchend="isPressed = false"
        :class="classes"
        :disabled="disabled"
        :type="type"
    >
        <slot />
    </button>
</template>
