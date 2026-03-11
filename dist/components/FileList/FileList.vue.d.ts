import { FileInput } from '../../types/file';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    files?: File[] | FileInput[];
    showDownload?: boolean;
    showDelete?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'file-icon'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    delete: (file: FileInput) => any;
    download: (file: FileInput) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onDelete?: ((file: FileInput) => any) | undefined;
    onDownload?: ((file: FileInput) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
