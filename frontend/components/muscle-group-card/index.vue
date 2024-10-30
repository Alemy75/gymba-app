<template>
  <div
    class="rounded-2xl border-2 bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-200 transition-all hover:shadow-lg transform hover:translate-y-[-2px]"
  >
    <h2 class="px-4 py-4 text-xl text-white font-bold">{{ name }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const { name } = toRefs(props);
</script>

<style scoped></style>
