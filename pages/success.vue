<script lang="ts" setup>
onMounted(() => {
  setTimeout(() => {
    navigateTo("/");
  }, 4000);
});
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <span class="mt-20"
      >Your order was succesfully placed, you will be redirected to the home
      page..</span
    >
  </div>
</template>
