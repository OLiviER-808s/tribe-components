import { Component } from 'vue';
export type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined;
export type TribeIconType = object | Component;
export declare function isFAIconDefinition(icon: unknown): boolean;
