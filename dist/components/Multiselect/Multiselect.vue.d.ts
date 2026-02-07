import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconSize } from '../../types/icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    options?: any[];
    label?: string;
    optionLabel?: string;
    trackBy?: string;
    searchable?: boolean;
    icon?: IconDefinition;
    error?: string | boolean;
    placeholder?: string;
    size?: IconSize;
    variant?: string;
    color?: string;
    formatResult?: (option: any) => any;
    styles?: string;
    textboxStyles?: string;
    acceptsEmptySelection?: boolean;
    acceptsDuplicates?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: any[];
    'searchQuery'?: string;
    'input'?: HTMLInputElement | null;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        selectedTag?(_: {
            option: any;
            deselect: () => void;
        }): any;
        option?(_: {
            option: any;
        }): any;
    };
    refs: {
        dropdownContainer: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    select: (option: any) => any;
    "update:modelValue": (value: any[]) => any;
    blur: (e: Event) => any;
    focus: (e: Event) => any;
    "update:input": (value: HTMLInputElement | null) => any;
    "update:searchQuery": (value: string) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((option: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    onBlur?: ((e: Event) => any) | undefined;
    onFocus?: ((e: Event) => any) | undefined;
    "onUpdate:input"?: ((value: HTMLInputElement | null) => any) | undefined;
    "onUpdate:searchQuery"?: ((value: string) => any) | undefined;
}>, {
    variant: string;
    color: string;
    placeholder: string;
    formatResult: (option: any) => any;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    dropdownContainer: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
