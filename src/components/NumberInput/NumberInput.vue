<script setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    label: String,
    icon: Object,
    placeholder: String,
    styles: String,
    error: String,
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 10000,
    },
    variant: {
        type: String,
        default: 'filled',
    },
    size: {
        type: String,
    },
    color: {
        type: String,
        default: 'base',
    },
    disabled: Boolean,
})
const modelValue = defineModel()

const variantStyles = computed(() =>
    props.variant === 'filled' ? `bg-${props.color}` : 'bg-transparent border border-secondary-text'
)

const isError = computed(() => {
    if (props.modelValue > props.max) {
        return `Value must be ${props.max} or less.`
    } else if (props.modelValue < props.min) {
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
                <FontAwesomeIcon :icon="icon" size="1x" class="text-secondary-text" />
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
