<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, useSlots, watch} from 'vue'
import Textbox from '../Textbox/Textbox.vue'
import { faSort, faXmark } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../Iconbutton/IconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import DropdownOptions from "../DropdownOptions/DropdownOptions.vue"
import { useDropdown } from '../../composables/useDropdown.js'

const props = defineProps({
    options: Array,
    label: String,
    optionLabel: String,
    trackBy: String,
    optionDescription: String,
    searchable: Boolean,
    icon: Object,
    error: [String, Boolean],
    placeholder: {
        type: String,
        default: 'Select an option...',
    },
    size: {
        type: String,
    },
    variant: {
        type: String,
        default: 'filled',
    },
    color: {
        type: String,
        default: 'base',
    },
    lockOnSelect: {
        type: Boolean,
        default: true,
    },
    formatResult: {
        type: Function,
        default: (option) => option,
    },
    styles: String,
    textboxStyles: String,
    acceptsEmptySelection: Boolean
})
const emit = defineEmits(['select', 'blur', 'focus'])

const model = defineModel()
const searchQuery = defineModel('searchQuery', { default: '' })
const inputElement = defineModel('input')

const slots = useSlots()
const { dropdownOpen, dropdownContainer, open, close } = useDropdown()

const select = (option) => {
    const result = props.formatResult(option)

    model.value = result
    emit('select', result)

    if (props.optionLabel) {
        searchQuery.value = option[props.optionLabel]
    }

    nextTick(close)
}

const deselect = (e) => {
    e.stopPropagation()
    model.value = null
    searchQuery.value = ''
}

const toggle = () => {
    if (!props.searchable) {
        if (dropdownOpen.value) {
            close()
        } else {
            open()
        }
    }
}

const getInitialValue = () => {
    if (model.value && props.optionLabel) return model.value[props.optionLabel]
    else if (model.value) return model.value
    else return null
}

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
                    :value="getInitialValue()"
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
