<script setup lang="ts">
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useToast} from "../../composables/useToast";
import {onMounted} from "vue";
import { ToastMessage } from "@/types/toast";

interface Props {
    message: ToastMessage
}

const props = defineProps<Props>()

const { closeToast } = useToast()

onMounted(() => {
    if (props.message.duration) setTimeout(() => closeToast(props.message.uuid), props.message.duration)
})
</script>

<template>
    <Transition name="slide-fade" appear>
        <div :class="`w-72 flex items-center gap-2 rounded-md p-2 bg-${message.color ?? 'success'}/${message.opacity ?? 60}`">
            <div class="flex-grow">
                <p class="text-sm font-medium">{{ message.title }}</p>
                <p class="text-sm">{{ message.content }}</p>
            </div>

            <IconButton :icon="faXmark" color="base" variant="subtle" @click="closeToast(message.uuid)" />
        </div>
    </Transition>
</template>
