<script setup lang="ts">
import Textbox from '../Textbox/Textbox.vue'
import { computed } from 'vue'
import { countDecimals } from '../../utils/utils'

interface Props {
    currencySymbol?: string
    variant?: string
    size?: string
    color?: string
    label?: string
    error?: string
}

const props = withDefaults(defineProps<Props>(), {
    currencySymbol: '$',
    variant: 'filled',
    color: 'base'
})

const model = defineModel<number | string>()

const handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement
    let value: number | string = parseFloat(target.value.replace(/[^\d.-]/g, ''))

    if (countDecimals(value) > 0) {
        value = (Math.round(value * 100) / 100).toFixed(2)
    }

    model.value = value
}

const formattedInput = computed(() => {
    if (model.value) {
        return `${props.currencySymbol}${model.value}`
    }
})
</script>

<template>
    <Textbox
        :label="label"
        :value="formattedInput"
        :on-input="handleInput"
        :placeholder="currencySymbol"
        :size="size"
        :color="color"
        :variant="variant"
    />
</template>
