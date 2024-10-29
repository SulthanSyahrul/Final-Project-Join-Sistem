<template>
    <section class="flex flex-row grow shrink gap-10 justify-between self-stretch mt-20 mb-20 ml-40 font-bold text-gray-800 min-w-[240px] w-[1197px] max-md:max-w-full">

      <div class="flex flex-col self-stretch my-auto rounded-none min-w-[240px] w-[519px] max-md:max-w-full">
        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">
          Our team of creatives
        </h2>
        <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p class="mt-4 text-base leading-7 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f291422b11f1ab7b8c50b725d514646e8de790256fe3a58021ab1fdab9a4014c?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" 
        alt="Our team of creatives" 
        class="object-contain self-stretch my-auto ml-20 rounded-none aspect-[1.42] min-w-[240px] w-[681px] max-md:max-w-full"
      />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'KnowMoreAboutOurTeamContent'
  })
  </script>