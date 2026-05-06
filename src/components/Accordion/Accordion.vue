<script setup lang="ts">
import Card from '../Card/Card.vue'
import ChevronDownIcon from '../icons/ChevronDownIcon.vue'
import type { AccordionProps } from './Accordion.types'

const props = withDefaults(defineProps<AccordionProps>(), {
    variant: 'card'
})

const open = defineModel<boolean>({ default: false })
</script>

<template>
    <template v-if="variant === 'card'">
        <Card>
            <div @click="open = !open" class="flex items-center justify-between gap-2 cursor-pointer">
                <h3 class="text-xl font-medium">{{ title }}</h3>

                <Transition name="rotate">
                    <div :class="{ rotated: open, 'not-rotated': !open }">
                        <slot name="chevron">
                            <ChevronDownIcon class="w-5 h-5" />
                        </slot>
                    </div>
                </Transition>
            </div>

            <div v-show="open" class="pt-4">
                <slot />
            </div>
        </Card>
    </template>
    <template v-else-if="variant === 'minimal'">
        <div>
            <div
                @click="open = !open"
                class="p-2 border-b-2 border-base-text flex items-center justify-between gap-2 cursor-pointer"
            >
                <h3>{{ title }}</h3>

                <Transition name="rotate">
                    <div :class="{ rotated: open, 'not-rotated': !open }">
                        <slot name="chevron">
                            <ChevronDownIcon class="w-4 h-4" />
                        </slot>
                    </div>
                </Transition>
            </div>

            <div v-show="open" class="p-2">
                <slot />
            </div>
        </div>
    </template>
</template>
