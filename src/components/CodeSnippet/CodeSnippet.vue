<script setup lang="ts">
import { ref } from 'vue'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useClipboard } from '@vueuse/core'
import IconButton from '../IconButton/IconButton.vue'
import HoverBox from '../HoverBox/HoverBox.vue'

interface Props {
    snippet?: string
    allowCopy?: boolean
    styles?: string
}

const props = defineProps<Props>()

const hovering = ref<boolean>(false)

const { copy } = useClipboard()

const copySnippet = async (): Promise<void> => {
    if (props.snippet) {
        await copy(props.snippet)
    }
}
</script>

<template>
    <HoverBox v-model="hovering">
        <div :class="styles" class="p-2 rounded-lg bg-base whitespace-pre-wrap text-sm font-mono relative overflow-auto">
            <p>{{ snippet }}</p>

            <div v-if="allowCopy && hovering" class="p-2 absolute top-0 right-0 text-sm">
                <IconButton :icon="faCopy" color="card" @click="copySnippet()" />
            </div>
        </div>
    </HoverBox>
</template>
