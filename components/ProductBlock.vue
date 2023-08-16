<script lang="ts" setup>
import { useCartStore } from "@/stores/cart-store";
const store = useCartStore();

interface Props {
  name: string;
  image: string;
  id: number;
}
defineProps<Props>();
</script>
<template>
  <NuxtLink :to="`/details/${name}?id=${id}`">
    <nuxt-img
      :height="500"
      class="relative absolute h-80 w-80 object-cover"
      :src="`/productimages/${image}.webp`"
      alt="image"
    />
    <div
      class="absolute bottom-4 bg-white p-2 rounded-sm left-4 flex flex-col text-black"
    >
      <span class="font-inter font-bold text-lg">{{ name }}</span>
      <button
        class="py-1.5 hover:bg-black hover:text-white hover:border-white transition px-4 border-black text-sm border-groove bg-white text-black cursor-pointer"
      >
        View product
      </button>
    </div>
  </NuxtLink>
</template>
