import { v4 as uuidv4 } from 'uuid'
import type { FileInput, FormattedFile } from '../types/file'

export const useFiles = () => {
    const readableFileSize = (bytes: number): string => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

        const i = Math.floor(Math.log(bytes) / Math.log(1024))
        const size = Math.round(bytes / Math.pow(1024, i))

        return `${size} ${sizes[i]}`
    }

    const formatFiles = (files: FileInput[]): FormattedFile[] => {
        return files?.map((file): FormattedFile => {
            if ('uuid' in file && file.uuid) return file as FormattedFile

            return {
                name: file.name,
                size: file.size,
                uuid: uuidv4(),
                preview: URL.createObjectURL(file as File),
                type: (file as File).type?.split('/')[0] || '',
            }
        }) || []
    }

    return { readableFileSize, formatFiles }
}
