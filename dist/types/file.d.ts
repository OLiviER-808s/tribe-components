export interface FormattedFile {
    name: string;
    size: number;
    uuid: string;
    preview: string;
    type: 'image' | 'audio' | 'video' | string;
}
export type FileInput = File | FormattedFile;
