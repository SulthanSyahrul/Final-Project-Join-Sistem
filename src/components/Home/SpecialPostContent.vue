<template>
  <article
    data-layername="specialPost"
    class="flex flex-col items-center mt-28 mx-auto max-w-full text-base font-bold w-[1280px] max-md:pr-5 max-md:mt-10"
  >

    <section
      class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px] max-md:pt-24 max-md:pl-5"
    >
    <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03917f58ef1f78efb9fb978665d6e8bdacfb4bb38fbee10319cbb0b6c5c1ec20?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3"
    alt="Background image showing our story"
    class="object-cover absolute top-0 right-[165px] size-full"
  />

      <section
    data-layername="background"
    class="flex relative flex-col p-20 ml-auto translate-x-[200px] max-w-full bg-white w-[706px] max-md:px-5"
  >

        <h2
          data-layername="whyWeStarted"
          class="self-start font-semibold leading-none text-gray-800 uppercase tracking-[3px]"
        >
          Why we started
        </h2>
        <h1
          data-layername="mainTitle"
          class="mt-6 text-5xl tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
        >
          It started out as a simple idea and evolved into our passion
        </h1>
        <p
          data-layername="description"
          class="mt-4 leading-7 text-zinc-500 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button
          data-layername="button"
          class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 max-md:px-5"
          @click="discoverStory"
          tabindex="0"
          aria-label="Discover our story"
        >
          Discover our story &gt;
        </button>
      </section>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface SpecialPostContentProps {
  onDiscoverClick?: () => void
}

export default defineComponent({
  name: 'SpecialPostContent',
  props: {
    onDiscoverClick: {
      type: Function as PropType<() => void>,
      required: false
    }
  },
  methods: {
    discoverStory(): void {
      if (this.onDiscoverClick) {
        this.onDiscoverClick()
      }
    }
  }
})
</script>