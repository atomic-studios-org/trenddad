<script lang="ts" setup>
const isOpenCollections = ref(false);

const { data, signOut } = useAuth();
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
        @click="isOpenCollections = !isOpenCollections"
        class="group flex items-center"
      >
        <button
          class="bg-white md:text-md lg:text-xl text-sm text-black border-none cursor-pointer group-hover:text-gray-600"
        >
          Top Collections
        </button>
        <i
          class="-ml-2 cursor-pointer i-mdi-chevron-down group-hover:text-gray-600"
        />
      </div>
      <!-- Dropdown menu -->
      <div
        v-if="isOpenCollections"
        class="absolute z-30 p-2 top-27 font-normal bg-white divide-y divide-gray-100 shadow w-44"
      >
        <NuxtLink
          @click="isOpenCollections = false"
          href="/collections/kitchen"
          class="block text-black hover:text-white hover:bg-black decoration-none px-1 py-2 cursor-pointer"
          >kitchen</NuxtLink
        >
        <NuxtLink
          @click="isOpenCollections = false"
          href="/collections/cars"
          class="block text-black hover:text-white hover:bg-black decoration-none px-1 py-2 cursor-pointer"
          >cars</NuxtLink
        >
        <NuxtLink
          @click="isOpenCollections = false"
          href="/collections/cleaning"
          class="block text-black hover:text-white hover:bg-black decoration-none px-1 py-2 cursor-pointer"
          >cleaning</NuxtLink
        >
        <NuxtLink
          @click="isOpenCollections = false"
          href="/collections/bathroom"
          class="block text-black hover:text-white hover:bg-black decoration-none px-1 py-2 cursor-pointer"
          >bathroom</NuxtLink
        >
        <NuxtLink
          @click="isOpenCollections = false"
          href="/collections/children"
          class="block text-black hover:text-white hover:bg-black decoration-none px-1 py-2 cursor-pointer"
          >chilren</NuxtLink
        >
      </div>

      <div>
        <NuxtLink @click="isOpenCollections = false" href="/trending"
          ><button
            class="bg-white border-none md:text-md lg:text-xl text-sm hover:text-gray-600 cursor-pointer"
          >
            Trending
          </button></NuxtLink
        >
      </div>
      <div>
        <NuxtLink @click="isOpenCollections = false" href="/account/orders"
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
          class="cursor-pointer bg-black md:text-lg text-xs text-white md:px-5 px-3 flex-shrink-0 py-1.5 hover:bg-gray-900 border-none"
          @click="handleSignOut"
          v-if="data?.user?.email"
        >
          Sign Out
        </button>
        <NuxtLink
          to="/sign-in"
          class="cursor-pointer md:text-lg text-xs bg-black text-white md:px-5 px-3 flex-shrink-0 py-1.5 hover:bg-gray-900 border-none"
          v-if="!data?.user?.email"
        >
          Sign In
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
