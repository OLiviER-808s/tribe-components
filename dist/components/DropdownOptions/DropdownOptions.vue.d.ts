import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    container?: HTMLElement | null;
    options?: any[];
    optionLabel?: string;
    trackBy?: string;
    optionDescription?: string;
    width?: string;
    direction?: string;
    open?: boolean;
    acceptsEmptySelection?: boolean;
}
declare function __VLS_template(): any;
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    select: (option?: any) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((option?: any) => any) | undefined;
}>, {
    width: string;
    direction: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, any, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
