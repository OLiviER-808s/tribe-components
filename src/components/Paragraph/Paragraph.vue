<script setup lang="ts">
import { computed } from 'vue'
import type { ParagraphProps } from './Paragraph.types'

const props = defineProps<ParagraphProps>()

const formatedText = computed(() => {
    if (props.text && props.limit) {
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
