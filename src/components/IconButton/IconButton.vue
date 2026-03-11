<script setup lang="ts">
import TribeIcon from '../TribeIcon/TribeIcon.vue'
import Button from '../Button/Button.vue'
import { computed } from 'vue'
import type { TribeIconType, IconSize } from '@/types/icon'

interface Props {
    icon: TribeIconType
    size?: IconSize
    color?: string
    variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'dashed'
    styles?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    href?: string
    hoverEffects?: boolean
    textColor?: string
    padding?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: undefined,
    color: 'primary',
    variant: 'filled',
    styles: '',
    disabled: false,
    type: 'button',
    href: '',
    hoverEffects: true,
    textColor: '',
    padding: 'p-0'
})

const emit = defineEmits<{
    click: [e: Event]
}>()

const btnSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'w-6 h-6'
        case 'lg':
            return 'w-10 h-10'
        case 'xl':
            return 'w-12 h-12'
        default:
            return 'w-8 h-8'
    }
})
</script>

<template>
    <Button
        :styles="`${styles} ${btnSize} flex justify-center items-center`"
        :padding="padding"
        :href="href"
        :type="type"
        :color="color"
        :disabled="disabled"
        :variant="variant"
        :hover-effects="hoverEffects"
        :text-color="textColor"
        @click="e => emit('click', e)"
    >
        <TribeIcon :size="size" :icon="icon" />
    </Button>
</template>
