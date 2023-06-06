<script lang="ts" setup>
import { NuxtLayout } from "~/.nuxt/components";
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();
const cartItems: Ref<number[]> = ref([]);

cartItems.value.push(...store.cart);
const { data, pending, error, refresh } = await useAsyncData(
  "getProducts",
  () =>
    $fetch("/api/getCartItems", {
      method: "POST",
      body: {
        cartItems: cartItems.value,
      },
    })
);

const removeCartItem = async (index: number) => {
  store.removeFromCart(index);
  cartItems.value = [...store.cart];
  await refresh();
};
</script>

<template>
  <div class="flex flex-col items-center w-screen min-h-screen">
    <div>
      <h1>Cart items</h1>

      <div :key="i" v-for="(item, i) in data?.data">
        <div class="flex space-x-20 p-4" :key="ind" v-for="(it, ind) in item">
          <div>
            <p>{{ it.name }}</p>
            <span>€29.29</span>
          </div>
          <img class="h-20" :src="`/${it.image}.png`" alt="" />
          <button @click="removeCartItem(i)">X</button>
        </div>
        <div class="h-0.5 mt-2 mb-2 bg-gray-100 rounded w-full" />
      </div>
      <div class="space-x-4">
        <NuxtLink href="/">Go back</NuxtLink
        ><NuxtLink href="/shipping">Continue</NuxtLink>
      </div>
    </div>
  </div>
</template>
