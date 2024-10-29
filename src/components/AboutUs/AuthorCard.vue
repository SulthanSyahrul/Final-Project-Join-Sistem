<template>
    <article class="flex flex-col grow items-center py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8">
      <img :src="author.imageUrl" :alt="`Portrait of ${author.name}`" class="object-contain w-32 max-w-full rounded-full aspect-square" />
      <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
        {{ author.name }}
      </h3>
      <p class="self-stretch text-sm text-center text-zinc-500">
        {{ author.role }}
      </p>
      <img :src="author.ratingImageUrl" alt="Author rating" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface Author {
    name: string;
    role: string;
    imageUrl: string;
    ratingImageUrl: string;
  }
  
  export default defineComponent({
    name: 'AuthorCard',
    props: {
      author: {
        type: Object as PropType<Author>,
        required: true,
      },
    },
  });
  </script>