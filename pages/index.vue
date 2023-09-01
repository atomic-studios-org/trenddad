<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const { data, error, refresh } = await useAsyncData("getProducts", () =>
  $fetch("/api/getProducts", {
    method: "POST",
    body: {
      cartItems: [],
    },
  })
);
const products = data.value?.data;
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
      <div
        class="absolute md:bottom-3 bottom-1 z-20 lg:left-40 left-2 right-20"
      >
        <NuxtLink
          to="/trending"
          class="md:py-2 py-1 md:px-4 px-2 bg-purple-400 text-black transition font-melodrama cursor-pointer text-sm md:text-2xl hover:bg-purple-500 font-bold"
        >
          Go To Trending »
        </NuxtLink>
      </div>
      <span
        class="absolute z-20 bottom-0 lg:right-40 right-2 text-white font-bold font-melodrama text-sm md:text-3xl"
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
    <div class="flex flex-col items-center mt-6">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
      >
        <div
          class="flex relative items-center justify-center h-80 w-80"
          :key="i"
          v-for="(item, i) in products"
        >
          <product-block
            :name="(item.name as string)"
            :image="(item.image as string)"
            :id="item.id"
            :price="(item.price as number)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
