import { v4 as uuidv4 } from 'uuid'

export const useFiles = () => {
    const readableFileSize = (bytes) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

        const i = Math.floor(Math.log(bytes) / Math.log(1024))
        const size = Math.round(bytes / Math.pow(1024, i))

        return `${size} ${sizes[i]}`
    }

    const formatFiles = (files) => {
        return files?.map((file) => {
            if (file.uuid) return file

            return {
                name: file.name,
                size: file.size,
                uuid: uuidv4(),
                preview: URL.createObjectURL(file),
                type: file.type?.split('/')[0],
            }
        })
    }

    return { readableFileSize, formatFiles }
}
