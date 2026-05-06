<script setup lang="ts">
import { computed, onMounted } from 'vue'
import TribeIcon from '../TribeIcon/TribeIcon.vue'
import type { ToggleProps } from './Toggle.types'

const props = withDefaults(defineProps<ToggleProps>(), {
    activeColor: 'secondary',
    value: false
})

const emit = defineEmits<{
    toggle: [value: boolean]
}>()

const model = defineModel<boolean>()

const toggle = (): void => {
    model.value = !model.value
    emit('toggle', model.value)
}

const toggleClass = computed(() =>
    model.value ? `bg-${props.activeColor}` : 'bg-gray-300 dark:bg-gray-600'
)

const circleClass = computed(() =>
    model.value ? 'translate-x-6' : 'translate-x-0'
)

onMounted(() => {
    if (model.value === undefined) {
        model.value = props.value
    }
})
</script>

<template>
    <div
        @click="toggle"
        :class="toggleClass"
        class="cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"
    >
        <div
            :class="circleClass"
            class="bg-white dark:bg-gray-200 text-black text-sm  flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        >
            <TribeIcon v-if="icon" :icon="icon" />
        </div>
    </div>
</template>

