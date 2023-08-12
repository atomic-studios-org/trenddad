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
   <NuxtLink :to="`/details/${id}`">
   <img class="relative absolute h-80 w-80 object-cover" :src="`/${image}.png`" alt="image" />
          <div class="absolute bottom-4 bg-black p-2 rounded-lg left-4 flex flex-col text-white">
            <span class="font-melodrama font-bold text-lg">{{ name }}</span>
            <button class="py-1.5 hover:bg-white hover:text-black hover:border-black transition px-4 border-white border-groove bg-black text-white cursor-pointer">View product</button>
          </div>
   </NuxtLink>
</template>