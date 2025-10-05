<script setup>
import { useSlots, watch } from 'vue';
import { useModal } from 'vue-final-modal';
import ModalContent from './ModalContent.vue';

const props = defineProps({
    contentClass: {
        type: String,
        default: 'w-full max-w-xl p-2'
    }
})
const open = defineModel()

const slots = useSlots()

const modal = useModal({
    component: ModalContent,
    attrs: {
        contentClass: props.contentClass,
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