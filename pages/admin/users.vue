<script lang="ts" setup>
const { data } = await useAsyncData("getUsers", () =>
  $fetch("/api/getUsers", { method: "POST" })
);

const users = data.value?.data;

const deleteItem = async (name: string) => {
  await useAsyncData("deleteUser", () =>
    $fetch("/api/deleteProduct", {
      method: "POST",
      body: {
        name: name,
      },
    })
  );
  await refreshNuxtData();
};
</script>

<template>
  <div class="bg-gray-100 mt-10">
    <h1>All Items</h1>
    <div class="space-y-2">
      <div class="flex space-x-8">
        <span>ID</span><span>Name</span><span>Collection</span>
      </div>
      <div :key="i" class="flex space-x-4" v-for="(user, i) in users">
        <span class="font-bold">{{ user.id }}</span>
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
        <span>{{ user.street }}</span>
        <span>{{ user.country }}</span>
        <span>{{ user.number }}</span>
        <span>{{ user.zipcode }}</span>
        <!-- <button class="bg-red rounded" @click="deleteItem(user.name)">X</button> -->
      </div>
    </div>
  </div>
</template>
