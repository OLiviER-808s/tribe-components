<script setup>
import { computed } from 'vue'

const props = defineProps({
    text: String,
    styles: String,
    limit: Number,
    includeWhitespace: Boolean,
})

const formatedText = computed(() => {
    if (props.limit) {
        return `${props.text.substring(0, props.limit)}${props.text.length > props.limit ? '...' : ''}`
    }

    return props.text
})
</script>

<template>
    <p :class="[styles, { 'whitespace-pre-wrap': includeWhitespace }]">
        {{ formatedText }}
    </p>
</template>
