<script lang="ts" setup>
const { data } = useAuth();
const user = data.value?.user;
if (!user) {
  navigateTo("/sign-in");
}
const isLoading = ref(false);
const { data: userData } = await useAsyncData("getUser", () =>
  $fetch("/api/getUser", {
    method: "POST",
    body: {
      name: user?.name,
      email: user?.email,
    },
  })
);

const zipcodeInput = ref("");
const countryInput = ref("");
const numberInput = ref("");
const streetInput = ref("");

onMounted(() => {
  if (userData) {
    zipcodeInput.value = userData.value?.data[0].zipcode!;
    countryInput.value = userData.value?.data[0].country!;
    numberInput.value = userData.value?.data[0].number!;
    streetInput.value = userData.value?.data[0].street!;
  }
});

const createUser = async () => {
  function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
  isLoading.value = true;
  await useAsyncData("createUser", () =>
    $fetch("/api/createUser", {
      method: "POST",
      body: {
        id: generateUUID(),
        name: user?.name,
        email: user?.email,
        zipcode: zipcodeInput.value,
        street: streetInput.value,
        number: numberInput.value,
        country: countryInput.value,
      },
    })
  );
  isLoading.value = false;
  await navigateTo("/");
};
</script>

<template>
  <div v-if="user" class="flex md:w-4/6 w-full mx-auto h-screen mt-10">
    <sidebar />
    <div class="md:ml-20 md:max-w-full max-w-76 mr-4">
      <h1>Your Shipping Data</h1>
      <div class="space-y-2 mt-4 flex flex-col">
        <label>Zipcode</label>
        <input
          placeholder="Your zipcode"
          v-model="zipcodeInput"
          type="text"
          class="py-1.5 px-4 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
      </div>
      <div class="space-y-2 mt-4 flex flex-col">
        <label>Street + housenumber</label>
        <div class="flex gap-2">
          <input
            placeholder="Your street"
            v-model="streetInput"
            type="text"
            class="py-1.5 px-4 w-46 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
          />
          <input
            placeholder="Nr."
            v-model="numberInput"
            type="text"
            class="py-1.5 px-4 w-10 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>

      <div class="space-y-2 mt-4 flex flex-col">
        <label>Country</label>
        <input
          placeholder="Your country"
          v-model="countryInput"
          type="text"
          class="py-1.5 px-4 rounded-lg hover:border-2 hover:border-groove hover:border-sky-600 focus:border-sky-600"
        />
      </div>
      <button
        :disabled="isLoading"
        class="bg-black text-white disabled:bg-gray-300 disabled:text-gray-400 py-2 px-4 border-none mt-4 cursor-pointer hover:bg-gray-900"
        @click="createUser"
      >
        {{ isLoading ? "Saving.." : "Save" }}
      </button>
    </div>
  </div>
</template>
