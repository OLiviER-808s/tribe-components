<script setup lang="ts">
import DragAndDropFiles from '../DragAndDropFiles/DragAndDropFiles.vue'
import PlusIcon from '../icons/PlusIcon.vue'
import MediaCarousel from '../MediaCarousel/MediaCarousel.vue'
import AttachmentList from '../AttachmentList/AttachmentList.vue'
import FileButton from '../FileButton/FileButton.vue'
import IconButton from '../IconButton/IconButton.vue'
import { computed, ref } from 'vue'
import { useFiles } from '../../composables/useFiles'
import type { FileInput } from '../../types/file'
import type { MediaInputProps } from './MediaInput.types'

const props = withDefaults(defineProps<MediaInputProps>(), {
    addIcon: () => PlusIcon
})

const files = defineModel<FileInput[]>({ default: [] })

const selectedIdx = ref<number>(0)

const { formatFiles } = useFiles()

const addFiles = (event: Event): void => {
    const target = event.target as HTMLInputElement
    if (target.files) {
        files.value.push(...Array.from(target.files))
    }
}

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
                            :icon="addIcon"
                            color="secondary"
                            variant="dashed"
                            styles="w-14! h-14! rounded-md!"
                        />
                    </FileButton>
                </template>
            </AttachmentList>

            <p v-if="error" class="text-error text-sm mt-1">{{ error }}</p>
        </div>
        <DragAndDropFiles v-else with-icon :drop-text="placeholder" v-model="files" :error="error" />
    </div>
</template>
