<script setup>
import { useToast } from "../../composables/useToast"
import { computed, ref, onMounted, onUnmounted } from "vue"
import ToastMessage from "./ToastMessage.vue"

const props = defineProps({
    containerName: String,
    offset: {
        type: Number,
        default: 16, // padding from edges
    },
})

const { toastMessages } = useToast()

const containerToastMessages = computed(() =>
    toastMessages.value.filter(
        (message) => message.container === props.containerName
    )
)

const containerRef = ref(null)
const toastStyles = ref({})

let ticking = false;

const updatePosition = () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            if (!containerRef.value) return;

            const rect = containerRef.value.getBoundingClientRect();

            toastStyles.value = {
                top: `${rect.top + props.offset}px`,
                left: `${rect.right - props.offset}px`,
                transform: "translateX(-100%)",
            };

            ticking = false;
        });

        ticking = true;
    }
};

onMounted(() => {
    updatePosition()

    window.addEventListener("scroll", updatePosition, true)
    window.addEventListener("resize", updatePosition)
})

onUnmounted(() => {
    window.removeEventListener("scroll", updatePosition, true)
    window.removeEventListener("resize", updatePosition)
})
</script>

<template>
    <div ref="containerRef" class="relative">
        <slot />
    </div>

    <Teleport to="body">
        <div
            v-if="containerToastMessages.length > 0"
            class="fixed p-4 z-50 flex flex-col gap-2 pointer-events-none"
            :style="toastStyles"
        >
            <div
                v-for="message in containerToastMessages"
                :key="message.uuid"
                class="pointer-events-auto"
            >
                <slot name="toast-content" :message="message">
                    <ToastMessage :message="message" />
                </slot>
            </div>
        </div>
    </Teleport>
</template>
