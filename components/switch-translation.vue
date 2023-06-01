<script lang="ts" setup>
const { locale } = useI18n();
</script>

<template>
  <select v-model="locale">
    <option value="en">en</option>
    <option value="nl">nl</option>
  </select>
</template>
