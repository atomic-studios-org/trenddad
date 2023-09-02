<script lang="ts" setup>
const email = ref();
const openPopup = ref(false);
const isLoading = ref(false);

const handleConfirmEmail = async () => {
  isLoading.value = true;
  await $fetch("/api/reset-password", {
    method: "POST",
    body: {
      email: email.value,
    },
  });
  isLoading.value = false;
  openPopup.value = true;
};
</script>

<template>
  <div
    v-if="openPopup"
    class="fixed top-0 left-0 right-0 z-40 h-screen flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div
      class="relative py-16 z-50 px-16 bg-white border border-groove border-gray-300"
    >
      <span
        @click="openPopup = false"
        class="absolute top-2 right-2 cursor-pointer text-xl"
        >X</span
      >
      <div class="flex flex-col">
        <span class="font-bold"
          >Please check your inbox to reset your password.</span
        >
      </div>
    </div>
  </div>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="px-16 py-20 flex flex-col border-groove border-black border-0.5 rounded-sm"
    >
      <span class="font-bold font-melodrama text-xl">Enter your email</span>

      <form
        @submit.prevent="handleConfirmEmail"
        autocomplete="off"
        class="flex flex-col gap-2 mt-2"
      >
        <label for="email">Email:</label>
        <input
          name="email"
          id="email"
          required
          v-model="email"
          placeholder="Enter your Email"
          type="text"
          class="py-1.5 px-4 w-40 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />

        <button
          :disabled="isLoading"
          type="submit"
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        >
          Reset password
        </button>
      </form>
    </div>
  </div>
</template>
