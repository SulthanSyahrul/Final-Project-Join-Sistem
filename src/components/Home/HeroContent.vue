<template>
    <section class="flex flex-col mt-28 w-full text-base font-bold text-white max-md:mt-10 max-md:max-w-full">
      <div class="flex relative flex-col w-full min-h-[720px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e376978b57272bd60c5efd34433db1282886e675e73250683fed5fca36efb9b?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Hero background image showing a cityscape" class="object-cover absolute inset-0 size-full" />
        <div class="flex relative flex-col justify-center items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
          <article class="flex flex-col mb-0 max-w-full w-[804px] max-md:mb-2.5">
            <p class="font-semibold leading-none uppercase tracking-[3px] max-md:max-w-full">
              <span class="font-medium">Posted on</span>
              <span class="font-black">startup</span>
            </p>
            <h1 class="mt-7 text-6xl tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p class="mt-7 leading-7 text-blue-600 max-md:max-w-full">
              By <span class="text-blue-600">James West</span> | May 23, 2022
            </p>
            <p class="mt-7 leading-7 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button class="gap-3 self-start px-12 py-4 mt-7 text-lg leading-none bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Read More &gt;
            </button>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'HeroContent'
  })
  </script>