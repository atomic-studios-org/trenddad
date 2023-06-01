<script lang="ts" setup>
import "normalize.css";
import Header from "../components/header.vue";
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <slot />
  </div>
</template>
