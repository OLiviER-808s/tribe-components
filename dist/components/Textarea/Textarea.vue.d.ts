import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    name?: string;
    disabled?: boolean;
    error?: string | boolean;
    success?: string | boolean;
    label?: string;
    placeholder?: string;
    modelValue?: string;
    maxlength?: number;
    styles?: string;
    variant?: string;
    color?: string;
    rows?: number;
    fieldSizingContent?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string;
    'input'?: HTMLTextAreaElement | null;
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (e: Event) => any;
    "update:modelValue": (value: string) => any;
    blur: (e: Event) => any;
    focus: (e: Event) => any;
    "update:input": (value: HTMLTextAreaElement | null) => any;
    keyPress: (e: KeyboardEvent) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInput?: ((e: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onBlur?: ((e: Event) => any) | undefined;
    onFocus?: ((e: Event) => any) | undefined;
    "onUpdate:input"?: ((value: HTMLTextAreaElement | null) => any) | undefined;
    onKeyPress?: ((e: KeyboardEvent) => any) | undefined;
}>, {
    variant: string;
    color: string;
    rows: number;
    fieldSizingContent: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    inputElement: HTMLTextAreaElement;
}, HTMLDivElement>;
export default _default;
