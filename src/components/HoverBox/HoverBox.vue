<script setup>
const hovering = defineModel({ default: false })
</script>

<template>
    <div @mouseenter="hovering = true" @mouseleave="hovering = false">
        <slot />
    </div>
</template>
