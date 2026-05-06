<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import IconButton from '../IconButton/IconButton.vue'
import HoverBox from '../HoverBox/HoverBox.vue'
import CopyIcon from '../icons/CopyIcon.vue'
import type { CodeSnippetProps } from './CodeSnippet.types'

const props = withDefaults(defineProps<CodeSnippetProps>(), {
    copyIcon: () => CopyIcon
})

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
                <IconButton :icon="copyIcon" color="card" @click="copySnippet()" />
            </div>
        </div>
    </HoverBox>
</template>
