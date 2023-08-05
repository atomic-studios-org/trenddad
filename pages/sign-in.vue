<script lang="ts" setup>
const { status, data, signIn, signOut } = useAuth();
const handleSignIn = async () => {
  await signIn("discord");
};

onMounted(() => {
  if (status.value === "authenticated") {
    navigateTo("/shipping");
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="px-16 py-20 flex flex-col border-groove border-black border-0.5 rounded-sm"
    >
      <span class="font-bold font-melodrama text-xl">Sign in to continue</span>
      <div class="flex flex-col gap-2 mt-6">
        <label>Email:</label>
        <input
          placeholder="Your email"
          type="text"
          class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <label>Password:</label>
        <input
          placeholder="Your password"
          type="text"
          class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <button
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
          @click="() => handleSignIn()"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>
