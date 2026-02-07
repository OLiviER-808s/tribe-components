import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    currencySymbol?: string;
    variant?: string;
    size?: string;
    color?: string;
    label?: string;
    error?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: number | string;
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    variant: string;
    color: string;
    currencySymbol: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
