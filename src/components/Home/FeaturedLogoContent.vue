<template>
    <section    data-layername="logoComponent" class="flex flex-wrap gap-10 items-center justify-center mt-28 mx-auto text-zinc-500 max-md:mt-10 max-md:max-w-full">
      <header data-layername="featuredIn" class="flex flex-col self-stretch my-auto rounded-none w-[136px]">
        <h2 data-layername="weAre" class="self-start text-sm leading-none opacity-60">
          We are
        </h2>
        <h1 data-layername="featuredIn" class="text-2xl font-bold leading-none">
          Featured in
        </h1>
      </header>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44400a0686a89ca42258a679b41962a191f9967fcfc46ceba204f38c2a62f27c?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" 
        alt="Featured companies logos"
        class="object-contain self-stretch my-auto aspect-[31.25] min-w-[240px] w-[1015px] max-md:max-w-full"
      />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'FeaturedContent'
  })
  </script>