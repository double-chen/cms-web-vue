<template>
  <div
    class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div
      class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0"
    >
      <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-indigo-100">
        <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
        <circle
          fill-opacity="0.2"
          fill="currentColor"
          cx="44"
          cy="44"
          r="44"
        ></circle>
        <circle
          fill-opacity="0.2"
          fill="currentColor"
          cx="44"
          cy="44"
          r="37.5"
        ></circle>
        <circle
          fill-opacity="0.3"
          fill="currentColor"
          cx="44"
          cy="44"
          r="29.5"
        ></circle>
        <circle
          fill-opacity="0.3"
          fill="currentColor"
          cx="44"
          cy="44"
          r="22.5"
        ></circle>
      </svg>
    </div>
    <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
        v-for="article in articleList"
        :key="article.id"
      >
        <div class="p-5">
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50"
          >
            <svg
              class="w-8 h-8 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
          <p class="mb-2 font-bold">{{ article.title }}</p>
          <p class="text-sm leading-5 text-gray-900">
            {{ article.summary }}
          </p>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getArticleList } from '@/api/modules/content'
import { type Content } from '@/api/interface/index'

const articleList = ref<Content.ResArticle[]>()

async function init() {
  const params = {
    //tagIds: ['1'],
    pageNum: 1,
    pageSize: 8,
  }
  const res = await getArticleList(params)
  console.log('getArticleList:res', res)

  articleList.value = res.data.list
}
init()
</script>
