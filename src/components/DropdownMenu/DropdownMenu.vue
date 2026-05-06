<script setup lang="ts">
import { useSlots } from 'vue'
import { useDropdown } from '../../composables/useDropdown'
import DropdownOptions from '../DropdownOptions/DropdownOptions.vue'
import type { DropdownMenuProps } from './DropdownMenu.types'

const props = withDefaults(defineProps<DropdownMenuProps>(), {
    label: 'label',
    trackBy: 'value',
    direction: 'left'
})

const emit = defineEmits<{
    select: [option: any]
}>()

const slots = useSlots()
const { dropdownOpen, dropdownContainer } = useDropdown()

const select = (option: any): void => {
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
            :option-label="label"
            :track-by="trackBy"
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
