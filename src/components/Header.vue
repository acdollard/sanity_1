<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
  <header class="bg-slate-100 pt-4 pb-2 sm:flex sm:justify-between sm:items-center">

    <div class="flex items-center justify-between px-4">
      <div class="p-2">
        <a href="/" class="text-lg transition-all ease-in">Hillsboro Web Designs</a>
      </div>
    
      <div class="flex items-center sm:hidden p-2">
        <button @click="toggleOpen" class=" transition-all hover:bg-slate-600 hover:text-slate-100 rounded">
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

    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 sm:flex ">
      <a href="/about" class="px-4 py-2 block transition ease-in delay-75 hover:bg-slate-600 hover:text-slate-100 rounded ">About</a>
      <a href="#" class="px-4 py-2 block transition ease-in hover:bg-slate-600 hover:text-slate-100 rounded  ">Contact</a>
      <a href="#" class="px-4 py-2 block transition ease-in hover:bg-slate-600 hover:text-slate-100 rounded ">Portfolio</a>
    </div>

  </header>
</template>



