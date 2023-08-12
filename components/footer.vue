<script lang="ts" setup></script>

<template>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 p-4">
    <div class="w-full max-w-screen-xl mx-auto md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <img class="md:h-16 h-10 w-auto" src="/trend-dad.png" alt ="" />
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <NuxtLink
              href="#"
              class="mr-4 hover:underline md:mr-6 decoration-none text-black"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="#"
              class="mr-4 hover:underline md:mr-6 decoration-none text-black"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="#"
              class="mr-4 hover:underline md:mr-6 decoration-none text-black"
              >Licensing</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="#"
              class="hover:underline decoration-none text-black"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <NuxtLink href="/" class="hover:underline decoration-none text-black"
          >TREND DAD</NuxtLink
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
