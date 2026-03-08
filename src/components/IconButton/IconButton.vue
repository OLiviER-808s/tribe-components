<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from '../Button/Button.vue'
import { computed } from 'vue'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconSize } from '@/types/icon'

interface Props {
    icon: IconDefinition
    size?: IconSize
    color?: string
    variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'dashed'
    styles?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    href?: string
    hoverEffects?: boolean
    textColor?: string
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
    textColor: ''
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
        :styles="`${styles} ${btnSize} flex justify-center items-center px-0! py-0!`"
        :href="href"
        :type="type"
        :color="color"
        :disabled="disabled"
        :variant="variant"
        :hover-effects="hoverEffects"
        :text-color="textColor"
        @click="e => emit('click', e)"
    >
        <FontAwesomeIcon :size="size" :icon="icon" />
    </Button>
</template>
