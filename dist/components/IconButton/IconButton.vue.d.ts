import { TribeIconType, IconSize } from '../../types/icon';
import { ButtonVariant, ButtonType } from '../../types/button';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Props {
    icon: TribeIconType;
    size?: IconSize;
    color?: string;
    variant?: ButtonVariant;
    styles?: string;
    disabled?: boolean;
    type?: ButtonType;
    href?: string;
    hoverEffects?: boolean;
    textColor?: string;
    padding?: string;
}
declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (e: Event) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((e: Event) => any) | undefined;
}>, {
    styles: string;
    padding: string;
    type: ButtonType;
    variant: ButtonVariant;
    size: "lg" | "xs" | "2xs" | "sm" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
    color: string;
    disabled: boolean;
    href: string;
    hoverEffects: boolean;
    textColor: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
