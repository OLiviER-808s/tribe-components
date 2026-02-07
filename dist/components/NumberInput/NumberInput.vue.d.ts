import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    label?: string;
    icon?: IconDefinition;
    placeholder?: string;
    styles?: string;
    error?: string;
    min?: number;
    max?: number;
    variant?: string;
    size?: string;
    color?: string;
    disabled?: boolean;
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
    min: number;
    max: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
