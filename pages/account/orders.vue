<script lang="ts" setup>
const { data } = useAuth();
const user = data.value?.user;
if (!user) {
  navigateTo("/");
}
</script>

<template>
  <div v-if="user" class="flex md:w-4/6 w-full mx-auto h-screen mt-10">
    <sidebar />
    <div class="md:ml-20 ml-2">
      <h1>Your Orders</h1>
      <span>Here the orders will be shown for the customer</span>
    </div>
  </div>
</template>
