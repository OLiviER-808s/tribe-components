import { FileInput } from '../../types/file';
import { TribeIconType } from '../../types/icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    label?: string;
    placeholder?: string;
    error?: string;
    addIcon?: TribeIconType;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: FileInput[];
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: FileInput[]) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: FileInput[]) => any) | undefined;
}>, {
    addIcon: TribeIconType;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
