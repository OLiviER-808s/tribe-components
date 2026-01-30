<script setup lang="ts">
import Dropzone from '../Dropzone/Dropzone.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import FileButton from '../FileButton/FileButton.vue'
import FileList from '../FileList/FileList.vue'
import { isAcceptedFile } from '../../utils/utils'
import { FileInput } from '@/types/file'

interface Props {
    label?: string
    dropText?: string
    error?: string
    withIcon?: boolean
    limit?: number
    accept?: string
    showFileList?: boolean
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    dropText: 'Drag and drop files here, or click to select files'
})

const files = defineModel<File[]|FileInput[]>({ default: [] })

const handleUpload = (uploadedFiles: FileList | null): void => {
    if (!uploadedFiles) return

    const filesArray = Array.from(uploadedFiles)
    const validFiles = filesArray.filter((file) => isAcceptedFile(props.accept, file))

    const remainingSlots = props.limit ? props.limit - files.value.length : validFiles.length

    if (props.limit && validFiles.length > props.limit) {
        files.value.push(...validFiles.slice(0, remainingSlots))
    } else {
        files.value.push(...validFiles.slice(0, remainingSlots))
    }
}

const deleteFile = (fileToDelete: File|FileInput): void => {
    files.value = files.value.filter((file) => file !== fileToDelete)
}

const onDrop = (event: DragEvent): void => {
    handleUpload(event.dataTransfer?.files ?? null)
}

const onChange = (event: Event): void => {
    const target = event.target as HTMLInputElement
    handleUpload(target.files)
}
</script>

<template>
    <div>
        <p v-if="label" class="font-medium mb-1">{{ label }}</p>

        <div v-if="limit ? (!disabled && files.length < limit) : !disabled">
            <FileButton @change="onChange" :accept="accept">
                <Dropzone v-slot="{ isDragOver }" @drop="onDrop">
                    <div
                        class="cursor-pointer duration-300 text-center border-2 border-dashed py-6 px-4 rounded-lg"
                        :class="{
                            'bg-secondary/30': isDragOver,
                            'text-secondary border-secondary': !error,
                            'text-error border-error': error,
                        }"
                    >
                        <div v-if="withIcon" class="mb-2">
                            <FontAwesomeIcon :icon="faUpload" size="lg" />
                        </div>
                        <p class="font-medium">{{ dropText }}</p>
                    </div>
                </Dropzone>
            </FileButton>

            <p v-if="error" class="text-error text-sm mt-1">{{ error }}</p>
        </div>
        <div v-if="files.length > 0 && showFileList" :class="{ 'mt-4': !disabled }">
            <FileList :files="files" :show-delete="!disabled" @delete="deleteFile" />
        </div>
    </div>
</template>
