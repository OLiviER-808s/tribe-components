<script setup>
import { computed, watch } from 'vue'
import { ref } from 'vue'

const props = defineProps({
    name: String,
    disabled: Boolean,
    error: [String, Boolean],
    success: [String, Boolean],
    label: String,
    placeholder: String,
    modelValue: String,
    maxlength: Number,
    styles: String,
    variant: {
        type: String,
        default: 'filled',
    },
    color: {
        type: String,
        default: 'base',
    },
    rows: {
        type: Number,
        default: 4,
    },
    fieldSizingContent: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['focus', 'blur', 'keyPress', 'input'])

const modelValue = defineModel()
const inputElement = defineModel('input')

const internalValue = ref(props.modelValue)
const focused = ref(false)

const variantStyles = computed(() =>
    props.variant === 'filled' ? `bg-${props.color}` : 'bg-transparent ring-1 ring-secondary-text'
)

const handleFocus = (e) => {
    focused.value = true
    emit('focus', e)
}

const handleBlur = (e) => {
    focused.value = false
    emit('blur', e)
}

const handleInput = (event) => {
    const target = event.target
    internalValue.value = target.value
    modelValue.value = target.value

    emit('input', event)
}

watch(
    () => props.modelValue,
    (newVal) => {
        internalValue.value = newVal
    }
)
</script>

<template>
    <div>
        <div class="flex items-center justify-between">
            <label :for="name" class="font-medium">{{ label }}</label>

            <p v-if="maxlength" class="text-xs text-secondary-text mr-1">
                {{ modelValue?.length ?? 0 }} / {{ maxlength }}
            </p>
        </div>

        <div
            :class="[
                'rounded-lg flex duration-300 max-h-48 overflow-auto',
                variantStyles,
                styles,
                {
                    error: error,
                    success: success,
                    selected: focused,
                },
            ]"
        >
            <textarea
                class="rounded-lg p-2 flex-grow bg-transparent outline-none max-w-full placeholder:text-secondary-text border-none"
                :class="{ 'field-sizing-content': fieldSizingContent }"
                :name="name"
                :placeholder="placeholder"
                :value="modelValue"
                :disabled="disabled"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @keydown="e => emit('keyPress', e)"
                :maxlength="maxlength"
                :rows="rows"
                ref="inputElement"
            ></textarea>
        </div>

        <p v-if="error && typeof error !== 'boolean'" class="text-error text-sm">
            {{ error }}
        </p>
        <p v-else-if="success && typeof error !== 'boolean'" class="text-success text-sm">
            {{ success }}
        </p>
    </div>
</template>
