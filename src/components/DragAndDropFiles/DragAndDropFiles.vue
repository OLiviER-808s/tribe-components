<script setup>
import { ref } from 'vue'
import Dropzone from '../Dropzone/Dropzone.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import FileButton from '../FileButton/FileButton.vue'

const props = defineProps({
    label: String,
    dropText: {
        type: String,
        default: 'Drag and drop files here, or click to select files',
    },
    error: String,
    withIcon: Boolean,
})
const model = defineModel()

const handleUpload = (fileList) => model.value = Array.from(fileList)

const onDrop = (event) => handleUpload(event.dataTransfer.files)
const onChange = (event) => handleUpload(event.target.files)
</script>

<template>
    <div>
        <p v-if="label" class="font-medium mb-1">{{ label }}</p>

        <div>
            <FileButton @change="onChange" accept="image/*">
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
    </div>
</template>
