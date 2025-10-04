<script setup>
import Card from './Card.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const props = defineProps({
    title: String,
    openByDefault: Boolean,
    variant: {
        type: String,
        default: 'card',
    },
})

const open = defineModel({ default: props.openByDefault })
</script>

<template>
    <template v-if="variant === 'card'">
        <Card>
            <div @click="open = !open" class="flex items-center justify-between gap-2 cursor-pointer">
                <h3 class="text-xl font-medium">{{ title }}</h3>

                <Transition name="rotate">
                    <div :class="{ rotated: open, 'not-rotated': !open }">
                        <FontAwesomeIcon :icon="faChevronDown" size="lg" />
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
                        <FontAwesomeIcon :icon="faChevronDown" />
                    </div>
                </Transition>
            </div>

            <div v-show="open" class="p-2">
                <slot />
            </div>
        </div>
    </template>
</template>

<style scoped>
.rotated {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.not-rotated {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
}
</style>
