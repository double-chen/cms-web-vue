<template>
  <div class="bg-gray-900">
    <div class="container mx-auto px-4 py-4">
      <div class="relative flex items-center justify-between">
        <!-- Logo 部分 -->
        <div class="flex items-center">
          <a href="/" class="inline-flex items-center">
            <svg
              class="w-10 h-10"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="8" fill="#3B82F6" />
              <path
                d="M12 14H28M12 20H28M12 26H20"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
            <span class="ml-3 text-xl font-bold text-gray-100">新闻网</span>
          </a>

          <!-- 导航菜单 -->
          <nav class="hidden md:ml-8 md:flex md:space-x-8">
            <a
              v-for="category in categoryList"
              :key="category.id"
              :href="`/overview/${category.id}`"
              class="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {{ category.name }}
            </a>
            <a
              href="/about"
              class="text-gray-300 hover:text-white transition-colors duration-200"
            >
              关于我们
            </a>
          </nav>
        </div>

        <!-- 移动端菜单按钮 -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            class="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- 移动端菜单 -->
        <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-lg md:hidden z-50 w-full"
        >
          <nav class="py-2">
            <a
              v-for="category in categoryList"
              :key="category.id"
              :href="`/overview/${category.id}`"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {{ category.name }}
            </a>
            <a
              href="/about"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              关于我们
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCategoryList } from '@/api/modules/content'
import { type Content } from '@/api/interface/index'

const isMenuOpen = ref(false)
const categoryList = ref<Content.ResCategory[]>()

async function init() {
  const params = {
    pageNum: 1,
    pageSize: 8,
  }
  const res = await getCategoryList(params)
  categoryList.value = res.data
}
init()
</script>
