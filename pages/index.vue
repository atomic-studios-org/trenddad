<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <div
      class="relative lg:h-60 h-40 w-screen min-h-screen bg-black flex items-center justify-center"
    >
      <img
        class="lg:h-60 h-40 object-cover md:w-10/12 w-full"
        src="/collection.jpg"
        alt="banner"
      />
      <div
        class="absolute lg:h-60 h-40 z-10 w-full bg-gradient-to-t from-white/30 opacity-100 to-transparent"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="grid md:grid-cols-2 grid-cols-1 mt-0.5 md:gap-6 md:mt-6">
        <collection-block name="Kitchen" image="/kitchenban.jpg" />
        <!-- <collection-block name="hats" image="/du.png" />
        <collection-block name="effects" image="/renais.png" />
        <collection-block name="bearfans" image="/dalle.png" /> -->
      </div>
    </div>
  </div>
</template>
