<script lang="ts" setup>
interface Props {
  name: string;
  image: string;
}
defineProps<Props>();
</script>

<template>
  <div
    class="flex group relative items-center justify-center bg-gray-100 h-80 lg:w-180 w-80 rounded"
  >
    <div class="flex flex-col">
      <NuxtLink :href="`/collections/${name}`">
        <img
          class="h-80 object-cover lg:w-180 w-80 object-top group-hover:scale-99 transition duration-400 rounded"
          :src="image"
          alt=""
        />
        <span
          class="absolute bottom-6 left-6 font-melodrama group-hover:scale-110 transition duration-400 uppercase text-white font-bold text-2xl z-10"
          >{{ name }}</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
