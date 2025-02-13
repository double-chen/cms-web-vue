<template>
  <div class="container mx-auto px-4">
    <Carousel class="w-full">
      <CarouselContent>
        <CarouselItem v-for="item in carouselList" :key="item.id">
          <div
            class="h-[400px] relative cursor-pointer"
            @click="handleClick(item)"
          >
            <img
              :src="item.thumbnail"
              class="w-full h-full object-cover rounded-lg"
            />
            <div
              class="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6 rounded-b-lg"
            >
              <h3 class="text-2xl font-bold">{{ item.title }}</h3>
              <p class="mt-2 text-gray-200 line-clamp-2">{{ item.summary }}</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden sm:flex" />
      <CarouselNext class="hidden sm:flex" />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getArticleList } from '@/api/modules/content'
import type { Content } from '@/api/interface'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

const router = useRouter()
const carouselList = ref<Content.ResArticle[]>([])

const getCarouselData = async () => {
  const params = {
    pageNum: 1,
    pageSize: 5,
    isPublish: true,
  }
  try {
    const res = await getArticleList(params)
    carouselList.value = res.data.list
  } catch (error) {
    console.error('获取轮播图数据失败:', error)
  }
}

const handleClick = (item: Content.ResArticle) => {
  router.push(`/article/${item.id}`)
}

onMounted(() => {
  getCarouselData()
})
</script>
