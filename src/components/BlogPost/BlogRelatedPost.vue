<template>
    <section class="flex flex-col mt-28 max-w-full w-[1280px] mx-auto max-md:mt-10">
      <div class="mx-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow items-start font-bold text-gray-800 max-md:mt-8">
              <h2 class="text-4xl tracking-tighter leading-none text-center text-black">What to read next</h2>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bfa0cf84fc442059826bd9f76278afa81bd08f6d57a69b794e3dbd5efea571f?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Article image" class="object-contain self-stretch mt-16 w-full aspect-[1.27] max-md:mt-10" />
              <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
              </p>
              <h3 class="mt-4 text-3xl tracking-tighter leading-10">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="self-stretch mt-4 text-base leading-7 opacity-70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow mt-28 text-gray-800 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5137d714ab4fbefd5634fccd81db15016ada3286a6e57d081ec33c5f5a9a51?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Article image" class="object-contain w-full aspect-[1.27]" />
              <p class="self-start mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
              </p>
              <h3 class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-base leading-7 opacity-70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow mt-28 text-gray-800 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54f3c6da26b8addb95781284bb17f805243e5ad198a2c0357d17519cf4021a0e?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Article image" class="object-contain w-full aspect-[1.27]" />
              <p class="self-start mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
              </p>
              <h3 class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-base leading-7 opacity-70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </article>
        </div>
      </div>
      <hr class="shrink-0 mt-16 h-px border border-solid opacity-30 bg-zinc-500 border-zinc-500 max-md:mt-10 max-md:max-w-full" />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BlogRelatedPostsContent',
  });
  </script>