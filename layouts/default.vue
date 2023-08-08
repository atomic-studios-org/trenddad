<script lang="ts" setup>
import "normalize.css";
import Upheader from "~/components/headers/upheader.vue";
import Downheader from "~/components/headers/downheader.vue";
import Tsxbar from "@/components/tsxbar.vue";
</script>

<template>
  <div class="min-h-screen font-inter w-screen">
    <ClientOnly><Upheader /></ClientOnly>
    <Downheader />
    <slot />
    <Footer />
    <Tsxbar />
  </div>
</template>
