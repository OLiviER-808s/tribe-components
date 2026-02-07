import { FileInput } from '../../types/file';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    files?: File[] | FileInput[];
    showDownload?: boolean;
    showDelete?: boolean;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    download: (file: FileInput) => any;
    delete: (file: FileInput) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onDownload?: ((file: FileInput) => any) | undefined;
    onDelete?: ((file: FileInput) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
