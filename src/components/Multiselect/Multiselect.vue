<script setup>
import {computed, onBeforeUnmount, onMounted, ref, useSlots, watch} from 'vue'
import Textbox from '../Textbox/Textbox.vue'
import DropdownOptions from "../DropdownOptions/DropdownOptions.vue"

const props = defineProps({
    options: Array,
    label: String,
    optionLabel: String,
    trackBy: String,
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
    formatResult: {
        type: Function,
        default: (option) => option,
    },
    styles: String,
    textboxStyles: String,
    acceptsEmptySelection: Boolean,
    acceptsDuplicates: Boolean
})
const emit = defineEmits(['select', 'focus', 'blur'])

const model = defineModel({ default: [] })
const searchQuery = defineModel('searchQuery', { default: '' })
const inputElement = defineModel('input')

const slots = useSlots()

const dropdownOpen = ref(false)
const dropdownContainer = ref(null)

const filteredOptions = computed(() => {
    if (props.acceptsDuplicates) return props.options

    return props.options.filter(option => !model.value.includes(props.formatResult(option)))
})

const select = (option) => {
    model.value.push(props.formatResult(option))

    searchQuery.value = ''
    emit('select', option)
}

const deselect = (idx) => {
    model.value = model.value.filter((o, i) => i !== idx)
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
                        <div v-for="(selectedOption, idx) in model" :key="optionLabel[trackBy]">
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
