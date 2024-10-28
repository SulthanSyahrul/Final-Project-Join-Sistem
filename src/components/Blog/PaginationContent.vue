<template>
    <nav 
    aria-label="Pagination Navigation" 
    class="flex gap-4 mt-16 mx-auto max-w-full font-bold text-center rounded-none w-[174px] max-md:mt-10 justify-center"
    >
      <button 
        @click="onPrevClick"
        :disabled="currentPage === 1"
        class="grow my-auto text-2xl leading-none text-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Previous page"
      >
        &lt; Prev
      </button>
      
      <button
        @click="onNextClick" 
        :disabled="currentPage === totalPages"
        class="text-3xl tracking-tighter leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Next page"
      >
        Next &gt;
      </button>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface PaginationContent {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export default defineComponent({
    name: 'PaginationContent',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    emits: ['pageChange'],
    setup(props, { emit }) {
      const onPrevClick = () => {
        if (props.currentPage > 1) {
          emit('pageChange', props.currentPage - 1)
        }
      }
  
      const onNextClick = () => {
        if (props.currentPage < props.totalPages) {
          emit('pageChange', props.currentPage + 1)
        }
      }
  
      return {
        onPrevClick,
        onNextClick
      }
    }
  })
  </script>