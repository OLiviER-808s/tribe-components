<script setup>
import { useSlots, watch } from 'vue';
import { ModalsContainer, useModal } from 'vue-final-modal';
import ModalContent from './ModalContent.vue';

const props = defineProps({
    contentClass: {
        type: String,
        default: 'w-full max-w-xl p-2'
    },
    clickToClose: {
        type: Boolean,
        default: true
    },
    escToClose: {
        type: Boolean,
        default: true
    },
})
const open = defineModel()

const slots = useSlots()

const modal = useModal({
    component: ModalContent,
    attrs: {
        contentClass: props.contentClass,
        clickToClose: props.clickToClose,
        escToClose: props.escToClose,
        onClose: () => open.value = false,
    },
    slots: {
        default: slots.default
    },
})

watch(open, () => {
    if (open.value === true) modal.open()
    else if (open.value === false) modal.close()
})
</script>

<template>
    <ModalsContainer />
</template>