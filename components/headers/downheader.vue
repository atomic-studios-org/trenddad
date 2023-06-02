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
      <div>
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
            class="bg-white border-none md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Trending
          </button></NuxtLink
        >
      </div>
      <div>
        <NuxtLink href="/"
          ><button
            class="bg-white border-none md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Orders
          </button></NuxtLink
        >
      </div>
      <div>
        <div
          @click="
            isOpenShop = !isOpenShop;
            isOpenCollections = false;
          "
          class="group flex items-center"
        >
          <button
            class="bg-white text-black border-none cursor-pointer md:text-md lg:text-xl text-sm group-hover:text-gray-600"
          >
            Shop
          </button>
          <i class="-ml-2 i-mdi-chevron-down group-hover:text-gray-600" />
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

    <div class="flex items-end space-x-2 md:mr-0 mr-1">
      <div v-if="data?.user.email" class="xl:flex xl:flex-col hidden">
        <span class="font-bold text-sm underline cursor-pointer"
          >Order history</span
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
