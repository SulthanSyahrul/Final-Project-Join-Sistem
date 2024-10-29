<template>
    <section class="flex flex-col mt-28 mx-auto max-w-full w-[1280px] max-md:mt-10">
      <h1 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
        List of Authors
      </h1>
      <main class="mt-12 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <article class="">
            <div class="flex flex-col grow justify-center items-center px-7 py-10 w-full leading-none bg-zinc-100 min-h-[324px] max-md:px-5 max-md:mt-8">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7def7c70ae71cb4baa205fc9aa8a0ca386f3e41aae8afdf1a32d1393e2e357b9?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Profile photo of Floyd Miles" class="object-contain w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-3.5 text-3xl font-bold tracking-tighter text-gray-800">
                Floyd Miles
              </h2>
              <p class="mt-3.5 text-sm text-center text-zinc-500">
                Content Writer @Company
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69f861c1e3276a06e4dc4b2c7d595d3d3651e0b7ea0abb65a922660c53e5006?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="" class="object-contain mt-3.5 w-28 max-w-full aspect-[6.99]" />
            </div>
          </article>
          </router-link>
          <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center items-center px-7 py-10 w-full leading-none bg-orange-50 min-h-[324px] max-md:px-5 max-md:mt-8">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98538e121d756b2712bc9ab1d525be5a97674cf67d39d86ea30ded67e756b194?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Profile photo of Dianne Russell" class="object-contain w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-3.5 text-3xl font-bold tracking-tighter text-gray-800">
                Dianne Russell
              </h2>
              <p class="mt-3.5 text-sm text-center text-zinc-500">
                Content Writer @Company
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/156dc7c8a87ca72ba8a35afd5488ff0b7070b0219eb8ea1b9f1c659e6014697a?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="" class="object-contain mt-3.5 w-28 max-w-full aspect-[6.99]" />
            </div>
          </article>
  
          <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center items-center px-7 py-10 w-full leading-none bg-zinc-100 min-h-[324px] max-md:px-5 max-md:mt-8">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04abc47b89f09c82561d992880135458b270c764446ca8eff25308f93174ff6e?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Profile photo of Jenny Wilson" class="object-contain w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-3.5 text-3xl font-bold tracking-tighter text-gray-800">
                Jenny Wilson
              </h2>
              <p class="mt-3.5 text-sm text-center text-zinc-500">
                Content Writer @Company
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd0c3f225819d6ccb4425284820efd5f7adc34eefec7e19bc34d532e29acd3b?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="" class="object-contain mt-3.5 w-28 max-w-full aspect-[6.99]" />
            </div>
          </article>
  
          <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center items-center px-7 py-10 w-full leading-none bg-zinc-100 min-h-[324px] max-md:px-5 max-md:mt-8">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc077ef1d2d942f830a9dee69cab48b8e1146e82e44119062e3ba2f862f2621d?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Profile photo of Leslie Alexander" class="object-contain w-32 max-w-full rounded-full aspect-square" />
              <h2 class="mt-3.5 text-3xl font-bold tracking-tighter text-gray-800">
                Leslie Alexander
              </h2>
              <p class="mt-3.5 text-sm text-center text-zinc-500">
                Content Writer @Company
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5d19a0f8a25e35630c42ba943b113efe87c13610cee0fff8d350f9195c099f6?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="" class="object-contain mt-3.5 w-28 max-w-full aspect-[6.99]" />
            </div>
          </article>
        </div>
      </main>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'AuthorsListContent'
  })
  </script>