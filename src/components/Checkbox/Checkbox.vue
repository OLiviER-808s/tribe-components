<script setup lang="ts">
import CheckIcon from '../icons/CheckIcon.vue'
import type { CheckboxProps } from './Checkbox.types'

const props = defineProps<CheckboxProps>()

const checked = defineModel<boolean>({ default: false })

const emit = defineEmits<{
    toggle: [value: boolean]
}>()

const handleToggle = (): void => {
    checked.value = !checked.value
    emit('toggle', checked.value)
}
</script>

<template>
    <div>
        <div class="flex items-center gap-2">
            <button
                @click="handleToggle()"
                type="button"
                class="rounded-xs cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black"
                :class="{ 'bg-secondary': checked, 'hover:bg-secondary/30': !checked }"
            >
                <CheckIcon v-if="checked" class="w-3 h-3" />
            </button>

            <label :for="name">
                <slot />
            </label>
        </div>

        <p v-if="error" class="text-error text-sm">{{ error }}</p>
    </div>
</template>
