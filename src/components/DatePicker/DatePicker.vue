<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { computed, ref } from 'vue'
import Textbox from '../Textbox/Textbox.vue'
import { formatDate, formatDateRange, formatDateWithTime } from '../../utils/dateService'
import CalendarIcon from '../icons/CalendarIcon.vue'
import '@vuepic/vue-datepicker/dist/main.css'
import { IconSize, TribeIconType } from '@/types/icon'

interface Props {
    error?: string
    label?: string
    placeholder?: string
    variant?: string
    size?: IconSize
    color?: string
    range?: boolean
    maxDate?: Date
    minDate?: Date
    includeTime?: boolean
    disabled?: boolean
    styles?: string
    icon?: TribeIconType
}

const props = withDefaults(defineProps<Props>(), {
    label: '',
    placeholder: '',
    variant: 'filled',
    color: 'base',
    icon: () => CalendarIcon
})

const model = defineModel<Date | Date[] | null>()

const dp = ref(null)

const dateFormatter = computed(() => {
    if (props.range) {
        return (dates: Date[]) => formatDateRange([dates[0], dates[1]])
    } else if (props.includeTime) {
        return (date: Date) => formatDateWithTime(date)
    } else {
        return (date: Date) => formatDate(date)
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
                    :icon="icon"
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
