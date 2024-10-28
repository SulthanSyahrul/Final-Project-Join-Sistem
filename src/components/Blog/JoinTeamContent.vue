<template>
    <section class="flex flex-col items-center mt-28 mx-auto max-w-full font-bold w-[414px] max-md:mt-10">
      <h2 class="text-4xl tracking-tighter leading-10 text-center text-gray-800">
        Join our team to be a part of our story
      </h2>
      <p class="mt-6 text-base leading-7 text-center text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button 
        class="gap-3 px-12 py-4 mt-6 text-lg leading-none text-white bg-blue-600 max-md:px-5"
        @click="handleJoinClick"
        aria-label="Join Now"
      >
        Join Now
      </button>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'JoinTeamContent',
    methods: {
      handleJoinClick(): void {
        // Handle join button click
      }
    }
  })
  </script>