import { TribeIconType } from '../../types/icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    snippet?: string;
    allowCopy?: boolean;
    styles?: string;
    copyIcon?: TribeIconType;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
    copyIcon: TribeIconType;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
