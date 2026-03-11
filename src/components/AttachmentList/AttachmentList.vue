<script setup lang="ts">
import FileIcon from '../icons/FileIcon.vue'
import HeadphonesIcon from '../icons/HeadphonesIcon.vue'
import VideoCameraIcon from '../icons/VideoCameraIcon.vue'
import XMarkIcon from '../icons/XMarkIcon.vue'
import { computed, ref, watch } from 'vue'
import Draggable from 'vuedraggable'
import { useIsHandheld } from '../../composables/useIsHandheld'
import { useFiles } from '../../composables/useFiles'
import { reorderElementInArray } from '../../utils/utils'
import type { FileInput, FormattedFile } from '../../types/file'

interface Props {
    size?: 'lg' | 'md'
}

interface DragChangeEvent {
    moved: {
        oldIndex: number
        newIndex: number
    }
}

const props = defineProps<Props>()

const files = defineModel<FileInput[]>('files', { required: true })
const selectedIdx = defineModel<number>('selectedIdx', { default: 0 })

const isHandheld = useIsHandheld()
const { formatFiles } = useFiles()

const hoveredIdx = ref<number>(-1)
const formattedFiles = ref<FormattedFile[]>(formatFiles(files.value))

const removeFile = (idx: number): void => {
    files.value = files.value.filter((file, i) => i !== idx)

    if (selectedIdx.value > idx) selectedIdx.value -= 1
}

const handleOrderChange = ({ moved: { oldIndex, newIndex } }: DragChangeEvent): void => {
    files.value = reorderElementInArray(files.value, oldIndex, newIndex)

    if (selectedIdx.value === oldIndex)
        selectedIdx.value = newIndex
    else if (selectedIdx.value > oldIndex && selectedIdx.value <= newIndex)
        selectedIdx.value--
    else if (selectedIdx.value < oldIndex && selectedIdx.value >= newIndex)
        selectedIdx.value++
}

const sizeStyles = computed(() => (props.size === 'lg' ? 'w-16 h-16' : 'w-14 h-14'))

watch(files, () => formattedFiles.value = formatFiles(files.value))
</script>

<template>
    <div class="flex justify-center gap-2 w-full p-4">
        <slot name="additional-items-before" />

        <Draggable
            v-model="formattedFiles"
            item-key="uuid"
            :swap-threshold="0.65"
            :animation="200"
            class="flex gap-2"
            @change="handleOrderChange"
        >
            <template #item="{ element: file, index: idx }">
                <div
                    :class="`relative border-secondary rounded-md ${sizeStyles} ${selectedIdx === idx ? 'border-3 bg-secondary' : ''}`"
                    @mouseenter="hoveredIdx = idx"
                    @mouseleave="hoveredIdx = -1"
                >
                    <button class="w-full h-full" @click="selectedIdx = idx">
                        <img
                            v-if="file.type === 'image'"
                            :src="file.preview"
                            :alt="file.name"
                            class="w-full h-full object-cover rounded-md"
                        />
                        <span
                            v-else
                            class="w-full h-full flex items-center justify-center text-secondary-text bg-card rounded-md"
                        >
                            <slot v-if="file.type === 'audio'" name="audio-icon">
                                <HeadphonesIcon class="w-5 h-5" />
                            </slot>
                            <slot v-else-if="file.type === 'video'" name="video-icon">
                                <VideoCameraIcon class="w-5 h-5" />
                            </slot>
                            <slot v-else name="file-icon">
                                <FileIcon class="w-5 h-5" />
                            </slot>
                        </span>
                    </button>

                    <button
                        @click="removeFile(idx)"
                        v-if="hoveredIdx === idx || isHandheld"
                        class="absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
                    >
                        <slot name="remove-icon">
                            <XMarkIcon class="w-3 h-3" />
                        </slot>
                    </button>
                </div>
            </template>
        </Draggable>

        <slot name="additional-items-after" />
    </div>
</template>
