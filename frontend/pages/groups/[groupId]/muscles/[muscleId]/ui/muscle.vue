<script lang="ts" setup>
import { useSupabase } from "~/supabase";
import { useToNumber } from "#imports";

const route = useRoute();
const { supabase } = useSupabase();
const groupId = useToNumber(() => +route.params.groupId);
const muscleId = useToNumber(() => +route.params.muscleId);

const getMuscleGroup = async () => {
  const data = await supabase
    .from("muscle_group")
    .select()
    .eq("id", groupId.value);

  return data;
};

const getMuscle = async () => {
  const data = await supabase.from("muscle").select().eq("id", muscleId.value);

  return data;
};

const getExercises = async () => {
  const data = await supabase
    .from("exercise")
    .select()
    .eq("muscleId", muscleId.value);

  return data;
};

// Группа
const { data: groupsData, error: groupsError } = await useAsyncData(() =>
  getMuscleGroup()
);

const group = computed(() =>
  groupsData.value && groupsData.value.data ? groupsData.value.data[0] : null
);

// Мышца
const { data: muscleData, error: muscleError } = await useAsyncData(() =>
  getMuscle()
);

const muscle = computed(() =>
  muscleData.value && muscleData.value.data ? muscleData.value.data[0] : null
);

// Упражнения
const { data: exercisesData, error: exercisesError } = await useAsyncData(() =>
  getExercises()
);

const exercises = computed(() =>
  exercisesData.value ? exercisesData.value.data : []
);
</script>

<template>
  <PageTransition>
    <div v-if="group && muscle && exercises">
      <!-- Хлебные крошки -->
      <div class="flex items-center gap-1">
        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100"
          :to="`/groups`"
          >Группы мышц
        </NuxtLink>

        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100"
          :to="`/groups/${groupId}`"
        >
          / {{ group.name }}
        </NuxtLink>

        <h1>/ {{ muscle.name }}</h1>
      </div>

      <p class="mt-4">
        {{ muscle.description }}
      </p>

      <p class="mt-4 opacity-20">
        Здесь перечислены упранения, относящиеся к мышце "{{ muscle.name }}"
      </p>

      <!-- Список мышц -->
      <section v-if="exercisesError">
        <p class="leading-6 mt-2 opacity-20">
          Ошибка получения данных. Попробуйте попытку позже
        </p>
      </section>

      <section v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <NuxtLink v-for="item in exercises" :key="item.name">
          <TypeCard :type="'Упражнение'" :name="item.name" />
        </NuxtLink>
      </section>
    </div>
  </PageTransition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
