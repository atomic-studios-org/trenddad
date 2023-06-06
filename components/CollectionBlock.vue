<script lang="ts" setup>
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100 h-80 w-180">
    <div class="flex flex-col">
      <NuxtLink :href="`/collections/${name}`">Go to collection</NuxtLink>
    </div>
  </div>
</template>
