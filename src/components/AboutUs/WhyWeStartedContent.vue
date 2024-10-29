<template>
    <section class="flex flex-row gap-10 justify-center self-stretch mt-20 mb-20 font-bold text-gray-800 min-w-[240px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee8147beafbfb8119728ceae31c0a988ec77f270e508a85bb4fd0a455749c356?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Illustration related to why we started this blog" class="object-contain self-stretch my-auto aspect-[1.21] min-w-[240px] w-[624px] max-md:max-w-full" />
      <article class="flex flex-col self-stretch my-auto rounded-none min-w-[240px] w-[519px] max-md:max-w-full">
        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">
          Why we started this Blog
        </h2>
        <p class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p class="mt-4 text-base leading-7 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </article>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'WhyWeStartedContent'
  })
  </script>