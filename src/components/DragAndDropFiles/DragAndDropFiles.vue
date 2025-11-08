<script setup>
import { ref } from 'vue'
import Dropzone from '../Dropzone/Dropzone.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import FileButton from '../FileButton/FileButton.vue'
import FileList from '../FileList/FileList.vue'
import { isAcceptedFile } from '../../utils/utils'

const props = defineProps({
    label: String,
    dropText: {
        type: String,
        default: 'Drag and drop files here, or click to select files',
    },
    error: String,
    withIcon: Boolean,
    limit: Number,
    accept: String,
    showFileList: Boolean,
    disabled: Boolean,
})
const files = defineModel({ default: [] })

const handleUpload = (uploadedFiles) => {
    const filesArray = Array.from(uploadedFiles)
    const validFiles = filesArray.filter((file) => isAcceptedFile(props.accept, file))

    const remainingSlots = props.limit ? props.limit - files.value.length : validFiles.length

    if (props.limit && (validFiles.length) > props.limit) {
        files.value.push(...validFiles.slice(0, remainingSlots))
    } else {
        files.value.push(...validFiles.slice(0, remainingSlots))
    }
}

const deleteFile = (fileToDelete) => {
    files.value = files.value.filter((file) => file !== fileToDelete)
}

const onDrop = (event) => handleUpload(event.dataTransfer.files)
const onChange = (event) => handleUpload(event.target.files)
</script>

<template>
    <div>
        <p v-if="label" class="font-medium mb-1">{{ label }}</p>

        <div v-if="!disabled">
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
        <div v-if="files.length > 0 && showFileList" :class="{ 'mt-2': disabled }">
            <FileList :files="files" :show-delete="!disabled" @delete="deleteFile" />
        </div>
    </div>
</template>
