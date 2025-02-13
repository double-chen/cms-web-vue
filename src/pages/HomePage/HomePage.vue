<template>
  <div class="min-h-screen flex flex-col">
    <!-- 主要内容区域 -->
    <main class="flex-grow">
      <!-- 轮播图区域 -->
      <section class="mb-8">
        <HomeCarousel />
      </section>

      <!-- 热门新闻列表 -->
      <section class="container mx-auto px-4 mb-8">
        <h2 class="text-2xl font-bold mb-4">热门新闻</h2>
        <HomeHotNews />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import HomeCarousel from './components/HomeCarousel/HomeCarousel.vue'
import HomeHotNews from './components/HomeHotNews/HomeHotNews.vue'
</script>
