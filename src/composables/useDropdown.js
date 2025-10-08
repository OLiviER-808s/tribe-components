import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useDropdown = () => {
    const dropdownOpen = ref(false)
    const dropdownContainer = ref(null)

    const open = () => dropdownOpen.value = true
    const close = () => dropdownOpen.value = false

    const handleClickOutside = (event) => {
        if (!dropdownContainer.value.contains(event.target)) {
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
