<script setup lang="ts">
interface Props {
    label?: string
}

const props = defineProps<Props>()
</script>

<template>
    <div class="flex items-center justify-center">
        <div>
            <div class="spinner border-4 border-base border-t-primary"></div>

            <p v-if="label" class="text-center font-medium mt-2">{{ label }}</p>
        </div>
    </div>
</template>

<style scoped>
.spinner {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
