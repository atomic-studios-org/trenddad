<script lang="ts" setup>
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100 h-80 lg:w-180 w-80">
    <div class="flex flex-col">
      <NuxtLink :href="`/collections/${name}`">Go to collection</NuxtLink>
    </div>
  </div>
</template>
