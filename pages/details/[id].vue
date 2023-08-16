<script lang="ts" setup>
import { useCartStore } from "@/stores/cart-store";

interface Product {
  data: {
    id: number;
    name: string | null;
    collection: string | null;
    image: string | null;
    price: number | null;
    description: string | null;
  };
}
const store = useCartStore();
const { params } = useRoute();
const details = ref();

const { data } = useAsyncData("getproduct", async () => {
  return await $fetch("/api/getProduct", {
    method: "POST",
    body: { id: params.id },
  });
});

console.log(data.value?.data);

const handleAddToCart = (id: number) => {
  store.addToCart(id);
};
</script>

<template>
  <div class="w-screen flex justify-center items-center min-h-screen">
    <div
      class="w-11/12 md:flex md:mb-10 mb-40 grid md:mt-0 mt-20 grid-cols-1 gap-20 md:gap-0"
    >
      <div class="">
        <nuxt-img
          v-if="data?.data?.image"
          :height="500"
          :width="500"
          class="w-80 h-80 mx-auto p-5 border bg-black border-groove transition hover:scale-102 duration-700"
          :src="`/productimages/${(data?.data?.image as string)}.webp`"
          :alt="(data?.data?.name as string)"
        />
        <div v-else class="h-80 w-80 border-1 border-groove border-black"></div>
      </div>
      <div class="6/12">
        <div class="md:px-16 px-2 flex flex-col">
          <span class="uppercase text-sm text-purple-700 font-bold"
            >Item id .{{ data?.data?.id }}</span
          >
          <div class="flex gap-1">
            <span>Collection: </span><span>{{ data?.data.collection }}</span>
          </div>
          <span class="font-bold mt-1 text-4xl font-inter">{{
            data?.data?.name
          }}</span>

          <span class="mt-4">{{ data?.data?.description }}</span>
          <div class="flex gap-2 items-end">
            <div
              class="text-2xl px-4 py-3 bg-gray-900 text-white font-bold mt-2"
            >
              <span>€ {{ data?.data.price?.toFixed(2) }},-</span>
            </div>
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
  </div>
</template>
