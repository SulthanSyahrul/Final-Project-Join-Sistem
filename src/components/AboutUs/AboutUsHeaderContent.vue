<template>
    <section class="flex relative gap-8 justify-center items-start self-stretch pt-2.5 my-12 text-base text-gray-800 min-w-[240px] max-md:max-w-full">
      <div class="flex z-0 shrink-0 pt-24 mb-2 bg-white h-[356px] min-w-[240px] w-[624px]"></div>
      <p class="z-0 my-auto leading-7 text-neutral-600 w-[477px] max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h2 class="absolute top-16 left-[200px] z-0 h-5 font-medium leading-none uppercase tracking-[3px] w-[104px]">
        ABOUT US
      </h2>
      <h1 class="absolute bottom-16 left-[200px] z-0 h-48 text-5xl font-bold tracking-tighter leading-[64px] w-[496px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
        We are a team of content writers who share their learnings
      </h1>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutUsHeaderContent',
  });
  </script>