<script setup lang="ts">
const hovering = defineModel<boolean>({ default: false })
</script>

<template>
    <div @mouseenter="hovering = true" @mouseleave="hovering = false">
        <slot />
    </div>
</template>
