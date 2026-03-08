<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
    color?: string
    variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'dashed'
    styles?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    href?: string
    hoverEffects?: boolean
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

const classes = computed(() => {
    const result = [
        'btn', 
        props.styles,
        props.padding,
        { pressed: isPressed }, 
        { 'disabled-btn': props.disabled },
        { 'cursor-default': !props.hoverEffects }
    ]

    switch (props.variant) {
        case 'light':
            result.push(`bg-${btnColor.value}/20 text-${btnColor.value}`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/35`)

            break
        case 'outline':
            result.push(`text-${props.textColor ?? btnColor.value} border-${btnColor.value} border-2`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break    
        case 'subtle':
            result.push(`text-${props.textColor ?? btnColor.value} bg-transparent`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break
        case 'dashed':
            result.push(`text-${props.textColor ?? btnColor.value} border-${btnColor.value} border-2 border-dashed`)
            if (props.hoverEffects) result.push(`hover:bg-${btnColor.value}/10`)

            break
        default:
            result.push(`text-${props.textColor ?? 'black'} bg-${btnColor.value}`)
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
