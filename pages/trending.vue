<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();

definePageMeta({
  layout: "default",
});

const { data, error, refresh } = await useAsyncData("getProducts", () =>
  $fetch("/api/getProducts", {
    method: "POST",
    body: {
      cartItems: [],
    },
  })
);
const products = data.value?.data;
const handleAddToCart = (id: number) => {
  store.addToCart(id);
};
</script>

<template>
  <div v-if="products">
    <div class="relative h-80 bg-sky-700 flex items-center justify-center">
      <div>Banner foto</div>
      
      <img
      src="/collection.jpg"
      alt="dalle"
        class="object-cover object-center absolute h-80 z-10 w-screen bg-gradient-to-t from-white to-transparent"
      />
      <div
        class="absolute h-80 z-10 flex items-center justify-center w-screen bg-gradient-to-t from-white/90 to-transparent"
      ><span class="font-melodrama text-5xl tracking-6 text-black  text-shadow  ">TRENDING</span></div>
    </div>
    <div class="flex flex-col items-center mt-6">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
      <div
          class="flex relative items-center justify-center h-80 w-80"
          :key="i"
          v-for="(item, i) in products"
        >
        <img class="relative absolute h-80 w-80 object-cover" :src="`/${item.image}.png`" alt="image" />
          <div class="absolute bottom-4 bg-black p-2 rounded-lg left-4 flex flex-col text-white">
            <span class="font-melodrama font-bold text-lg">{{ item.name }}</span>
            <button class="py-1.5 hover:bg-white hover:text-black hover:border-black transition px-4 border-white border-groove bg-black text-white cursor-pointer" @click="handleAddToCart(item.id)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
