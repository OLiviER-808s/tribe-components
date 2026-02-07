import { Ref } from 'vue';
export declare const useDropdown: () => {
    dropdownOpen: Ref<boolean, boolean>;
    dropdownContainer: Ref<HTMLElement | null, HTMLElement | null>;
    open: () => boolean;
    close: () => boolean;
};
