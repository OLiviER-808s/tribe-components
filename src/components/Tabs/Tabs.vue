<script setup>
const props = defineProps({
    tabs: Array,
    stretch: Boolean,
    size: {
        type: String,
        default: 'lg'
    }
})

const selectedTab = defineModel('selectedTab')
</script>

<template>
    <div>
        <div class="tab-container" :class="{ 'justify-between': stretch }">
            <button
                v-for="tab in tabs"
                :key="tab.name"
                class="cursor-pointer"
                :class="[{
                    'text-error': tab.error,
                    'underline-offset-8 underline font-medium': tab.name === selectedTab,
                }, `text-${size}`]"
                @click="selectedTab = tab.name"
                type="button"
            >
                {{ tab.label }}
            </button>
        </div>

        <div v-for="tab in tabs" :key="tab.name" v-show="tab.name === selectedTab">
            <slot :name="`tab-${tab.name}`" />
        </div>
    </div>
</template>
