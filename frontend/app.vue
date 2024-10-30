<script lang="ts" setup>
import { useSupabaseProvider } from "./supabase";

useSupabaseProvider();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
