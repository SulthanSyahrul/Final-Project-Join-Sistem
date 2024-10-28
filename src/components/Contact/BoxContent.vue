<template>
  <div class="flex items-center justify-center min-h-screen">
    <form @submit.prevent="handleSubmit" class="flex flex-col items-center w-[768px] max-w-full gap-14 mt-14 max-md:mt-10">
      <div class="w-full">
        <label for="fullName" class="sr-only">Full Name</label>
        <input
          type="text"
          id="fullName"
          v-model="formData.fullName"
          name="fullName"
          placeholder="Full Name"
          required
          class="gap-2.5 w-full p-6 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 focus:outline-none focus:border-blue-600"
        />
      </div>

      <div class="w-full">
        <label for="email" class="sr-only">Your Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          name="email"
          placeholder="Your Email"
          required
          class="gap-2.5 w-full p-6 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 focus:outline-none focus:border-blue-600"
        />
      </div>

      <div class="flex flex-wrap gap-4 items-center w-full">
        <div class="flex-1 min-w-[240px]">
          <label for="province" class="sr-only">Province</label>
          <select
            id="province"
            v-model="formData.province"
            name="province"
            required
            class="w-full p-6 border border-solid border-zinc-500 border-opacity-50 max-md:px-5 focus:outline-none focus:border-blue-600 appearance-none bg-white"
          >
            <option value="">Province</option>
            <option v-for="province in provinces" :key="province" :value="province">
              {{ province }}
            </option>
          </select>
        </div>

        <div class="flex-1 min-w-[240px]">
          <label for="city" class="sr-only">City</label>
          <select
            id="city"
            v-model="formData.city"
            name="city"
            required
            class="w-full p-6 border border-solid border-zinc-500 border-opacity-50 max-md:px-5 focus:outline-none focus:border-blue-600 appearance-none bg-white"
          >
            <option value="">City</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
      </div>

      <div class="w-full">
        <label for="message" class="sr-only">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          name="message"
          placeholder="Message"
          required
          class="gap-2.5 w-full px-6 pt-6 pb-24 rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] max-md:px-5 focus:outline-none focus:border-blue-600"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="gap-2.5 self-stretch px-72 py-4 text-2xl font-bold leading-none text-white bg-blue-600 hover:bg-blue-700 transition-colors min-h-[64px] w-full max-md:px-5 disabled:opacity-50 disabled:cursor-not-allowed"
        :aria-busy="isSubmitting"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

interface FormData {
  fullName: string
  email: string
  province: string
  city: string
  message: string
}

export default defineComponent({
  name: 'ContactFormContent',
  
  setup() {
    const isSubmitting = ref<boolean>(false)
    
    const formData = reactive<FormData>({
      fullName: '',
      email: '',
      province: '',
      city: '',
      message: ''
    })

    const provinces: string[] = [
      'Ontario',
      'Quebec',
      'British Columbia',
      'Alberta'
    ]

    const cities: string[] = [
      'Toronto',
      'Montreal',
      'Vancouver',
      'Calgary'
    ]

    const handleSubmit = async (): Promise<void> => {
      try {
        isSubmitting.value = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        Object.keys(formData).forEach(key => {
          formData[key as keyof FormData] = ''
        })
        alert('Message sent successfully!')
      } catch (error) {
        alert('Failed to send message. Please try again.')
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      formData,
      isSubmitting,
      provinces,
      cities,
      handleSubmit
    }
  }
})
</script>

<style scoped>
.sr-only {
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

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}
</style>
