import { TribeIconType, IconSize } from '../../types/icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    name?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    error?: string | boolean;
    success?: string | boolean;
    variant?: string;
    size?: IconSize;
    color?: string;
    styles?: string;
    label?: string;
    icon?: TribeIconType;
    placeholder?: string;
    labelStyles?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string;
    'input'?: HTMLInputElement | null;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'left-section'?(_: {}): any;
        'right-section'?(_: {}): any;
    };
    refs: {
        inputElement: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (e: Event) => any;
    "update:modelValue": (value: string) => any;
    blur: (e: Event) => any;
    focus: (e: Event) => any;
    "update:input": (value: HTMLInputElement | null) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onInput?: ((e: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onBlur?: ((e: Event) => any) | undefined;
    onFocus?: ((e: Event) => any) | undefined;
    "onUpdate:input"?: ((value: HTMLInputElement | null) => any) | undefined;
}>, {
    type: string;
    variant: string;
    color: string;
    labelStyles: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    inputElement: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
