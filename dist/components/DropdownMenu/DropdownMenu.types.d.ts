export interface DropdownMenuProps {
    /**
     * Array of options to display
     */
    options?: any[];
    /**
     * The property name to use as the label
     * @default 'label'
     */
    label?: string;
    /**
     * The property name to use for tracking
     * @default 'value'
     */
    trackBy?: string;
    /**
     * Dropdown alignment direction
     * @default 'left'
     */
    direction?: string;
}
export interface DropdownMenuSlots {
    /**
     * Slot for the trigger element
     */
    trigger?: () => any;
    /**
     * Slot for custom option rendering
     */
    option?: (props: {
        option: any;
    }) => any;
}
export interface DropdownMenuEmits {
    /**
     * Emitted when an option is selected
     */
    select: [option: any];
}
