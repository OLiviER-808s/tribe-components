import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export const useIsHandheld = (threshold: number = 800): Ref<boolean> => {
    const isHandheld = ref<boolean>(innerWidth < threshold)

    const onResize = (): void => {
        isHandheld.value = innerWidth < threshold
    }

    onMounted(() => addEventListener('resize', onResize))
    onUnmounted(() => removeEventListener('resize', onResize))

    return isHandheld
}
