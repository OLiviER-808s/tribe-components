<script setup lang="ts">
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import Textbox from '../Textbox/Textbox.vue'
import { faSort, faXmark } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../IconButton/IconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import DropdownOptions from '../DropdownOptions/DropdownOptions.vue'
import { useDropdown } from '../../composables/useDropdown'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
    options?: any[]
    label?: string
    optionLabel?: string
    trackBy?: string
    optionDescription?: string
    searchable?: boolean
    icon?: IconDefinition
    error?: string | boolean
    placeholder?: string
    size?: string
    variant?: string
    color?: string
    lockOnSelect?: boolean
    formatResult?: (option: any) => any
    styles?: string
    textboxStyles?: string
    acceptsEmptySelection?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Select an option...',
    variant: 'filled',
    color: 'base',
    lockOnSelect: true,
    formatResult: (option: any) => option
})

const emit = defineEmits<{
    select: [result: any]
    blur: [e: Event]
    focus: [e: Event]
}>()

const model = defineModel<any>()
const searchQuery = defineModel<string>('searchQuery', { default: '' })
const inputElement = defineModel<HTMLInputElement | null>('input')

const slots = useSlots()
const { dropdownOpen, dropdownContainer, open, close } = useDropdown()

const select = (option: any): void => {
    const result = props.formatResult(option)

    model.value = result
    emit('select', result)

    if (props.optionLabel && props.searchable) {
        searchQuery.value = option[props.optionLabel]
    } else if (props.searchable) {
        searchQuery.value = option
    }

    nextTick(close)
}

const deselect = (e?: Event): void => {
    e?.stopPropagation()
    model.value = null
    searchQuery.value = ''
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

const value = computed(() => {
    if (model.value && props.optionLabel) return model.value[props.optionLabel]
    else if (model.value) return model.value
    else return null
})

watch(searchQuery, () => {
    if (props.searchable && searchQuery.value.length > 0) {
        open()
    } else if (props.searchable) {
        close()
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
                    :value="value"
                    :label="label"
                    :placeholder="placeholder"
                    :disabled="!searchable || (lockOnSelect && model)"
                    :icon="model?.icon ?? icon"
                    :error="!!error"
                    :size="size"
                    :color="color"
                    :variant="variant"
                    :styles="textboxStyles"
                    @focus="e => emit('focus', e)"
                    @blur="e => emit('blur', e)"
                >
                    <template v-if="lockOnSelect && searchable && model" #right-section>
                        <div class="flex items-center pr-1">
                            <IconButton
                                :icon="faXmark"
                                @click="deselect()"
                                variant="subtle"
                                color="base"
                                :size="size"
                            />
                        </div>
                    </template>
                    <template v-else-if="!searchable" #right-section>
                        <div class="flex items-center pr-2 text-secondary-text">
                            <FontAwesomeIcon :icon="faSort" :size="size" />
                        </div>
                    </template>
                </Textbox>
            </div>

            <DropdownOptions
                :container="dropdownContainer"
                :options="options"
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
