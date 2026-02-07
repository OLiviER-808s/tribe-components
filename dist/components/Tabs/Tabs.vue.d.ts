import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Tab {
    name: string;
    label: string;
    error?: boolean;
}
interface Props {
    tabs?: Tab[];
    stretch?: boolean;
    size?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    'selectedTab'?: string;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`tab-${string}`, (_: {}) => any>>;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:selectedTab": (value: string) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:selectedTab"?: ((value: string) => any) | undefined;
}>, {
    size: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
