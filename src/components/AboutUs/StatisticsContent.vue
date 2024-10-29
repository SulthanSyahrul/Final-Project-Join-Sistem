<template>
   <section class="relative flex flex-col items-start px-20 pt-64 mt-24 mb-12 w-full min-h-[444px] max-w-[1350px] mx-auto max-md:px-5 max-md:pt-24 max-md:max-w-full">

      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e66e2f4f92ae87b2deccafa649f7e2e8add28266abbcacd87c8de8479e5194?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="" class="object-cover absolute inset-0 size-full" />
      <div class="relative flex flex-col max-w-full w-[861px]">
        <div class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-white max-md:mt-10">
                <h2 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">12+</h2>
                <p class="text-base leading-7">Blogs Published</p>
              </div>
            </article>
            <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-white max-md:mt-10">
                <h2 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">18K+</h2>
                <p class="text-base leading-7">Views on Finsweet</p>
              </div>
            </article>
            <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-white max-md:mt-10">
                <h2 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">30K+</h2>
                <p class="text-base leading-7">Total active Users</p>
              </div>
            </article>
          </div>
        </div>
        <div class="flex flex-wrap items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b0411b93d3f7e59d74cef5c3c09bd9de337714119a1752e00e2a21ca53d874b?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="" class="object-contain self-stretch my-auto aspect-[13.51] fill-amber-300 min-w-[240px] w-[311px]" />
          <div class="flex shrink-0 self-stretch my-auto bg-amber-300 h-[23px] min-w-[240px] w-[550px]"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'StatisticsContent',
  })
  </script>