<script setup>
import { ref, computed, defineProps, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    name: String,
    value: String,
    type: {
        type: String,
        default: 'text',
    },
    disabled: Boolean,
    error: [String, Boolean],
    success: [String, Boolean],
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
    styles: String,
    label: String,
    icon: Object,
    placeholder: String,
})
const emit = defineEmits(['input', 'focus', 'blur'])

const modelValue = defineModel()
const inputElement = defineModel('input')

const focused = ref(false)

const variantStyles = computed(() =>
    props.variant === 'filled' ? `bg-${props.color}` : 'bg-transparent border border-secondary-text'
)

const handleFocus = (e) => {
    focused.value = true
    emit('input', e)
}

const handleBlur = (e) => {
    focused.value = false
    emit('blur', e)
}

const handleInput = (event) => {
    modelValue.value = event.target.value
    emit('input', event)
}
</script>

<template>
    <div>
        <label :for="name" class="font-medium">{{ label }}</label>

        <div
            :class="[
                'rounded-lg flex items-center duration-300',
                variantStyles,
                styles,
                {
                    error: error,
                    success: success,
                    selected: focused,
                    'min-h-10': size !== 'sm',
                    'min-h-8': size === 'sm',
                },
            ]"
        >
            <div v-if="icon" class="flex justify-center items-center w-10 rounded-l-md">
                <FontAwesomeIcon :icon="icon" :size="size" class="text-secondary-text" />
            </div>

            <div class="flex-grow w-full flex items-center gap-1 flex-wrap p-2" :class="{ 'pl-0': icon }">
                <slot name="left-section" />

                <div v-if="disabled" :class="{ 'pl-0': icon, 'text-sm': size === 'sm' }" class="flex-grow">
                    <span v-if="modelValue">{{ modelValue }}</span>
                    <span v-else-if="value">{{ value }}</span>
                    <span v-else-if="placeholder" class="text-secondary-text">{{ placeholder }}</span>
                </div>
                <input
                    v-else
                    ref="inputElement"
                    :name="name"
                    :type="type"
                    :placeholder="placeholder"
                    :value="modelValue ?? value"
                    :disabled="disabled"
                    @input="handleInput"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    :class="{ 'placeholder:text-sm': size === 'sm' }"
                    class="p-0 flex-grow border-none outline-none rounded-lg bg-transparent placeholder:text-secondary-text"
                />
            </div>

            <slot name="right-section" />
        </div>

        <p v-if="error && typeof error !== 'boolean'" class="text-error text-sm">
            {{ error }}
        </p>
        <p v-else-if="success && typeof error !== 'boolean'" class="text-success text-sm">
            {{ success }}
        </p>
    </div>
</template>
