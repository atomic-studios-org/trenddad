<script lang="ts" setup>
import { useCartStore } from "../../stores/cart-store";
const store = useCartStore();
</script>

<template>
  <div
    class="h-10 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black"
  >
    <NuxtLink href="/" class="decoration-none ml-4"
      ><h1 class="font-bespokestencil text-sky-600 md:text-4xl text-xl">
        FESTiSHOPPA
      </h1></NuxtLink
    >
    <div class="flex items-center gap-2 mr-2">
      <div class="flex items-center space-x-2">
        <div class="md:flex items-center space-x-2 hidden">
          <div class="i-mdi-help-circle-outline text-2xl text-black" />
          <div class="i-mdi-account-outline text-2xl text-black" />
          <div class="i-mdi-cards-heart-outline text-2xl text-black" />
          <div class="i-mdi-ruler-square-compass text-2xl text-black" />
          <div class="i-mdi-shopping-outline text-2xl text-black" />
        </div>
        <NuxtLink href="/cart" class="px-2 text-black underline-none">
          <span class="group hover:text-gray-600">
            Bag<span
              class="bg-sky-900 group-hover:bg-sky-800 text-white rounded-full px-1"
              >{{ store.cart.length }}</span
            ></span
          >
        </NuxtLink>
      </div>

      <div><SwitchTranslation /></div>
    </div>
  </div>
</template>
