<script setup lang="ts">

</script>

<template>
  <footer class="flex overflow-hidden flex-col justify-center self-stretch px-20 py-14 mt-28 w-full bg-gray-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a65df024d308de2e83a4059a395ae4e3afb6baef149d69ca11b8f9b16a3c2b9?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" 
        alt="Footer Logo" 
        class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" 
      />
      <nav 
        class="flex gap-6"
        role="navigation"
        aria-label="Footer navigation"
      >
        <router-link :to="{ name: 'home' }" class="grow hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Home</router-link>
        <router-link :to="{ name: 'blog' }" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Blog</router-link>
        <a href="#" class="my-auto leading-loose hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">About us</a>
        <router-link :to="{ name: 'contact' }" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Contact us</router-link>
        <a href="#" class="basis-auto hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Privacy Policy</a>
      </nav>
    </div>

    <div class="px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <form class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
            Subscribe to our newsletter
          </h2>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-wrap gap-6 mt-1 w-full max-md:mt-10 max-md:max-w-full">
            <label for="email" class="sr-only">Email address</label>
            <input 
              type="email" 
              id="email" 
              class="grow px-6 py-6 text-base leading-loose border border-solid border-neutral-600 text-zinc-500 w-fit max-md:px-5"
              placeholder="Enter Your Email"
              required
              aria-label="Email address"
            />
            <button 
              type="submit"
              class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 max-md:px-5"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white max-md:mt-10 max-md:max-w-full">
      <address class="opacity-70 not-italic">
        Finstreet 118 2561 Fintown
      </address>
      <div class="social-links">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5da237e3faa9823ad86a5bba05b6863f488923271c773f11c230ad868c7bad?placeholderIfAbsent=true&apiKey=c77564c134cc4e549f9977e76017d3f3" 
          alt="Social Media Links" 
          class="object-contain shrink-0 self-start mt-3 w-36 max-w-full aspect-[9.01]" 
        />
      </div>
    </div>
    
    <div class="contact-info mt-4">
      <a 
        href="mailto:Hello@finsweet.com" 
        class="text-base leading-7 text-white opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Hello@finsweet.com
      </a>
      <a 
        href="tel:02079932905" 
        class="text-base leading-7 text-white opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-4"
      >
        020 7993 2905
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubscribe() {
      // Handle newsletter subscription
      console.log('Subscribe email:', this.email)
      this.email = ''
    }
  }
}
</script>
