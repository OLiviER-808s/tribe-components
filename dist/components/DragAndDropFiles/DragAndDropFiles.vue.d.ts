import { FileInput } from '../../types/file';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    label?: string;
    dropText?: string;
    error?: string;
    withIcon?: boolean;
    limit?: number;
    accept?: string;
    showFileList?: boolean;
    disabled?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: File[] | FileInput[];
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: FileInput[] | File[]) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: FileInput[] | File[]) => any) | undefined;
}>, {
    dropText: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
