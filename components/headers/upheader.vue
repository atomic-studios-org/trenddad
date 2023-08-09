<script lang="ts" setup>
import { useCartStore } from "../../stores/cart-store";
const store = useCartStore();
const {data} = useAuth()
const user = data.value?.user;

</script>

<template>
  <NuxtLink href="/" class="fixed top-2 left-24 decoration-none ml-4"
      ><img class="h-16 w-auto" src="/trenddadlogo.png" alt ="" /></NuxtLink
    >
  <div
    class="h-10 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black"
  >
    <div></div>
    <div class="flex items-center gap-2 mr-2">
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
          <NuxtLink href="/cart"
            ><div class="i-mdi-shopping-outline text-2xl text-black"
          /></NuxtLink>
        </div>
        <NuxtLink href="/cart" class="px-2 text-black underline-none">
          <span class="group hover:text-gray-600">
            Bag<span
              class="bg-sky-900 group-hover:bg-sky-800 text-white rounded-full px-1"
              >{{ store.getCart.length }}</span
            ></span
          >
        </NuxtLink>
      </div>

      <div></div>
    </div>
  </div>
</template>
