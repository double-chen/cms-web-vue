<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="i in 6"
      :key="i"
      class="shadow-md bg-white rounded-lg overflow-hidden"
    >
      <div class="h-48 bg-gray-200">
        <!-- 新闻图片占位 -->
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">新闻标题</h3>
        <p class="text-gray-600 text-sm line-clamp-2">
          新闻摘要新闻摘要新闻摘要新闻摘要新闻摘要新闻摘要
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 后续添加获取热门新闻的逻辑
</script>
