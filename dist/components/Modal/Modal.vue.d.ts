import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    contentClass?: string;
    clickToClose?: boolean;
    escToClose?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: boolean;
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    contentClass: string;
    clickToClose: boolean;
    escToClose: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
