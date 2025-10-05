<script setup>
import { VueFinalModal } from 'vue-final-modal'
import Card from '../Card/Card.vue'
import { onUnmounted } from 'vue'

const props = defineProps({
    contentClass: {
        type: String,
        default: 'w-full max-w-xl p-2'
    }
})
const emit = defineEmits(['close'])

onUnmounted(() => emit('close'))
</script>

<template>
    <VueFinalModal
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
        class="flex justify-center items-center"
        :content-class="contentClass"
    >
        <Card styles="w-full">
            <slot />
        </Card>
    </VueFinalModal>
</template>