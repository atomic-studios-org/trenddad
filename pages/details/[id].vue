<script lang="ts" setup>

import { useCartStore } from "@/stores/cart-store";

interface Product{
 data: {
  id: number,
  name: string | null,
  collection: string | null,
  image: string | null,
  price: number | null,
  description: string | null
 }
}
const store = useCartStore();
const { params } = useRoute();
const details = ref();

const { data } = useAsyncData("getproduct", async () => {
  return await $fetch("/api/getProduct", {method: "POST", body: {id: params.id}})
}) 

console.log(data.value?.data)

const handleAddToCart = (id: number) => {
  store.addToCart(id);
};
</script>

<template>
  <div class="fixed md:hidden top-12 left-6 z-40 flex gap-4">
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/"
      >Home
    </NuxtLink>
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/cart"
      >Cart
    </NuxtLink>
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/account"
      >My Account
    </NuxtLink>
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/account/orders"
      >Orders
    </NuxtLink>
  </div>
  <div class="fixed hidden sm:top-0 lg:top-130 lg:bottom-12 lg:right-6 z-40 flex gap-4">
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/"
      >Home
    </NuxtLink>
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/cart"
      >Cart
    </NuxtLink>
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/account"
      >My Account
    </NuxtLink>
    <NuxtLink
      class="flex items-center font-melodrama text-black text-lg md:text-2xl"
      href="/account/orders"
      >Orders
    </NuxtLink>
  </div>
  <div class="w-screen flex justify-center items-center min-h-screen">
    <div class="w-11/12 md:flex md:mb-0 mb-40 grid md:mt-0 mt-30 grid-cols-1 gap-20 md:gap-0">
      <div class="">
        <nuxt-img v-if="data?.data?.image"
        :height="500"
        :width="500"
          class="w-40 h-40 mx-auto p-5 border bg-black border-groove transition hover:scale-102 duration-700"
          :src="`/${(data?.data?.image as string)}.png`"
          :alt="(data?.data?.name as string)"
        />
        <div v-else class="h-40 w-40 border-1 border-groove border-black "></div>
      </div>
      <div class="6/12">
        <div class="md:px-16 px-2 flex flex-col">
          <span class="uppercase text-sm text-purple-300 font-bold "
            >Painting .{{ data?.data?.id }}</span
          >
          <span class="font-bold text-4xl text-shadow-md font-melodrama">{{
            data?.data?.name
          }}</span>
        
          <div class="flex gap-2 mt-6 items-center">
            <span class="text-sm">edition</span
            ><span class="text-sm">[1/1]</span>
          </div>

          <span class="mt-4">{{ data?.data?.description }}</span>
          <div>
            <button
              @click="handleAddToCart(data?.data?.id as number)"
              class="bg-black no-underline py-4 text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer disabled:cursor-default hover:bg-gray-900"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
