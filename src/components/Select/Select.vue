<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, useSlots, watch} from 'vue'
import Textbox from './Textbox.vue'
import { faSort, faXmark } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import DropdownOptions from "./DropdownOptions/DropdownOptions.vue"

const props = defineProps({
    options: Array,
    label: String,
    optionLabel: {
        type: String,
        default: 'label',
    },
    trackBy: {
        type: String,
        default: 'value',
    },
    optionDescription: {
        type: String,
        default: 'description',
    },
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

const dropdownOpen = ref(false)
const dropdownContainer = ref(null)

const select = (option) => {
    model.value = props.formatResult(option)

    if (props.optionLabel) {
        searchQuery.value = option[props.optionLabel]
    }

    emit('select', option)

    nextTick(close)
}

const deselect = (e) => {
    e.stopPropagation()
    model.value = null
    searchQuery.value = ''
}

const open = () => {
    dropdownOpen.value = true
}

const close = () => {
    dropdownOpen.value = false
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

const handleClickOutside = (event) => {
    if (!dropdownContainer.value.contains(event.target)) {
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
                    :value="model ? model[optionLabel] : null"
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
                                :on-click="deselect"
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
