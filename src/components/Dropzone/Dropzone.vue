<script setup lang="ts">
const emit = defineEmits<{
    drop: [event: DragEvent]
}>()

const isDragOver = defineModel<boolean>({ default: false })

const onDrop = (event: DragEvent): void => {
    isDragOver.value = false
    emit('drop', event)
}
</script>

<template>
    <div @dragover.prevent="isDragOver = true" @dragleave="isDragOver = false" @drop.prevent="onDrop">
        <slot :isDragOver="isDragOver" />
    </div>
</template>
