import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export const useDropdown = () => {
    const dropdownOpen = ref(false)
    const dropdownContainer: Ref<HTMLElement | null> = ref(null)

    const open = () => dropdownOpen.value = true
    const close = () => dropdownOpen.value = false

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as Node)) {
            close()
        }
    }

    onMounted(() => {
        document.addEventListener('mousedown', handleClickOutside)
    })
    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', handleClickOutside)
    })

    return { dropdownOpen, dropdownContainer, open, close }
}
