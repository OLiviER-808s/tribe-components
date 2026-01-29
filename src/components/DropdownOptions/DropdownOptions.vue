<script setup lang="ts">
import { nextTick, ref, useSlots, watch } from 'vue'
import { onKeyStroke } from '@vueuse/core'

interface Props {
    container?: HTMLElement
    options?: any[]
    optionLabel?: string
    trackBy?: string
    optionDescription?: string
    width?: string
    direction?: string
    open?: boolean
    acceptsEmptySelection?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    width: 'w-full',
    direction: 'left'
})

const emit = defineEmits<{
    select: [option?: any]
}>()

const slots = useSlots()

const highlightedIdx = ref<number>(-1)
const dropdownPosition = ref<string>('top-full')
const optionsContainer = ref<HTMLElement | null>(null)

const select = (option?: any): void => {
    emit('select', option)
}

const setDropdownPosition = (): void => {
    if (!props.container) return

    const rect = props.container.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    dropdownPosition.value = rect.bottom + 150 > viewportHeight ? 'bottom-full' : 'top-full'
}

const resetDropdownPosition = (): void => {
    dropdownPosition.value = 'top-full'
}

const navigate = async (direction: number): Promise<void> => {
    if (!props.options || props.options.length === 0) return

    highlightedIdx.value += direction

    if (highlightedIdx.value < 0) {
        highlightedIdx.value = props.options.length - 1
    } else if (highlightedIdx.value >= props.options.length) {
        highlightedIdx.value = 0
    }

    await nextTick()

    const optionElements = optionsContainer.value?.querySelectorAll('div > div')
    const highlightedOption = optionElements?.[highlightedIdx.value] as HTMLElement | undefined

    if (highlightedOption) {
        highlightedOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
}

onKeyStroke('ArrowDown', (e) => {
    if (props.open && props.options && props.options.length > 0) {
        e.preventDefault()
        navigate(1)
    }
})

onKeyStroke('ArrowUp', (e) => {
    if (props.open && props.options && props.options.length > 0) {
        e.preventDefault()
        navigate(-1)
    }
})

onKeyStroke('Enter', (e) => {
    if (props.open && props.options && props.options.length > 0) {
        e.preventDefault()
        select(props.options[highlightedIdx.value])
    } else if (props.acceptsEmptySelection) {
        e.preventDefault()
        select()
    }
})

watch(() => props.open, () => {
    if (!props.open) {
        highlightedIdx.value = -1
    }
})
</script>

<template>
    <Transition
        :name="dropdownPosition === 'top-full' ? 'slide-down' : 'slide-up'"
        @before-enter="setDropdownPosition"
        @after-leave="resetDropdownPosition"
    >
        <div
            v-if="open && options?.length > 0"
            ref="optionsContainer"
            :class="[
                        'rounded-md bg-dropdown text-dropdown-text absolute overflow-auto max-h-64 flex flex-col cursor-pointer z-50',
                        width,
                        direction === 'right' ? 'right-0' : 'left-0',
                        dropdownPosition,
                    ]"
        >
            <div
                v-for="(option, idx) in options"
                :key="trackBy ? options[trackBy] : option"
                @click="select(option)"
                @mouseover="highlightedIdx = idx"
                class="text-md py-2 px-6 rounded-md text-left"
                :class="{ 'bg-dropdown-select': highlightedIdx === idx }"
            >
                <slot v-if="slots.option" name="option" :option="option" />
                <div v-else>
                    {{ optionLabel ? option[optionLabel] : option }}

                    <div v-if="option[optionDescription]" class="text-xs text-secondary-text">
                        {{ option[optionDescription] }}
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
/* Slide down animation */
.slide-down-enter-active,
.slide-down-leave-active {
    transition:
        transform 0.2s ease,
        opacity 0.2s ease;
}

.slide-down-enter-from {
    transform: translateY(-10px);
    opacity: 0;
}

.slide-down-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

/* Slide up animation */
.slide-up-enter-active,
.slide-up-leave-active {
    transition:
        transform 0.2s ease,
        opacity 0.2s ease;
}

.slide-up-enter-from {
    transform: translateY(10px);
    opacity: 0;
}

.slide-up-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-up-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>
