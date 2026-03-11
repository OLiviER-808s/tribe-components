import { TribeIconType } from '../../types/icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Step {
    value: string | number;
    label: string;
    icon?: TribeIconType;
}
interface Props {
    steps: Step[];
    color?: string;
    variant?: 'classic' | 'minimalist';
    canMoveForwards?: boolean;
    canMoveBackwards?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string | number;
} & __VLS_Props;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    variant: "classic" | "minimalist";
    color: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
