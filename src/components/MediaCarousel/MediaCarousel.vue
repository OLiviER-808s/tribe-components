<script setup lang="ts">
import FileIcon from '../icons/FileIcon.vue'
import { useIsHandheld } from '../../composables/useIsHandheld'
import { watch } from 'vue'
import type { MediaCarouselProps } from './MediaCarousel.types'

const props = withDefaults(defineProps<MediaCarouselProps>(), {
    maxMediaHeight: 'max-h-72'
})

const selectedIdx = defineModel<number>('selectedIdx', { default: 0 })

const isHandheld = useIsHandheld()

const onSlideChange = (): void => {
    const swiper = (document.querySelector('swiper-container') as any)?.swiper
    if (swiper) {
        selectedIdx.value = swiper.activeIndex
    }
}

watch(selectedIdx, () => {
    const swiper = (document.querySelector('swiper-container') as any)?.swiper

    if (swiper && selectedIdx.value !== swiper.activeIndex) {
        swiper.slideTo(selectedIdx.value)
    }
})
</script>

<template>
    <swiper-container :slides-per-view="1" :centered-slides="true" :navigation="!isHandheld" @swiperslidechange="onSlideChange">
        <swiper-slide v-for="file in files">
            <div class="flex items-center justify-center">
                <div v-if="file.type === 'image'">
                    <img :src="file.preview" :alt="file.name" :class="maxMediaHeight" />
                </div>
                <div v-else-if="file.type === 'video'">
                    <video :src="file.preview" controls :class="maxMediaHeight" />
                </div>
                <div v-else-if="file.type === 'audio'">
                    <audio :src="file.preview" controls />
                </div>
                <div v-else class="text-center">
                    <slot name="file-icon">
                        <FileIcon class="w-6 h-6 mx-auto" />
                    </slot>
                    <p class="text-lg mt-2">No preview available</p>
                </div>
            </div>
        </swiper-slide>
    </swiper-container>
</template>
