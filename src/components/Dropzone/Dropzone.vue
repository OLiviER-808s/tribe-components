<script setup>
import { ref } from 'vue'

const emit = defineEmits(['drop'])

const isDragOver = ref(false)

const onDrop = (event) => {
    isDragOver.value = false
    emit('drop', event)
}
</script>

<template>
    <div @dragover.prevent="isDragOver = true" @dragleave="isDragOver = false" @drop.prevent="onDrop">
        <slot :isDragOver="isDragOver" />
    </div>
</template>
