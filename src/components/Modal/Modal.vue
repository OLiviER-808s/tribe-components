<script setup lang="ts">
import { useSlots, watch } from 'vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalContent from './ModalContent.vue'
import type { ModalProps } from './Modal.types'

const props = withDefaults(defineProps<ModalProps>(), {
    contentClass: 'w-full max-w-xl p-2',
    clickToClose: true,
    escToClose: true
})

const open = defineModel<boolean>()

const slots = useSlots()

const modal = useModal({
    component: ModalContent,
    attrs: {
        contentClass: props.contentClass,
        clickToClose: props.clickToClose,
        escToClose: props.escToClose,
        onClose: () => {
            open.value = false
        }
    },
    slots: {
        default: slots.default
    }
})

watch(open, () => {
    if (open.value === true) modal.open()
    else if (open.value === false) modal.close()
})
</script>

<template>
    <ModalsContainer />
</template>