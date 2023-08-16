<script lang="ts" setup>
const { status, data, signIn, signOut } = useAuth();

const code = ref();
const password = ref();
const route = useRoute();
const email = route.query.email;
const codequery = route.query.code;

onMounted(() => {
  code.value = codequery;
});

const handleConfirmEmail = async () => {
  const { data, error } = useAsyncData("confirmEmail", async () => {
    return await $fetch("/api/confirmEmail", {
      method: "POST",
      body: {
        code: code.value,
        email: email,
        password: password.value,
      },
    });
  });

  navigateTo("/sign-in");
};

if (data.value?.user?.email) {
  navigateTo("/account/settings");
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="px-16 py-20 flex flex-col border-groove border-black border-0.5 rounded-sm"
    >
      <span class="font-bold font-melodrama text-xl">Confirm your email</span>

      <form
        @submit.prevent="handleConfirmEmail"
        class="flex flex-col gap-2 mt-2"
      >
        Please enter the 4 digit code.
        <label>Code:</label>
        <input
          v-model="code"
          placeholder="...."
          type="text"
          class="py-1.5 px-4 w-10 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
        <label>Password:</label>
        <input
          v-model="password"
          placeholder="Enter your password"
          type="password"
          class="py-1.5 px-4 w-40 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />

        <button
          type="submit"
          class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        >
          Enter code
        </button>
      </form>
    </div>
  </div>
</template>
