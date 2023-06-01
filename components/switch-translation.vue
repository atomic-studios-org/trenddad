<script lang="ts" setup>
const { locale } = useI18n();
</script>

<template>
  <select class="border-none" v-model="locale">
    <option value="en">English</option>
    <option value="nl">Dutch</option>
  </select>
</template>
