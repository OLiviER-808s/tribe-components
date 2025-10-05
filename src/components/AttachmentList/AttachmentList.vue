<script setup>
import { faFile, faHeadphones, faVideoCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {computed, ref, watch} from 'vue'
import Draggable from 'vuedraggable'
import { useIsHandheld } from '../../composables/useIsHandheld'
import {useFiles} from "../../composables/useFiles"
import {reorderElementInArray} from "../../utils/utils"

const props = defineProps({
    size: String,
})
const files = defineModel('files', { type: Array, required: true })
const selectedIdx = defineModel('selectedIdx', { default: 0 })

const isHandheld = useIsHandheld()
const { formatFiles } = useFiles()

const hoveredIdx = ref(-1)
const formattedFiles = ref(formatFiles(props.files))

const removeFile = (idx) => {
    files.value = files.value.filter((file, i) => i !== idx)

    if (selectedIdx.value > idx) selectedIdx.value -= 1
}

const handleOrderChange = ({ moved: { oldIndex, newIndex } }) => {
    files.value = reorderElementInArray(files.value, oldIndex, newIndex)

    if (selectedIdx.value === oldIndex)
        selectedIdx.value = newIndex
    else if (selectedIdx.value > oldIndex && selectedIdx.value <= newIndex)
        selectedIdx.value--
    else if (selectedIdx.value < oldIndex && selectedIdx.value >= newIndex)
        selectedIdx.value++
}

const sizeStyles = computed(() => (props.size === 'lg' ? 'w-16 h-16' : 'w-14 h-14'))

watch(files, () => formattedFiles.value = formatFiles(props.files))
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
                            <FontAwesomeIcon v-if="file.type === 'audio'" :icon="faHeadphones" size="lg" />
                            <FontAwesomeIcon v-else-if="file.type === 'video'" :icon="faVideoCamera" size="lg" />
                            <FontAwesomeIcon v-else :icon="faFile" size="lg" />
                        </span>
                    </button>

                    <button
                        @click="removeFile(idx)"
                        v-if="hoveredIdx === idx || isHandheld"
                        class="absolute cursor-pointer top-0 right-0 text-secondary-text bg-card/80 rounded-full w-5 h-5 flex justify-center items-center"
                    >
                        <FontAwesomeIcon :icon="faXmark" size="xs" />
                    </button>
                </div>
            </template>
        </Draggable>

        <slot name="additional-items-after" />
    </div>
</template>
