import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    options?: any[];
    label?: string;
    trackBy?: string;
    direction?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {}): any;
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
declare const __VLS_component: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    select: (option: any) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((option: any) => any) | undefined;
}>, {
    label: string;
    trackBy: string;
    direction: string;
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
