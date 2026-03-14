<script setup lang="ts">
import {useToast} from "../../composables/useToast";
import XMarkIcon from '../icons/XMarkIcon.vue'
import {onMounted} from "vue";
import { ToastMessage } from "@/types/toast";
import type { TribeIconType } from '../../types/icon'

interface Props {
    message: ToastMessage
    closeIcon?: TribeIconType
}

const props = withDefaults(defineProps<Props>(), {
    closeIcon: () => XMarkIcon
})

const { closeToast } = useToast()

onMounted(() => {
    if (props.message.duration) setTimeout(() => closeToast(props.message.uuid), props.message.duration)
})
</script>

<template>
    <Transition name="slide-fade" appear>
        <div :class="`w-72 flex items-center gap-2 rounded-md p-2 bg-${message.color ?? 'success'}/${message.opacity ?? 60}`">
            <div class="grow">
                <p class="text-sm font-medium">{{ message.title }}</p>
                <p class="text-sm">{{ message.content }}</p>
            </div>

            <IconButton :icon="closeIcon" color="base" variant="subtle" @click="closeToast(message.uuid)" />
        </div>
    </Transition>
</template>
