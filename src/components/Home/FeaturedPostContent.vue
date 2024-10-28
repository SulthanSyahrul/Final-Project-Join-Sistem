<template>
    <section class="container mx-auto px-4 max-w-7xl">
      <div class="flex flex-wrap gap-8 items-start justify-center mt-28 max-md:mt-10">
        <article class="flex flex-col font-bold w-[600px] max-w-full">
          <h2 class="text-4xl tracking-tighter leading-none text-gray-800">
            Featured Post
          </h2>
          <div class="flex flex-col items-start p-8 mt-8 w-full border border-solid border-zinc-500">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c45f9aaa4a96e03afb40ae85380b24b187d6c8d954601081250c43fc68b2acab?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" 
              alt="Featured post main image" 
              class="object-cover w-full aspect-[1.9]"
            />
            <div class="mt-8 text-sm font-medium leading-none text-amber-300">
              By <span class="text-amber-300">{{ BlogContent.author }}</span> l {{ BlogContent.date }}
            </div>
            <h3 class="mt-4 text-3xl tracking-tighter leading-10 text-gray-800">
              {{ BlogContent.title }}
            </h3>
            <p class="mt-4 text-base leading-7 text-zinc-500">
              {{ BlogContent.excerpt }}
            </p>
            <button 
              class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              @click="handleReadMore(BlogContent.id)"
              aria-label="Read more about featured post"
            >
              Read More &gt;
            </button>
          </div>
        </article>
  
        <aside class="flex flex-col w-[400px] max-w-full">
          <div class="flex flex-wrap gap-5 justify-between">
            <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800">
              All Posts
            </h2>
            <button 
              class="my-auto text-base leading-7 text-amber-300 hover:text-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              @click="handleViewAll"
              aria-label="View all posts"
            >
              View All
            </button>
          </div>
  
          <div class="mt-8">
            <article 
              v-for="(post, index) in posts" 
              :key="post.id"
              :class="[
                'flex flex-col items-start py-7 pr-14 pl-8 transition-transform duration-200 hover:-translate-y-1',
                index % 2 === 1 ? 'bg-orange-50' : 'bg-white'
              ]"
            >
              <div class="text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">{{ post.author }}</span> {{ post.date }}
              </div>
              <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                {{ post.title }}
              </h3>
            </article>
          </div>
        </aside>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface Post {
    id: number
    author: string
    date: string
    title: string
    excerpt?: string
  }
  
  export default defineComponent({
    name: 'BlogContent',
    
    data() {
      return {
        BlogContent: {
          id: 1,
          author: 'John Doe',
          date: 'May 23, 2022',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
          excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        } as Post,
        
        posts: [
          {
            id: 2,
            author: 'John Deo',
            date: 'Aug 23, 2021',
            title: '8 Figma design systems that you can download for free today.'
          },
          {
            id: 3,
            author: 'John Doe',
            date: 'Aug 23, 2021', 
            title: '8 Figma design systems that you can download for free today.'
          },
          {
            id: 4,
            author: 'John Doe',
            date: 'Aug 23, 2021',
            title: '8 Figma design systems that you can download for free today.'
          },
          {
            id: 5,
            author: 'John Doe',
            date: 'Aug 23, 2021',
            title: '8 Figma design systems that you can download for free today.'
          }
        ] as Post[]
      }
    },
  
    methods: {
      handleReadMore(postId: number): void {
        this.$emit('read-more', postId)
      },
  
      handleViewAll(): void {
        this.$emit('view-all')
      }
    }
  })
  </script>
