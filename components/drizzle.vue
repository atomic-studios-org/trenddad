<script lang="ts" setup>
const nameInput = ref("");
const { data, pending, error, refresh } = await useAsyncData("getUsers", () =>
  $fetch("/api/getData")
);

const addData = async () => {
  try {
    await $fetch("/api/addData", {
      method: "post",
      body: { name: nameInput.value },
    });
    await refresh();
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <h1>Drizzle planetscale db connection</h1>
    <label>Add data:</label>
    <input type="text" v-model="nameInput" />
    <button @click="addData">Add</button>
    <div v-if="error">There was an error</div>
    <div v-else>
      <div v-if="!pending" v-for="item in data?.data">
        {{ item.name }} {{ item.popularity }}
      </div>
    </div>
  </div>
</template>
