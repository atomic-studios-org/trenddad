<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <div
      class="relative lg:h-80 h-40 w-screen bg-black flex items-center justify-center"
    >
      <img
        class="lg:h-80 h-40 object-fill md:w-10/12 w-full"
        src="/banner1.jpg"
        alt="banner"
      />
      <div
        class="absolute lg:h-80 h-40 z-10 w-full bg-gradient-to-t from-white/30 opacity-100 to-transparent"
      ></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-2">
        <collection-block name="fans" image="/collection.jpg" />
        <collection-block name="hats" image="/du.png" />
        <collection-block name="effects" image="/renais.png" />
        <collection-block name="bearfans" image="/dalle.png" />
      </div>
    </div>
  </div>
</template>
