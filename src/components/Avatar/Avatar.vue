<script setup lang="ts">
interface Props {
    src?: string
    styles?: string
}

const props = withDefaults(defineProps<Props>(), {
    styles: ''
})
</script>

<template>
    <img :src="src" alt="avatar" :class="`rounded-full ${styles}`" />
</template>
