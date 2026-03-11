<script setup lang="ts">
import { computed } from 'vue'
import TribeIcon from '../TribeIcon/TribeIcon.vue'
import type { TribeIconType } from '@/types/icon'

interface Props {
    label?: string
    icon?: TribeIconType
    placeholder?: string
    styles?: string
    error?: string
    min?: number
    max?: number
    variant?: string
    size?: string
    color?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: 10000,
    variant: 'filled',
    color: 'base'
})

const modelValue = defineModel<number | string>()

const variantStyles = computed(() =>
    props.variant === 'filled' ? `bg-${props.color}` : 'bg-transparent border border-secondary-text'
)

const isError = computed(() => {
    const value = typeof modelValue.value === 'string' ? parseFloat(modelValue.value) : modelValue.value

    if (value && value > props.max) {
        return `Value must be ${props.max} or less.`
    } else if (value && value < props.min) {
        return `Value must be ${props.min} or more.`
    }

    return false
})
</script>

<template>
    <div>
        <h4 class="font-medium">{{ label }}</h4>

        <div :class="['rounded-lg flex h-10 items-center', variantStyles, styles, { error: isError || error, 'px-2': !icon }]">
            <div v-if="icon" class="text-text-secondary flex justify-center items-center w-10 rounded-l-md">
                <TribeIcon :icon="icon" size="1x" class="text-secondary-text" />
            </div>

            <input
                v-model="modelValue"
                :placeholder="placeholder"
                type="number"
                :min="min"
                :max="max"
                :disabled="disabled"
                class="flex-grow w-full py-2 px-0 border-none outline-none rounded-lg placeholder:text-secondary-text bg-transparent appearance-none"
            />
        </div>

        <p v-if="isError" class="text-error text-sm">
            {{ isError }}
        </p>
        <p v-else-if="error && typeof error === 'string'" class="text-error text-sm">
            {{ error }}
        </p>
    </div>
</template>
