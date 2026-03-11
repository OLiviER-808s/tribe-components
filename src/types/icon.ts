import type { Component } from 'vue'

export type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined

export type TribeIconType = object | Component

export function isFAIconDefinition(icon: unknown): boolean {
    return typeof icon === 'object' && icon !== null && 'prefix' in icon && 'iconName' in icon && 'icon' in icon
}
