<script lang="ts" setup></script>

<template>
  <div
    class="h-10 flex bg-white w-screen justify-between items-center text-black"
  >
    <div class="flex space-x-4 font-switzer text-2xl ml-4">
      <NuxtLink class="text-black underline" href="/">Home</NuxtLink
      ><NuxtLink class="text-black underlline" href="/db">DB</NuxtLink>
    </div>
    <div class="mr-6"><SwitchTranslation /></div>
  </div>
</template>
