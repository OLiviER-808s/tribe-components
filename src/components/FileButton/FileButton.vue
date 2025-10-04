<script setup>
import { ref } from 'vue'

const props = defineProps({
    multiple: {
        type: Boolean,
        default: true,
    },
    disabled: Boolean,
    accept: String
})
const emit = defineEmits(['change'])

const fileInput = ref(null)

const selectFiles = () => {
    if (!props.disabled) {
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
