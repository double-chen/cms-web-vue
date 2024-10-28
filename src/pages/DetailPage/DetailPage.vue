<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <p
      class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center"
    >
      {{ article?.createTime }}
    </p>
    <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
      <div class="mb-4">
        <a
          href="/"
          aria-label="Article"
          class="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
        >
          {{ article?.title }}
        </a>
      </div>
      <p class="text-base text-gray-700 md:text-lg">
        {{ article?.content }}
      </p>
    </div>
    <div class="mb-10 sm:text-center">
      <a href="/" aria-label="Author" class="inline-block mb-1">
        <img
          alt="avatar"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          class="object-cover w-10 h-10 rounded-full shadow-sm"
        />
      </a>
      <div>
        <a
          href="/"
          aria-label="Author"
          class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >{{ article?.title }}</a
        >
        <p class="text-sm font-medium leading-4 text-gray-600">作者</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleById } from '@/api/modules/content'
import { type Content } from '@/api/interface/index'

const route = useRoute()
const id = route.params.id as string

const article = ref<Content.ResArticle>()

async function init() {
  const params = {
    id,
  }
  const res = await getArticleById(params)
  console.log('getArticleById:res', res)

  article.value = res.data
}
init()
</script>
