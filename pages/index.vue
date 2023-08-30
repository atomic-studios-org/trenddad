<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <div
      class="relative lg:h-60 h-40 w-screen bg-black flex items-center justify-center"
    >
      <img
        class="lg:h-60 h-40 object-cover md:w-10/12 w-full"
        src="/banner.gif"
        alt="banner"
      />
      <span
        class="absolute z-20 bottom-0 lg:right-40 right-20 text-white font-bold font-melodrama text-xl md:text-3xl"
        >Welcome at trenddad.com</span
      >
      <div
        class="absolute lg:h-60 h-40 z-10 w-full bg-gradient-to-t from-white/30 opacity-100 to-transparent"
      ></div>
    </div>
    <div class="flex flex-col items-center min-h-screen">
      <div class="grid md:grid-cols-2 grid-cols-1 mt-0.5 md:gap-6 md:mt-6">
        <collection-block
          name="kitchen"
          image="/collectionimages/kitchen.jpg"
        />
        <collection-block name="cars" image="/collectionimages/cars.jpg" />
        <collection-block
          name="bathroom"
          image="/collectionimages/bathroom.jpg"
        />
        <collection-block
          name="cleaning"
          image="/collectionimages/cleaning.jpg"
        />
      </div>
    </div>
  </div>
</template>
