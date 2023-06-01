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
    class="h-10 flex bg-white w-4/6 mx-auto justify-between items-center text-black"
  >
    <div class="flex items-center space-x-4">
      <div>
        <div
          @click="
            isOpenCollections = !isOpenCollections;
            isOpenShop = false;
          "
          class="group flex"
        >
          <button
            class="bg-white text-black border-none cursor-pointer group-hover:text-gray-600"
          >
            Collections
          </button>
          <i class="i-mdi-chevron-down group-hover:text-gray-600" />
        </div>
        <!-- Dropdown menu -->
        <div
          v-if="isOpenCollections"
          class="fixed z-10 p-2 top-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Collection 1</NuxtLink
          >

          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Collection 2</NuxtLink
          >

          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Collection 3</NuxtLink
          >

          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Collection 4</NuxtLink
          >
        </div>
      </div>
      <div>
        <NuxtLink href="/"
          ><button
            class="bg-white border-none hover:text-gray-600 cursor-pointer"
          >
            Trending
          </button></NuxtLink
        >
      </div>
      <div>
        <NuxtLink href="/"
          ><button
            class="bg-white border-none hover:text-gray-600 cursor-pointer"
          >
            My Orders
          </button></NuxtLink
        >
      </div>
      <div>
        <div
          @click="
            isOpenShop = !isOpenShop;
            isOpenCollections = false;
          "
          class="group flex"
        >
          <button
            class="bg-white text-black border-none cursor-pointer group-hover:text-gray-600"
          >
            Shop
          </button>
          <i class="i-mdi-chevron-down group-hover:text-gray-600" />
        </div>
        <!-- Dropdown menu -->
        <div
          v-if="isOpenShop"
          class="fixed z-10 p-2 top-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Dashboard</NuxtLink
          >

          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Settings</NuxtLink
          >

          <NuxtLink
            href="#"
            class="block text-black decoration-none px-4 py-2 hover:bg-gray-100"
            >Earnings</NuxtLink
          >

          <div class="py-1">
            <NuxtLink
              href="#"
              class="block px-4 py-2 text-sm text-black decoration-none text-gray-700 hover:bg-gray-100"
              >Sign out</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        class="cursor-pointer bg-black text-white px-4 py-1 hover:bg-gray-800"
        @click="handleSignOut"
        v-if="data?.user?.email"
      >
        Sign Out
      </button>
      <button
        class="cursor-pointer bg-black text-white px-4 py-1 hover:bg-gray-800"
        @click="handleSignIn"
        v-if="!data?.user?.email"
      >
        Sign In
      </button>
    </div>
  </div>
</template>
