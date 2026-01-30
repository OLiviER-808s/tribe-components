<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload, faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
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
                    :icon="faDownload"
                    @click="emit('download', file)"
                    variant="light"
                    color="secondary"
                />
            </div>
            <div v-else class="text-xl">
                <FontAwesomeIcon :icon="faFile" />
            </div>

            <p>{{ file.name }}</p>

            <div class="flex-grow"></div>

            <div v-if="showDelete" class="text-sm">
                <IconButton
                    :icon="faXmark"
                    @click="emit('delete', file)"
                    color="error"
                    variant="light"
                    size="sm"
                />
            </div>
        </div>
    </div>
</template>
