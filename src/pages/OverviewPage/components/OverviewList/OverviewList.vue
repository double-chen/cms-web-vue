<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div
      class="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8"
    >
      <div class="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
        <a href="/" aria-label="Item" class="mr-3">
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50"
          >
            <svg
              class="w-12 h-12 text-deep-purple-accent-400"
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
        </a>
        <h2
          class="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl"
        >
          <span class="inline-block mb-2">The brown fox</span>
          <div
            class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"
          ></div>
        </h2>
      </div>
      <p class="w-full text-gray-700 lg:text-sm lg:max-w-md">
        "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
        accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut perspiciatis
        unde omnis iste."
      </p>
    </div>
    <div class="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
      <!-- <div>
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Galaxies Orion
        </p>
        <p class="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
      <div>
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Tunguska event
        </p>
        <p class="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
      <div>
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Yolo ipsum dolor
        </p>
        <p class="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
      <div>
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Curabitur mattis
        </p>
        <p class="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
      <div>
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Leverage agile
        </p>
        <p class="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
      <div>
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Organically grow
        </p>
        <p class="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div> -->

      <div
        v-for="article in articleList"
        :key="article.id"
        @click="handleArticleClick(article)"
      >
        <img
          class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          :src="article.thumbnail"
          alt=""
        />
        <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {{ article.title }}
        </p>
        <p class="text-gray-700">
          {{ article.summary }}
        </p>
      </div>
    </div>
    <div class="text-center">
      <a
        href="/"
        aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      >
        See more
        <svg
          class="inline-block w-3 ml-2"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path
            d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArticleList } from '@/api/modules/content'
import { type Content } from '@/api/interface/index'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string
const articleList = ref<Content.ResArticle[]>()

function handleArticleClick(article: Content.ResArticle) {
  router.push({
    name: 'detail',
    params: {
      id: article.id,
    },
  })
}

async function init() {
  const params = {
    categoryId: id,
    pageNum: 1,
    pageSize: 9,
  }
  const res = await getArticleList(params)
  console.log('getArticleList:res', res)

  articleList.value = res.data.list
}
init()
</script>
