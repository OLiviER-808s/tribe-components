<script setup>
import { ref, computed, onMounted } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
    activeColor: {
        type: String,
        default: 'secondary'
    },
    value: {
        type: Boolean,
        default: false
    },
    icon: Object
})

const model = defineModel()
const emit = defineEmits(['toggle'])

const toggle = () => {
    model.value = !model.value
    emit('toggle', model.value)
}

const toggleClass = computed(() =>
    model.value ? `bg-${props.activeColor}` : 'bg-gray-300 dark:bg-gray-600'
)

const circleClass = computed(() =>
    model.value ? 'translate-x-6' : 'translate-x-0'
)

onMounted(() => {
    model.value = model.value ?? props.value
})
</script>

<template>
    <div
        @click="toggle"
        :class="toggleClass"
        class="cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300"
    >
        <div
            :class="circleClass"
            class="bg-white dark:bg-gray-200 text-black text-sm  flex justify-center items-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        >
            <FontAwesomeIcon v-if="icon" :icon="icon" />
        </div>
    </div>
</template>

