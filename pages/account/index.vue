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
      <h1>Your Account</h1>
      <div>
        <span>Welcome back, {{ user?.name }}</span>
      </div>
      <div class="mt-10">
        <span class="font-semibold">Basic Account information</span>
      </div>
      <div class="pt-10">
        <label class="font-bold">Name:</label>
        <span class="rounded-sm py-1.5 px-3 border-2">{{ user?.name }}</span>
      </div>
      <div class="pt-10">
        <label class="font-bold">Email Address:</label>
        <span class="rounded-sm py-1.5 px-3 border-2">{{ user?.email }}</span>
      </div>
      <div class="pt-3 items-center flex space-x-4">
        <label class="font-bold">Profile picture:</label>
        <img
          v-if="user?.image"
          :src="user?.image"
          class="h-20 w-20 rounded-full"
        />{{}}
      </div>
    </div>
  </div>
</template>
