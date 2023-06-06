<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <div class="relative h-80 bg-sky-700 flex items-center justify-center">
      <div>Banner foto</div>
      <div
        class="absolute h-80 z-10 w-screen bg-gradient-to-t from-white to-transparent"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <collection-block name="fans" />
        <collection-block name="hats" />
        <collection-block name="effects" />
        <collection-block name="bearfans" />
      </div>
    </div>
  </div>
</template>
