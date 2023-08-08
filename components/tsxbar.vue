<script lang="ts" setup>

const { data } = useAsyncData("get-data", async () => {
    return await $fetch("https://go-first-production.up.railway.app/api/get-data") as any
})
</script>

<template>
  <div class="flex p-2 items-baseline justify-center gap-1 bg-black w-screen">
    <span class="text-white font-inter text-xs">{{data.orders[0].year}}</span>  
  <img class="h-6 invert" :src="data.orders[0].image" alt="tsxtech" />
   <span class="text-white font-inter text-xs">Software. All Rights Reserved</span>  
  </div>
</template>
