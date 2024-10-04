<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
  <header class="bg-slate-100 mb-4 pt-4 pb-2 sm:flex sm:justify-between sm:items-center sticky">

    <div class="flex items-center justify-between px-4">
      <div class="p-2">
        <h2 class="text-gradient text-3xl"><a href="/">Hillsboro Web Designs</a></h2>
      </div>
    
      <div class="flex items-center sm:hidden">
        <button @click="toggleOpen" class="p-2 transition-all hover:font-bold rounded">
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
      </div>
    </div>

    <div :class="isOpen ? 'flex' : 'hidden'" class="px-2 sm:flex items-center justify-center">
      <a href="/about" class="px-4 py-2 block transition ease-in delay-75 hover:font-bold rounded ">About</a>
      <a href="/contact" class="px-4 py-2 block transition ease-in delay-75 hover:font-bold rounded">Contact</a>
      <a href="#" class="px-4 py-2 block transition ease-in delay-75 hover:font-bold rounded">Portfolio</a>
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



