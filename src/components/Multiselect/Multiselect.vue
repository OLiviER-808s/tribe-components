<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useSlots, watch } from 'vue'
import Textbox from '../Textbox/Textbox.vue'
import DropdownOptions from '../DropdownOptions/DropdownOptions.vue'
import type { MultiselectProps } from './Multiselect.types'

const props = withDefaults(defineProps<MultiselectProps>(), {
    placeholder: 'Select an option...',
    variant: 'filled',
    color: 'base',
    formatResult: (option: any) => option
})

const emit = defineEmits<{
    select: [option: any]
    focus: [e: Event]
    blur: [e: Event]
}>()

const model = defineModel<any[]>({ default: [] })
const searchQuery = defineModel<string>('searchQuery', { default: '' })
const inputElement = defineModel<HTMLInputElement | null>('input')

const slots = useSlots()

const dropdownOpen = ref<boolean>(false)
const dropdownContainer = ref<HTMLElement | null>(null)

const filteredOptions = computed(() => {
    if (props.acceptsDuplicates || !props.options) return props.options

    return props.options.filter(option => !model.value.includes(props.formatResult(option)))
})

const select = (option: any): void => {
    model.value.push(props.formatResult(option))

    searchQuery.value = ''
    emit('select', option)
}

const deselect = (idx: number): void => {
    model.value = model.value.filter((_, i) => i !== idx)
}

const open = (): void => {
    dropdownOpen.value = true
}

const close = (): void => {
    dropdownOpen.value = false
}

const toggle = (): void => {
    if (!props.searchable) {
        if (dropdownOpen.value) {
            close()
        } else {
            open()
        }
    }
}

const handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as Node
    if (dropdownContainer.value && !dropdownContainer.value.contains(target)) {
        close()
    }
}

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside)
})

watch(searchQuery, () => {
    if (props.searchable && searchQuery.value.length > 0) {
        open()
    }
})
</script>

<template>
    <div :class="[styles]">
        <div class="relative" ref="dropdownContainer">
            <div @click="toggle()" :class="{ 'cursor-pointer': !searchable }">
                <Textbox
                    v-model="searchQuery"
                    v-model:input="inputElement"
                    :label="label"
                    :placeholder="placeholder"
                    :disabled="!searchable"
                    :icon="icon"
                    :error="!!error"
                    :size="size"
                    :color="color"
                    :variant="variant"
                    :styles="textboxStyles"
                    @focus="e => emit('focus', e)"
                    @blur="e => emit('blur', e)"
                >
                    <template #left-section>
                        <div v-for="(selectedOption, idx) in model" :key="selectedOption[trackBy as keyof typeof selectedOption]">
                            <slot name="selectedTag" :option="selectedOption" :deselect="() => deselect(idx)" />
                        </div>
                    </template>
                </Textbox>
            </div>

            <DropdownOptions
                :container="dropdownContainer"
                :options="filteredOptions"
                :option-label="optionLabel"
                :track-by="trackBy"
                :open="dropdownOpen"
                :accepts-empty-selection="acceptsEmptySelection"
                @select="select"
            >
                <template v-if="slots.option" #option="{ option }">
                    <slot name="option" :option="option" />
                </template>
            </DropdownOptions>
        </div>

        <p v-if="error && typeof error !== 'boolean'" class="text-error text-sm">
            {{ error }}
        </p>
    </div>
</template>
