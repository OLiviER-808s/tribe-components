import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Cell {
    content?: string;
    width?: number | string;
    height?: number | string;
    align?: 'left' | 'center' | 'right';
    class?: string;
    colspan?: number;
    rowspan?: number;
}
interface Row {
    cells?: Cell[];
    class?: string;
    onClick?: (row: Row, index: number) => void;
}
interface Props {
    rows: Row[] | Cell[][];
    headerClasses?: string;
    onRowClick?: (row: Row | Cell[], index: number) => void;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`${string}${number}`, (_: {}) => any>>;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
