<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
    name: String,
    error: String,
})
const checked = defineModel()
const emit = defineEmits(['toggle'])

const handleToggle = () => {
    checked.value = !checked.value
    emit('toggle', checked.value)
}
</script>

<template>
    <div>
        <div class="flex items-center gap-2">
            <button
                @click="handleToggle()"
                type="button"
                class="rounded-sm cursor-pointer border-secondary border-2 w-4 h-4 flex items-center justify-center text-black"
                :class="{ 'bg-secondary': checked, 'hover:bg-secondary/30': !checked }"
            >
                <FontAwesomeIcon v-if="checked" :icon="faCheck" size="xs" />
            </button>

            <label :for="name">
                <slot />
            </label>
        </div>

        <p v-if="error" class="text-error text-sm">{{ error }}</p>
    </div>
</template>
