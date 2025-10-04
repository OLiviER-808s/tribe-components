<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        default: "top",
    },
})

const visible = ref(false)

const positionStyles = computed(() => {
    let styles

    switch (props.position) {
        case 'right':
            styles = 'left-full pl-4'
            break
        // Add when needed
    }

    return styles
})
</script>

<template>
    <div class="relative flex items-center" @mouseenter="visible = true" @mouseleave="visible = false">
        <slot></slot>

        <Transition name="fade">
            <div v-if="visible" :class="[positionStyles, 'absolute delay-1000 z-50']">
                <div class="rounded-md bg-dropdown/80 text-dropdown-text p-1 text-xs text-nowrap">
                    {{ text }}
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
