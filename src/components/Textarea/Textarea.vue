<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { TextareaProps } from './Textarea.types'

const props = withDefaults(defineProps<TextareaProps>(), {
    variant: 'filled',
    color: 'base',
    rows: 4,
    fieldSizingContent: false
})

const emit = defineEmits<{
    focus: [e: Event]
    blur: [e: Event]
    keyPress: [e: KeyboardEvent]
    input: [e: Event]
}>()

const modelValue = defineModel<string>()
const inputElement = defineModel<HTMLTextAreaElement | null>('input')

const internalValue = ref<string | undefined>(props.modelValue)
const focused = ref<boolean>(false)

const variantStyles = computed(() =>
    props.variant === 'filled' ? `bg-${props.color}` : 'bg-transparent border border-border'
)

const handleFocus = (e: Event): void => {
    focused.value = true
    emit('focus', e)
}

const handleBlur = (e: Event): void => {
    focused.value = false
    emit('blur', e)
}

const handleInput = (event: Event): void => {
    const target = event.target as HTMLTextAreaElement
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
