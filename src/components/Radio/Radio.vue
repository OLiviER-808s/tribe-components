<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
    value?: string | boolean
    label?: string
    name?: string
    modelValue?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
    select: [e: Event]
}>()

const model = defineModel<string | boolean>()

const hovering = ref<boolean>(false)
const checked = computed(() => props.modelValue === props.value)

const select = (e: Event): void => {
    model.value = props.value
    emit('select', e)
}
</script>

<template>
    <label
        class="flex items-center gap-3 relative cursor-pointer"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <input
            class="absolute opacity-0 cursor-pointer"
            type="radio"
            :name="name"
            :value="value"
            :checked="checked"
            @change="e => select(e)"
        />

        <span class="rounded-full border-2 border-secondary flex items-center justify-center h-4 w-4">
            <span class="rounded-full h-2 w-2" :class="{ 'bg-secondary': hovering || checked }"></span>
        </span>

        <span>{{ label }}</span>
    </label>
</template>
