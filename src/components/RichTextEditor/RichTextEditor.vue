<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const props = defineProps({
    label: String,
    placeholder: String,
    error: String,
})

const content = defineModel()
</script>

<template>
    <div>
        <label v-if="label" class="font-medium">{{ label }}</label>

        <QuillEditor theme="snow" content-type="html" :placeholder="placeholder" v-model:content="content" />

        <p v-if="error" class="text-error text-sm mt-1">{{ error }}</p>
    </div>
</template>

<style>
.ql-toolbar.ql-snow {
    @apply border-none text-secondary-text py-2 px-0;
}
.ql-stroke {
    @apply !stroke-secondary-text;
}
.ql-picker {
    @apply !text-secondary-text;
}
.ql-picker-label {
    @apply !ml-0;
}

.ql-formats button:hover,
.ql-picker-label:hover,
.ql-active {
    @apply !bg-base rounded-sm;
}

.ql-container {
    @apply !border-none rounded-md bg-base min-h-56;
}
</style>
