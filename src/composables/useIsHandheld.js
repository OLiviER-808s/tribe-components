import { ref, onMounted, onUnmounted } from 'vue'

export const useIsHandheld = (threshold = 800) => {
    const isHandheld = ref(innerWidth < threshold)

    const onResize = () => (isHandheld.value = innerWidth < threshold)

    onMounted(() => addEventListener('resize', onResize))
    onUnmounted(() => removeEventListener('resize', onResize))

    return isHandheld
}
