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
    switch (props.variant) {
        case 'light':
            return `${props.styles} btn bg-${btnColor.value}/20 hover:bg-${btnColor.value}/35 text-${btnColor.value}`
        case 'outline':
            return `${props.styles} btn text-${btnColor.value} border-${btnColor.value} hover:bg-${btnColor.value}/10 border-2`
        case 'subtle':
            return `${props.styles} btn text-${btnColor.value} hover:bg-${btnColor.value}/10`
        case 'dashed':
            return `${props.styles} btn text-${btnColor.value} border-${btnColor.value} border-2 border-dashed hover:bg-${btnColor.value}/10`
        default:
            return `${props.styles} btn text-black bg-${btnColor.value}`
    }
})
</script>

<template>
    <button
        @click="handleClick"
        @mousedown="isPressed = true"
        @mouseup="isPressed = false"
        :class="[classes, { pressed: isPressed }, { 'disabled-btn': disabled }]"
        :disabled="disabled"
        :type="type"
    >
        <slot />
    </button>
</template>

<style scoped>
.pressed {
    transform: translateY(2px);
}

.btn {
    @apply px-6 py-2 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2;
}

.disabled-btn {
    @apply opacity-50 cursor-default;
}
</style>
