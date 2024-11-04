<template>
  <div
    class="container mx-auto px-4 mb-4 sm:px-6 lg:px-8 max-w-screen-md border-l border-r border-gray-light min-h-screen"
  >
    <div class="flex items-center gap-2 pt-4 mb-4 overflow-x-hidden">
      <h2 class="text-2xl font-bold text-blue-400">GymBro</h2>

      <Icon name="mdi:arm-flex" class="text-blue-400" size="36" />
    </div>

    <SearchInput v-model="searchValue" class="mb-4" />

    <slot />
  </div>
</template>

<script setup lang="ts">
const searchValue = ref("");
</script>

<style scoped></style>
