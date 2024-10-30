<script lang="ts" setup>
import { useSupabase } from "~/supabase";
import { useToNumber } from "#imports";

const route = useRoute();
const { supabase } = useSupabase();
const groupId = useToNumber(() => +route.params.groupId);

const getMuscleGroup = async () => {
  const data = await supabase
    .from("muscle_group")
    .select()
    .eq("id", groupId.value);

  return data;
};

const { data, error } = await useAsyncData(() => getMuscleGroup());

const group = computed(() =>
  data.value && data.value.data ? data.value.data[0] : null
);
</script>

<template>
  <PageTransition>
    <div v-if="!error && group">
      <div class="flex items-center gap-1">
        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100"
          :to="{ name: `groups` }"
          >Группы мышц
        </NuxtLink>

        <h1>/ {{ group.name }}</h1>
      </div>
    </div>
  </PageTransition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
