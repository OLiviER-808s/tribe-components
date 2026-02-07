import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    color?: string;
    variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'dashed';
    styles?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    hoverEffects?: boolean;
    textColor?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (e: Event) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((e: Event) => any) | undefined;
}>, {
    styles: string;
    type: "button" | "submit" | "reset";
    variant: "filled" | "light" | "outline" | "subtle" | "dashed";
    color: string;
    disabled: boolean;
    href: string;
    hoverEffects: boolean;
    textColor: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
