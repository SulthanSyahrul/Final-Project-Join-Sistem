<template>
    <main
      data-layername="aboutUsOurMission"
      class="flex relative flex-col items-center justify-center mt-28 mx-auto max-w-full text-base text-gray-800 w-[1280px] max-md:mt-10"
    >
     <div class="flex justify-center ml-[155px]">
        <img
             loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3"
            alt="About Us Hero Image"
            class="object-contain max-w-full aspect-[45.45] w-[1061px]"
        />
    </div>

      <section
        data-layername="background"
        class="flex z-0 self-center w-[95%] mx-auto bg-gray-100 min-h-[500px]"
      ></section>
      <article
        data-layername="ourMission"
        class="flex absolute z-0 flex-col pr-2 pb-2.5 max-w-full rounded-none h-[249px] right-[108px] top-[121px] w-[516px]"
      >
        <h2
          data-layername="ourMision"
          class="font-semibold leading-none uppercase tracking-[3px]"
        >
          Our mission
        </h2>
        <h3
          data-layername="creatingValuableContent"
          class="mt-6 text-3xl font-bold tracking-tighter leading-10"
        >
          Creating valuable content for creatives all around the world
        </h3>
        <p
          data-layername="missionDescription"
          class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </article>
      <article
        data-layername="aboutUs"
        class="flex absolute left-20 bottom-24 z-0 flex-col pr-5 max-w-full font-bold rounded-none h-[308px] w-[515px] max-md:pr-5"
      >
        <h2
          data-layername="aboutUsTitle"
          class=" font-semibold leading-none uppercase tracking-[3px]"
        >
          ABOUT US
        </h2>
        <h3
          data-layername="aboutUsSubtitle"
          class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full"
        >
          We are a community of content writers who share their learnings
        </h3>
        <p
          data-layername="aboutUsDescription"
          class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <router-link :to="{ name: 'about' }"
          data-layername="readMore"
          class="mt-7 text-lg leading-8 text-amber-300 hover:text-amber-400 transition-colors"
          tabindex="0"
          aria-label="Read more about our community"
        >
          Read More &gt;
      </router-link>
      </article>
    </main>
  </template>
  
  <script lang="ts">
  export default {
    name: 'AboutContent'
  }
  </script>