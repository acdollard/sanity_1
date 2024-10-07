<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
  <header class="bg-seasalt py-4 sm:flex sm:justify-between sm:items-center font-jakarta">

    <div class="flex items-center justify-between px-4">
      <div class="p-2">
        <h2 class="text-gradient text-2xl"><a href="/">Hillsboro Web Designs</a></h2>
      </div>
    
      <div class="flex items-center sm:hidden">
        <button v-if="!isOpen" @click="toggleOpen" class="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <button v-if="isOpen" @click="toggleOpen" class="p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 50 50"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>  
        </button> 
      </div>
    </div>

    <div :class="isOpen ? 'flex' : 'hidden'" class="px-2 sm:flex items-center justify-around">
      <a href="/" class="px-4 py-2 block text-slate-700  hover:font-semibold rounded">Home</a>
      <a href="/about" class="px-4 py-2 block text-slate-700  hover:font-semibold rounded">About</a>
      <a href="/contact" class="px-4 py-2 block text-slate-700 hover:font-semibold rounded">Contact</a>
      <!-- <a href="#" class="px-4 py-2 block text-slate-700 hover:font-semibold rounded">Portfolio</a> -->
    </div>

  </header>
</template>

<style scoped>
  .text-gradient {
    background-image: var(--accent-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-position: 0%;
  }
</style>



