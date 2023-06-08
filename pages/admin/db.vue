<script lang="ts" setup>
import { useCartStore } from "../../stores/cart-store";
const productName = ref("");
const collectionName = ref("");
const imageName = ref("");
definePageMeta({
  layout: "default",
});
const { data, error, refresh } = await useAsyncData("getProducts", () =>
  $fetch("/api/getProducts", {
    method: "POST",
  })
);
const addProduct = async () => {
  await useAsyncData("addProduct", () =>
    $fetch("/api/addProduct", {
      method: "POST",
      body: {
        name: productName.value,
        collection: collectionName.value,
        image: imageName.value,
      },
    })
  );

  reloadNuxtApp();
};
const deleteItem = async (name: any) => {
  await useAsyncData("deleteProduct", () =>
    $fetch("/api/deleteProduct", {
      method: "POST",
      body: {
        name: name,
      },
    })
  );
  await refreshNuxtData();
};
const products = data.value?.data;
</script>

<template>
  <div class="flex flex-col items-center h-screen justify-center">
    <div class="w-2/6">
      <form @submit.prevent="addProduct">
        <h1>Add a Product</h1>
        <div class="flex flex-col space-y-2">
          <label>Name</label>
          <input class="h-7 rounded" v-model="productName" type="text" />
          <label>Image</label>
          <input class="h-7 rounded" v-model="imageName" type="text" />
          <label>Collection</label>
          <select class="h-7 rounded" v-model="collectionName">
            <option value="fans">fans</option>
            <option value="hats">hats</option>
            <option value="effects">effects</option>
            <option value="bearfans">bearfans</option>
          </select>
          <button class="bg-white py-2 px-4" type="submit">Add Product</button>
        </div>
      </form>
      <div class="bg-gray-100 mt-10">
        <h1>All Items</h1>
        <div class="space-y-2">
          <div class="flex space-x-8">
            <span>ID</span><span>Name</span><span>Collection</span>
          </div>
          <div :key="i" class="flex space-x-4" v-for="(product, i) in products">
            <span class="font-bold">{{ product.id }}</span>
            <span>{{ product.name }}</span>
            <span>{{ product.collection }}</span>
            <span>{{ product.image }}</span>
            <button class="bg-red rounded" @click="deleteItem(product.name)">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
