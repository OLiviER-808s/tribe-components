export interface AvatarGroupProps {
    /**
     * Array of avatar image URLs
     */
    avatars?: string[]
    /**
     * Width CSS class for each avatar
     * @default 'w-6'
     */
    width?: string
    /**
     * Overlap amount in pixels
     * @default 12
     */
    overlap?: number
}

export interface AvatarGroupSlots {}

export interface AvatarGroupEmits {}
