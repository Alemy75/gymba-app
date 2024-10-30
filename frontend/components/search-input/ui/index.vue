<template>
  <input
    v-model="modelValue"
    type="search"
    class="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-full focus:outline-none"
    placeholder="Поиск..."
  />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>("");
</script>

<style scoped></style>
