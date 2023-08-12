<script lang="ts" setup>
import { useCartStore } from "../../stores/cart-store";
const store = useCartStore();
const {data} = useAuth()
const user = data.value?.user;

</script>

<template>
  <div className="absolute z-20 flex top-0 h-6 w-screen items-center justify-center bg-black text-xs text-white">
        
      </div>
  <NuxtLink href="/" class="absolute top-8 md:top-4 md:left-8 lg:left-16 lef-2 decoration-none ml-4"
      ><img class="md:h-16 h-10 w-auto" src="/trend-dad.png" alt ="" /></NuxtLink
    >
  <div
    class="h-10 mt-6 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black"
  >
    <div></div>
    <div class="flex mt-2 items-center gap-2 mr-2">
      <div class="flex items-center space-x-2">
        <div class="md:flex items-center space-x-2 hidden">
          <NuxtLink href="/help"
            ><div class="i-mdi-help-circle-outline text-2xl text-black"
          /></NuxtLink>
          <NuxtLink v-if="user" href="/account"
            ><div class="i-mdi-account-outline text-2xl text-black"
          /></NuxtLink>
          <NuxtLink v-else href="/sign-in"
            ><div class="i-mdi-account-outline text-2xl text-black"
          /></NuxtLink>
          <!-- <div class="i-mdi-cards-heart-outline text-2xl text-black" /> -->
          <NuxtLink href="/actions"
            ><div class="i-mdi-ruler-square-compass text-2xl text-black"
          /></NuxtLink>
          <NuxtLink href="/cart" class="flex pl-4 items-center"
            ><div class="i-mdi-shopping-outline text-2xl text-black"
          /><div class="group hover:text-gray-600">
            <span
              class="bg-sky-900 group-hover:bg-sky-800 text-white rounded-full px-2 py-1"
              >{{ store.getCart.length }}</span
            ></div
          ></NuxtLink>
        </div>
      </div>
<NuxtLink href="/cart" class="flex md:hidden pl-4 items-center"
            ><div class="i-mdi-shopping-outline text-2xl text-black"
          /><div class="group hover:text-gray-600">
            <span
              class="bg-sky-900 group-hover:bg-sky-800 text-white rounded-full px-2 py-1"
              >{{ store.getCart.length }}</span
            ></div
          ></NuxtLink>
      <div></div>
    </div>
  </div>
</template>
