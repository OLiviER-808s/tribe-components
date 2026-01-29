<script setup lang="ts">
import { ref } from 'vue'

interface Props {
    multiple?: boolean
    disabled?: boolean
    accept?: string
}

const props = withDefaults(defineProps<Props>(), {
    multiple: true
})

const emit = defineEmits<{
    change: [event: Event]
}>()

const fileInput = ref<HTMLInputElement | null>(null)

const selectFiles = (): void => {
    if (!props.disabled && fileInput.value) {
        fileInput.value.click()
    }
}
</script>

<template>
    <div>
        <input
            type="file"
            ref="fileInput"
            @change="(e) => emit('change', e)"
            :multiple="multiple"
            :accept="accept"
            hidden
        />

        <div @click="selectFiles">
            <slot />
        </div>
    </div>
</template>
