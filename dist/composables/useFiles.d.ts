import { FileInput, FormattedFile } from '../types/file';
export declare const useFiles: () => {
    readableFileSize: (bytes: number) => string;
    formatFiles: (files: FileInput[]) => FormattedFile[];
};
