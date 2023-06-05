<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();

let cartItems: number[] = [];
cartItems.push(...store.cart);
const { data, pending, error, refresh } = await useAsyncData(
  "getProducts",
  () =>
    $fetch("/api/getCartItems", {
      method: "POST",
      body: {
        cartItems: cartItems,
      },
    })
);
</script>

<template>
  <div :key="i" v-for="(item, i) in data?.data">
    {{ item[0].name }}{{ item[0].id }}
  </div>
</template>
