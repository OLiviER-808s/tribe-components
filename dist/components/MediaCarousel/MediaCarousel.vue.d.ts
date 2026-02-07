import { FormattedFile } from '../../types/file';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    files?: FormattedFile[];
    maxMediaHeight?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    'selectedIdx'?: number;
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:selectedIdx": (value: number) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:selectedIdx"?: ((value: number) => any) | undefined;
}>, {
    maxMediaHeight: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
