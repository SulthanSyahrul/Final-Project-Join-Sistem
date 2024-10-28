<template>
    <section 
  class="flex flex-wrap gap-10 items-start px-16 py-12 mt-14 max-w-full bg-amber-300 min-h-[240px] text-neutral-600 w-[768px] max-md:px-5 max-md:mt-10 mx-auto"
  aria-label="Contact Information"
>
    <article 
    class="flex justify-center flex flex-col grow shrink items-start text-xl leading-relaxed rounded-none min-w-[240px] w-[235px]"
  >
        <h2 class="text-sm leading-none opacity-60">Working hours</h2>
        <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
        <p class="mt-4 font-bold">Monday To Friday</p>
        <time class="font-bold">9:00 AM to 8:00 PM</time>
        <p class="text-base leading-7 opacity-60">Our Support Team is available 24/7</p>
      </article>
  
      <article 
        class="flex flex-col grow shrink items-start pb-7 min-w-[240px] w-[235px]"
      >
        <h2 class="text-sm leading-none opacity-60">Contact Us</h2>
        <hr class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
        <a 
          href="tel:02079932905" 
          class="mt-4 text-xl font-bold leading-relaxed"
          aria-label="Call us at 020 7993 2905"
        >
          020 7993 2905
        </a>
        <a 
          href="mailto:hello@finsweet.com" 
          class="text-base leading-7 opacity-60"
          aria-label="Email us at hello@finsweet.com"
        >
          hello@finsweet.com
        </a>
      </article>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'ContactContent'
  }
  </script>