<script setup>
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DragAndDropFiles from './DragAndDropFiles.vue'
import MediaCarousel from './MediaCarousel.vue'
import AttachmentList from './AttachmentList.vue'
import FileButton from './FileButton.vue'
import IconButton from './IconButton.vue'
import { computed, ref } from 'vue'
import { useFiles } from '../composables/useFiles'

const props = defineProps({
    label: String,
    placeholder: String,
    error: String,
})
const files = defineModel()

const selectedIdx = ref(0)

const { formatFiles } = useFiles()

const addFiles = (event) => files.value.push(...event.target.files)

const formattedFiles = computed(() => formatFiles(files.value))
</script>

<template>
    <div>
        <label v-if="label" class="font-medium mb-1">{{ label }}</label>

        <div class="mb-2" v-if="files.length > 0">
            <MediaCarousel v-model:selected-idx="selectedIdx" :files="formattedFiles" />

            <AttachmentList
                v-model:selected-idx="selectedIdx"
                v-model:files="files"
            >
                <template #additional-items-after>
                    <FileButton @change="addFiles" accept="image/*">
                        <IconButton
                            :icon="faPlus"
                            color="secondary"
                            variant="dashed"
                            styles="!w-14 !h-14 !rounded-md"
                        />
                    </FileButton>
                </template>
            </AttachmentList>

            <p v-if="error" class="text-error text-sm mt-1">{{ error }}</p>
        </div>
        <DragAndDropFiles v-else with-icon :drop-text="placeholder" v-model="files" :error="error" />
    </div>
</template>
