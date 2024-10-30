<script lang="ts" setup>
import { useSupabase } from "~/supabase";

const router = useRouter();
const { supabase } = useSupabase();

const getMuscleGroups = async () => {
  const data = await supabase.from("muscle_group").select();

  return data;
};

const { data, error } = await useAsyncData(() => getMuscleGroups());

const muscleGroups = computed(() => (data.value ? data.value.data : []));

const toGroupPage = (groupId: number) => {
  router.push(`groups/${groupId}`);
};
</script>

<template>
  <PageTransition>
    <h2 class="text-2xl font-bold text-blue-400">Группы мышц</h2>

    <p class="leading-6 mt-2">
      В данном разделе вы сможете найти упражнение для необходимой вам
      мышци/группы мышц
    </p>

    <section v-if="!error" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <button
        v-for="item in muscleGroups"
        :key="item.id"
        @click="toGroupPage(item.id)"
      >
        <MuscleGroupCard :name="item.name" />
      </button>
    </section>

    <section v-else>
      <p class="leading-6 mt-2 opacity-20">
        Ошибка получения данных. Попробуйте попытку позже
      </p>
    </section>
  </PageTransition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
