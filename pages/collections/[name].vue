<script lang="ts" setup>
import { useCartStore } from "../../stores/cart-store";
const store = useCartStore();

definePageMeta({
  layout: "default",
});
const { params } = useRoute();
const { data, error, refresh } = await useAsyncData(
  "getCollectionProducts",
  () =>
    $fetch("/api/getCollectionProducts", {
      method: "POST",
      body: {
        collection: params.name,
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
    <div class="relative h-80 bg-purple-400 flex items-center justify-center">
      <div>Banner foto</div>
      <div
        class="absolute h-80 z-10 w-screen bg-gradient-to-t from-white to-transparent"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        <div
          class="flex items-center justify-center bg-gray-100 h-80 w-80"
          :key="i"
          v-for="(item, i) in products"
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
