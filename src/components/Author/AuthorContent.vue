<template>
    <div class="author-blog">
      <main>
        <section class="author-header flex flex-col self-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div class="background flex flex-col items-center px-20 pt-32 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <div class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
              <div class="max-w-full w-[952px]">
                <div class="flex gap-5 max-md:flex-col">
                  <div class="column flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51f0a715fe631a074d96cd5e508c0f84abf32a18090b355628c8cf8393be9260?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Author's portrait" class="object-contain grow w-full aspect-[0.85] max-md:mt-8" />
                  </div>
                  <div class="column flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                      <h1 class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                        Hey there, I'm Andrew Jonhson and welcome to my Blog
                      </h1>
                      <p class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6adf65d2b2182cdb25b4a072861eb1ed209bb0f828b6136c6697d20e482490?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Decorative image" class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
        </section>
  
        <section class="my-blog self-center mt-20 max-w-full w-[1024px] max-md:mt-10 mx-auto">
          <div class="flex gap-5 max-md:flex-col">
            <div class="column flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-8 max-md:text-4xl">
                <h2 class="self-start max-md:text-4xl">My Posts</h2>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a84db999f41eb883912fce34765f80d676e4ce8721a7fbcc790813b780680ab8?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Blog post image 1" class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2466894da6f5b7920e1eecde0bdfa8a27dbf0a7d4fff0efba1aa13e79222ef?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" alt="Blog post image 2" class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10" />
              </div>
            </div>
            <div class="column flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col mt-48 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
                <span class="self-start uppercase tracking-[3px]">BUSINESS</span>
                <h3 class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Font sizes in UI design: The complete guide to follow
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">ECONOMY</span>
                <h3 class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                  How to build rapport with your web design clients
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AuthorBlogContent',
  });
  </script>
  
  <style scoped>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  </style>