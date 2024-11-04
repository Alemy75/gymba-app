<script lang="ts" setup>
definePageMeta({
  middleware: ["base-to-groups"]
});
</script>

<template>
  <PageTransition>
    <button @click="toGroups">К группам!!</button>
  </PageTransition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
