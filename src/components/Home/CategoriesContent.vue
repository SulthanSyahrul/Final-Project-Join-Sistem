<template>
    <section class="flex flex-col items-center mt-28 max-md:mt-10 max-md:max-w-full">
      <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800">
        Choose A Category
      </h2>
      <div class="flex flex-wrap gap-8 items-center mt-12 max-md:mt-10 max-md:max-w-full">
        <router-link :to="{ name: 'category' }" class="">
        <article class="flex flex-col justify-center self-stretch p-8 my-auto border border-solid border-zinc-500 min-h-[228px] min-w-[240px] w-[296px] max-md:px-5" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e42bd9e0a17eb34c41aa37176c580bf55cb1aed8d45f4f472147f9a522eb948?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Business category icon" class="object-contain w-12 aspect-square" />
          <h3 class="mt-2.5 text-3xl font-bold tracking-tighter leading-none text-gray-800">
            Business
          </h3>
          <p class="mt-2.5 text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </article>
        </router-link>
        <article class="flex flex-col self-stretch p-8 my-auto bg-blue-600 min-h-[228px] min-w-[240px] w-[296px] max-md:px-5" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b49fd95930757499a5db35b783b9836e8b0f14deaa7f6458baca7db8f70181?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Startup category icon" class="object-contain w-12 aspect-square" />
          <h3 class="mt-2.5 text-3xl font-bold tracking-tighter leading-none text-orange-50">
            Startup
          </h3>
          <p class="mt-2.5 text-base leading-7 text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </article>
        <article class="flex flex-col self-stretch p-8 my-auto border border-solid border-zinc-500 min-h-[228px] min-w-[240px] w-[296px] max-md:px-5" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c67d6594d356acc1701365e5e8af9b5d8e913438381ec560d7978eea7dbda57?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Economy category icon" class="object-contain w-12 aspect-square" />
          <h3 class="mt-2.5 text-3xl font-bold tracking-tighter leading-none text-gray-800">
            Economy
          </h3>
          <p class="mt-2.5 text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </article>
        <article class="flex flex-col self-stretch p-8 my-auto border border-solid border-zinc-500 min-w-[240px] w-[296px] max-md:px-5" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/780f05c1699da7af9b852cd66f9d083126ceec280354760ee171913be19ef98a?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Technology category icon" class="object-contain w-12 aspect-square" />
          <h3 class="mt-2.5 text-3xl font-bold tracking-tighter leading-none text-gray-800">
            Technology
          </h3>
          <p class="mt-2.5 text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </article>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'CategoriesContent'
  }
  </script>