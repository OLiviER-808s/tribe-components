import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    value?: string | boolean;
    label?: string;
    name?: string;
    modelValue?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string | boolean;
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    select: (e: Event) => any;
    "update:modelValue": (value: string | boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((e: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLLabelElement>;
export default _default;
