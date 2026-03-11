<script setup lang="ts">
import DownloadIcon from '../icons/DownloadIcon.vue'
import FileIcon from '../icons/FileIcon.vue'
import XMarkIcon from '../icons/XMarkIcon.vue'
import IconButton from '../IconButton/IconButton.vue'
import { FileInput } from '@/types/file'

interface Props {
    files?: File[]|FileInput[]
    showDownload?: boolean
    showDelete?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
    download: [file: File|FileInput]
    delete: [file: File|FileInput]
}>()
</script>

<template>
    <div class="flex flex-col gap-2 text-sm">
        <div v-for="file in files" class="flex gap-2 items-center">
            <div v-if="showDownload">
                <IconButton
                    :icon="DownloadIcon"
                    @click="emit('download', file)"
                    variant="light"
                    color="secondary"
                />
            </div>
            <div v-else class="text-xl">
                <slot name="file-icon">
                    <FileIcon class="w-5 h-5" />
                </slot>
            </div>

            <p>{{ file.name }}</p>

            <div class="flex-grow"></div>

            <div v-if="showDelete" class="text-sm">
                <IconButton
                    :icon="XMarkIcon"
                    @click="emit('delete', file)"
                    color="error"
                    variant="light"
                    size="sm"
                />
            </div>
        </div>
    </div>
</template>
