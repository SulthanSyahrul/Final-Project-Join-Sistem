<template>
    <section class="author-list flex flex-col grow shrink self-stretch my-20 min-w-[240px] w-[1197px] mx-auto max-md:max-w-full">
      <h2 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
        List of Authors
      </h2>
      <div class="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <AuthorCard
            v-for="author in authors.slice(0, 4)"
            :key="author.id"
            :author="author"
            class="w-3/12 max-md:w-full"
          />
        </div>
      </div>
      <div class="flex flex-col mt-8 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <AuthorCard
            v-for="author in authors.slice(4)"
            :key="author.id"
            :author="author"
            class="w-3/12 max-md:w-full"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AuthorCard from './AuthorCard.vue';
  
  interface Author {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    ratingImageUrl: string;
  }
  
  export default defineComponent({
    name: 'AuthorListContent',
    components: {
      AuthorCard,
    },
    data() {
      return {
        authors: [
          {
            id: 1,
            name: 'Floyd Miles',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e8603bd8d194ab40e28b9172c04eecec727b3d0369fcb3c958d26240c843177?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/65dc86f2f68f4bb4d2727ec9abd7972f43036a91f6a37cf653c83966ccb74109?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 2,
            name: 'Dianne Russell',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8fea7c0123dbfdf49c5cba16e86989d8aa6b53f3e9817cefdc011a9d25c4c9ee?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81e0809cfadb688fa196592c991d741cf7fb73886bad78d509260ffdd9cce9ca?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 3,
            name: 'Jenny Wilson',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c6ceeb9c118ad8a49491fd4f38ee8f3f2db1064554f6d2c3f6b962d93dcd289?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5ace8f896261cbff598082df8edc296416e2c54a3b423b7a646510d33f246237?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 4,
            name: 'Leslie Alexander',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d4a75d4530a162a2ad290706d8c44d907105539ac2aeaa958d9c0220b2952aad?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c6d4717410b25d488bb0c084e2eabc3dcd2595cbdf2062ed18d9d2202f29f6e?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 5,
            name: 'Guy Hawkins',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/271123747631150187482e2919b8852abac07051adc36157d78a577d3cb938ce?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/92fe8f2b0781def780d684c095147be48beca01685e4a779d98a0c60a323dfcb?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 6,
            name: 'Eleanor Pena',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01d02edf378d73962c28d6eb0b8e440841189db9c511b7c1f2322dcdde02e1f6?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/397ac5de3af7222c8e90cbe8ba0dc8da5f9d8bd8d7d0fa74779b1fdc3fd730ec?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 7,
            name: 'Robert Fox',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a348f4d890eaa1f6567e1dc1f66eae160410c37ad3a2fdbe769239b16efa3a0d?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07de9c2d29bbb919ff2b63db637876cf7989013d446c600eb1988a3fdbcff5da?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
          {
            id: 8,
            name: 'Jacob Jones',
            role: 'Content Writer @Company',
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/290763723a25a718c6def8d5f6aa26e724ef673febbeb5d276b5450ebd42dda5?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
            ratingImageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6a4115b19f94519cc6d35111d42d764e92c36431dcf87e621e8963d74d1c6d0?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3',
          },
        ] as Author[],
      };
    },
  });
  </script>