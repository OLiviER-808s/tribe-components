export interface Tab {
    /**
     * The unique name identifier for the tab
     */
    name: string
    /**
     * The display label for the tab
     */
    label: string
    /**
     * Whether to show an error indicator
     */
    error?: boolean
}

export interface TabsProps {
    /**
     * Array of tabs to display
     */
    tabs?: Tab[]
    /**
     * Whether tabs should stretch to fill width
     */
    stretch?: boolean
    /**
     * The text size
     * @default 'lg'
     */
    size?: string
}

export interface TabsSlots {
    /**
     * Dynamic slots for each tab content (e.g., tab-profile, tab-settings)
     */
    [key: `tab-${string}`]: (() => any) | undefined
}

export interface TabsEmits {
    /**
     * Emitted when the selected tab changes
     */
    'update:selectedTab': [value: string]
}
