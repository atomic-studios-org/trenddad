<script lang="ts" setup>
import "normalize.css";
import Upheader from "~/components/headers/upheader.vue";
import Downheader from "~/components/headers/downheader.vue";
</script>

<template>
  <div class="min-h-screen font-inter w-screen">
    <Upheader />
    <Downheader />
    <slot />
    <Footer />
  </div>
</template>
