<script setup>
import {useToast} from "../../composables/useToast";
import {computed} from "vue";
import ToastMessage from "./ToastMessage.vue";

const props = defineProps({
    containerName: String,
    position: {
        type: String,
        default: 'top-0 right-0'
    },
})

const { toastMessages } = useToast()
const containerToastMessages = computed(() => toastMessages.value.filter(message => message.container === props.containerName))
</script>

<template>
    <div class="relative">
        <slot />

        <div v-if="containerToastMessages.length > 0" class="absolute p-4 z-50 flex flex-col gap-2 overflow-hidden" :class="position">
            <div v-for="message in containerToastMessages" :key="message.uuid">
                <slot name="toast-content" :message="message">
                    <ToastMessage :message="message" />
                </slot>
            </div>
        </div>
    </div>
</template>
