<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import { computed, ref } from 'vue'
import Textbox from '../Textbox/Textbox.vue'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { formatDate, formatDateRange, formatDateWithTime } from '../../utils/dateService'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
    error: String,
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
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
    range: Boolean,
    maxDate: Date,
    minDate: Date,
    includeTime: Boolean,
    disabled: Boolean,
    styles: String
})
const model = defineModel()

const dp = ref(null)

const dateFormatter = computed(() => {
    if (props.range) {
        return formatDateRange
    } else if (props.includeTime) {
        return formatDateWithTime
    } else {
        return formatDate
    }
})
</script>

<template>
    <div :class="styles">
        <label class="font-medium">{{ label }}</label>

        <VueDatePicker
            v-model="model"
            ref="dp"
            :format="dateFormatter"
            :disabled="disabled"
            auto-apply
            :enable-time-picker="includeTime"
            :range="range"
            :min-date="minDate"
            :max-date="maxDate"
        >
            <template #dp-input="{ value }">
                <Textbox
                    :placeholder="placeholder"
                    :value="value"
                    :icon="faCalendar"
                    :variant="variant"
                    :size="size"
                    :color="color"
                    :error="!!error"
                    :styles="disabled ? '' : 'cursor-pointer'"
                    disabled
                />
            </template>
        </VueDatePicker>

        <p v-if="error" class="text-error text-sm">{{ error }}</p>
    </div>
</template>
