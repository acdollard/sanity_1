<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
  <header class="bg-slate-100 lg:flex lg:justify-between lg:items-center">

    <div class="flex items-center justify-between px-4 py-3">
      <div class="">
        <a href="/" class="text-md transition-all ease-in">Hillsboro Web Designs</a>
      </div>
    
      <div>
        <button @click="toggleOpen" class="lg:hidden transition-all p-2 hover:bg-slate-600 hover:text-slate-100 rounded">
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

    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 lg:flex lg:p-0">
      <a href="/about" class="px-2 py-1 block transition ease-in delay-75 hover:bg-slate-600 hover:text-slate-100 rounded ">About</a>
      <a href="#" class="px-2 py-1 block transition ease-in hover:bg-slate-600 hover:text-slate-100 rounded  ">Contact</a>
      <a href="#" class="px-2 py-1 block transition ease-in hover:bg-slate-600 hover:text-slate-100 rounded ">Portfolio</a>
    </div>

  </header>
</template>



