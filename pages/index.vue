<script lang="ts" setup>
import { useCartStore } from "../stores/cart-store";
const store = useCartStore();

definePageMeta({
  layout: "default",
});
const data = [
  {
    id: 1,
    name: "first",
  },
  { id: 2, name: "seconds" },
  {
    id: 3,
    name: "third",
  },
  { id: 4, name: "fourth" },
];

const handleAddToCart = (item: never) => {
  store.addToCart(item);
};
</script>

<template>
  <div>
    <div class="relative h-80 bg-sky-700 flex items-center justify-center">
      <div>Banner foto</div>
      <div
        class="absolute h-80 z-20 w-screen bg-gradient-to-t from-white to-transparent"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        <div
          class="flex items-center justify-center bg-gray-100 h-80 w-80"
          :key="i"
          v-for="(item, i) in data"
        >
          <div class="flex flex-col">
            <span>{{ item.name }}</span>
            <button @click="handleAddToCart(item.id)">Add to cart</button>
          </div>
        </div>
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        <div
          class="flex items-center mt-6 justify-center bg-gray-100 h-80 w-80"
          :key="i"
          v-for="(item, i) in data"
        >
          <div class="flex flex-col">
            <span>{{ item.name }}</span>
            <button @click="handleAddToCart(item.id)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
