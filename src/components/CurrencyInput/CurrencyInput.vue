<script setup>
import Textbox from './Textbox.vue'
import { computed } from 'vue'
import { countDecimals } from '../utils/utils'

const props = defineProps({
    currencySymbol: {
        type: String,
        default: '$',
    },
    variant: {
        type: String,
        default: 'filled',
    },
    size: {
        type: String,
    },
    color: {
        type: String,
        default: 'base',
    },
    label: String,
    error: String,
})
const model = defineModel()

const handleInput = (event) => {
    let value = parseFloat(event.target.value.replace(/[^\d.-]/g, ''))

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
