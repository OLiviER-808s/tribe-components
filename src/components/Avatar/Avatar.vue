<script setup lang="ts">
import type { AvatarProps } from './Avatar.types'

const props = withDefaults(defineProps<AvatarProps>(), {
    styles: ''
})
</script>

<template>
    <img :src="src" alt="avatar" :class="`rounded-full ${styles}`" />
</template>
