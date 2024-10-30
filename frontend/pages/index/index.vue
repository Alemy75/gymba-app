<script lang="ts" setup>
const router = useRouter();

const toGroups = () => {
  router.push("/groups");
};
</script>

<template>
  <PageTransition>
    <button @click="toGroups">К группам</button>
  </PageTransition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
