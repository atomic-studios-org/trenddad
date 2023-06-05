<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();
let arr: number[] = [];
arr.push(...store.cart);
const { data, pending, error, refresh } = await useAsyncData(
  "getProducts",
  () =>
    $fetch("/api/getCartItems", {
      method: "POST",
      body: {
        cartItems: arr,
      },
    })
);
console.log(data.value?.data);
</script>

<template>
  <div :key="i" v-for="(item, i) in data?.data">
    {{ item[0].name }}{{ item[0].id }}
  </div>
</template>
