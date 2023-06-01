<script lang="ts" setup>
const { status, data, signIn, signOut } = useAuth();
const handleSignIn = async () => {
  await signIn("discord");
};
const handleSignOut = async () => {
  await signOut();
};
</script>

<template>
  <div
    class="h-10 flex bg-white w-screen justify-between items-center text-black"
  >
    <div class="flex space-x-4 font-switzer text-2xl ml-4">
      <NuxtLink class="text-black underline" href="/">Home</NuxtLink
      ><NuxtLink class="text-black underlline" href="/db">All products</NuxtLink
      ><NuxtLink class="text-black underlline" href="/db">Categories</NuxtLink>
      <NuxtLink class="text-black underlline" href="/db">Support</NuxtLink>
      <NuxtLink class="text-black underlline" href="/db">My orders</NuxtLink>
    </div>
    <div class="mr-6 flex items-center gap-2">
      <div class="flex flex-col mr-2">
        <span>Welcome back</span>
        <span>{{ data?.user?.email }}</span>
      </div>
      <div>
        <button v-if="!data?.user?.email" @click="handleSignIn">Sign in</button>
        <button v-if="data?.user?.email" @click="handleSignOut">
          Sign Out
        </button>
      </div>

      <div><SwitchTranslation /></div>
    </div>
  </div>
</template>
