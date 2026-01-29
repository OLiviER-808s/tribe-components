<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    text?: string
    styles?: string
    limit?: number
    includeWhitespace?: boolean
}

const props = defineProps<Props>()

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
