<script lang="ts" setup>
const isOpenCollections = ref(false);
const isOpenShop = ref(false);

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
    class="h-10 flex bg-white md:w-4/6 w-full mx-auto justify-between items-center text-black mb-1"
  >
    <div class="flex items-center md:space-x-4 ml-1">
      <div
        @click="
          isOpenCollections = !isOpenCollections;
          isOpenShop = false;
        "
        class="group flex items-center"
      >
        <button
          class="bg-white md:text-md lg:text-xl text-sm text-black border-none cursor-pointer group-hover:text-gray-600"
        >
          Collections
        </button>
        <i class="-ml-2 i-mdi-chevron-down group-hover:text-gray-600" />
      </div>
      <!-- Dropdown menu -->
      <div
        v-if="isOpenCollections"
        class="fixed z-30 p-2 top-22 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <NuxtLink
          href="/collections/fans"
          class="block text-black hover:text-gray-600 decoration-none px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >Fans</NuxtLink
        >

        <NuxtLink
          href="/collections/hats"
          class="block text-black hover:text-gray-600 decoration-none px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >Hats</NuxtLink
        >

        <NuxtLink
          href="/collections/effects"
          class="block text-black hover:text-gray-600 decoration-none px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >Effects</NuxtLink
        >

        <NuxtLink
          href="/collections/bearfans"
          class="block text-black hover:text-gray-600 decoration-none px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >Bearfans</NuxtLink
        >
      </div>

      <div>
        <NuxtLink href="/trending"
          ><button
            class="bg-white border-none md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Trending
          </button></NuxtLink
        >
      </div>
      <div>
        <NuxtLink href="/account/orders"
          ><button
            class="bg-white border-none md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Orders
          </button></NuxtLink
        >
      </div>
    </div>

    <div class="flex items-end space-x-2 md:mr-0 mr-1">
      <div v-if="data?.user?.email" class="xl:flex xl:flex-col hidden">
        <NuxtLink href="/account" class="text-black"
          ><span class="font-bold text-sm underline cursor-pointer"
            >My Account</span
          ></NuxtLink
        >
        <span class="text-sm">{{ data?.user.email }}</span>
      </div>
      <div>
        <button
          class="cursor-pointer bg-black md:text-lg text-xs text-white md:px-5 px-1 flex-shrink-0 py-1.5 hover:bg-gray-900 border-none"
          @click="handleSignOut"
          v-if="data?.user?.email"
        >
          Sign Out
        </button>
        <button
          class="cursor-pointer md:text-lg text-xs bg-black text-white md:px-5 px-1 flex-shrink-0 py-1.5 hover:bg-gray-900 border-none"
          @click="handleSignIn"
          v-if="!data?.user?.email"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>
