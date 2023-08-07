<script lang="ts" setup>
interface Props {
  name: string;
  image: string;
}
defineProps<Props>();
</script>

<template>
  <div
    class="flex group relative items-center justify-center bg-gray-100 md:h-80 h-40 md:w-80 xl:w-150 w-screen rounded"
  >
    <div class="flex flex-col">
      <NuxtLink :href="`/collections/${name}`">
        <img
          class="md:h-80 h-40 object-cover md:w-80 xl:w-150 w-screen object-top group-hover:scale-99 transition duration-400 rounded"
          :src="image"
          alt=""
        />
        <span
          class="absolute md:bottom-6 left-6 bottom-2 font-melodrama group-hover:scale-110 transition duration-400 uppercase text-white font-bold text-2xl z-10"
          >{{ name }}</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
