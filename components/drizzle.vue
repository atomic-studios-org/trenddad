<script lang="ts" setup>
import { citySchema as userSchema } from "../drizzle/schema";
const nameInput: Ref<string> = ref("");
const typeErrorMsgs = ref();

const { data, pending, error, refresh } = await useAsyncData("getUsers", () =>
  $fetch("/api/getUsers", { method: "GET" })
);

//validate with zod like we did in prisma
const isValidUserSchema = userSchema.safeParse({
  name: nameInput.value,
});

const addUser = async (): Promise<void> => {
  if (isValidUserSchema.success) {
    try {
      await $fetch("/api/addUser", {
        method: "POST",
        body: { name: nameInput.value },
      });
      await refresh();
      typeErrorMsgs.value = "";
    } catch (error) {
      console.log(error);
    }
  } else {
    typeErrorMsgs.value = isValidUserSchema.error.format().name?._errors;
  }
};
</script>

<template>
  <div>
    <div>
      <h1 class="font-switzer">Drizzle planetscale db connection</h1>
    </div>
    <div v-for="error in typeErrorMsgs">
      <span>{{ error }}</span>
    </div>
    <div>
      <label>Add data:</label>
      <input type="text" v-model="nameInput" />
      <div>
        <button @click="addUser">Add</button>
      </div>
    </div>
    <div>
      <div v-if="error">
        <p>{{ error.message }}</p>
      </div>
      <div v-else>
        <div v-if="!pending">
          <div class="w-3/12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="flex flex-col">
              <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                  <div
                    class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
                  >
                    <table
                      class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <thead class="bg-gray-50 dark:bg-slate-800">
                        <tr>
                          <th scope="col" class="px-6 py-3 text-left">
                            <a
                              class="group inline-flex items-center gap-x-2"
                              href="#"
                            >
                              <span
                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                              >
                                <div>{{ $t("name") }}</div>
                              </span>
                              <div
                                class="flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400"
                              >
                                <svg
                                  class="w-2.5 h-2.5"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </th>

                          <th scope="col" class="px-6 py-3 text-left">
                            <a
                              class="group inline-flex items-center gap-x-2"
                              href="#"
                            >
                              <span
                                class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                              >
                                {{ $t("popularity") }}
                              </span>
                              <div
                                class="flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400"
                              >
                                <svg
                                  class="w-2.5 h-2.5"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </th>
                        </tr>
                      </thead>

                      <tbody
                        class="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <tr
                          v-for="item in data?.data"
                          class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                        >
                          <td class="h-px w-72 min-w-[18rem]">
                            <a
                              class="block relative z-10 decoration-none"
                              href="#"
                            >
                              <div class="px-6 py-2">
                                <span class="text-sm text-black">
                                  {{ item.name }}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td class="h-px w-px whitespace-nowrap">
                            <a class="block relative z-10" href="#">
                              <div class="px-6 py-2">
                                <span
                                  class="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                                >
                                  {{ item.popularity }}
                                </span>
                              </div>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div
                      class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700"
                    >
                      <div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          <span
                            class="font-semibold text-gray-800 dark:text-gray-200"
                            >{{ data?.data.length }}</span
                          >
                          results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
