<script setup>
import { computed } from 'vue'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    steps: Array,
    color: {
        type: String,
        default: 'primary',
    },
    variant: {
        type: String,
        default: 'classic',
    },
    canMoveForwards: Boolean,
    canMoveBackwards: Boolean,
})
const selectedStep = defineModel()

const selectedStepIdx = computed(() => {
    return props.steps.findIndex((step) => step.value === selectedStep.value)
})

const stepsWithStatus = computed(() => {
    return props.steps.map((step, idx) => {
        if (idx < selectedStepIdx.value) {
            return { ...step, status: 'completed' }
        } else if (idx === selectedStepIdx.value) {
            return { ...step, status: 'in-progress' }
        }
        return { ...step, status: 'uncompleted' }
    })
})

const getStepColors = (step) => {
    if (step.status === 'uncompleted' || (step.status !== 'in-progress' && props.variant === 'minimalist')) {
        return 'text-secondary-text bg-card-accent'
    }

    return `text-${props.color} bg-${props.color}${props.variant === 'classic' ? '/30' : ''}`
}

const getCursorStyle = (idx) => {
    if (
        (props.canMoveForwards && idx > selectedStepIdx.value) ||
        (props.canMoveBackwards && idx < selectedStepIdx.value)
    ) {
        return 'cursor-pointer'
    }

    return 'cursor-default'
}

const handleStepClick = (step, idx) => {
    if (
        (props.canMoveForwards && idx > selectedStepIdx.value) ||
        (props.canMoveBackwards && idx < selectedStepIdx.value)
    ) {
        selectedStep.value = step.value
    }
}
</script>

<template>
    <div class="w-full" v-if="variant === 'classic'">
        <div class="flex justify-between items-center gap-2 px-4">
            <template v-for="(step, idx) in stepsWithStatus" :key="step.value">
                <div
                    @click="handleStepClick(step, idx)"
                    :class="[
                        'w-10 h-10 rounded-full flex items-center justify-center',
                        getStepColors(step),
                        getCursorStyle(idx),
                    ]"
                >
                    <FontAwesomeIcon :icon="step.status === 'completed' && !canMoveBackwards ? faCheck : step.icon" />
                </div>

                <div
                    v-if="idx < steps.length - 1"
                    :class="`flex-grow bg-${stepsWithStatus[idx + 1].status === 'uncompleted' ? 'secondary-text' : color} h-0.5`"
                ></div>
            </template>
        </div>
        <div class="flex justify-between items-center mt-1 px-3">
            <p
                v-for="(step, idx) in stepsWithStatus"
                :key="'label-' + step.value"
                @click="handleStepClick(step, idx)"
                :class="[
                    step.status === 'uncompleted' ? 'text-secondary-text' : `text-${color}`,
                    'text-xs font-medium text-center',
                    getCursorStyle(idx),
                ]"
            >
                {{ step.label }}
            </p>
        </div>
    </div>
    <div v-else-if="variant === 'minimalist'" :class="`grid grid-cols-${stepsWithStatus.length} gap-1`">
        <div v-for="(step, idx) in stepsWithStatus" :key="step.value" @click="handleStepClick(step, idx)">
            <div :class="['h-1 rounded-lg mb-1', getStepColors(step), getCursorStyle(idx)]"></div>
            <p
                :class="[
                    step.status !== 'in-progress' ? 'text-secondary-text' : `text-${color}`,
                    'text-sm font-medium',
                    getCursorStyle(idx),
                ]"
            >
                {{ step.label }}
            </p>
        </div>
    </div>
</template>
