<script setup>
import { useSlots } from 'vue'
import { useDropdown } from '../../composables/useDropdown'
import DropdownOptions from '../DropdownOptions/DropdownOptions.vue'

const props = defineProps({
    options: Array,
    direction: {
        type: String,
        default: 'left'
    }
})
const emit = defineEmits(['select'])

const slots = useSlots()
const { dropdownOpen, dropdownContainer } = useDropdown()

const select = (option) => {
    dropdownOpen.value = false
    emit('select', option)
}
</script>

<template>
    <div class="relative" ref="dropdownContainer">
        <div @click="dropdownOpen = !dropdownOpen">
            <slot name="trigger" />
        </div>

        <DropdownOptions
            :container="dropdownContainer"
            :options="options"
            :open="dropdownOpen"
            accepts-empty-selection
            @select="select"
            width="w-64"
            :direction="direction"
        >
            <template v-if="slots.option" #option="{ option }">
                <slot name="option" :option="option" />
            </template>
        </DropdownOptions>
    </div>
</template>
