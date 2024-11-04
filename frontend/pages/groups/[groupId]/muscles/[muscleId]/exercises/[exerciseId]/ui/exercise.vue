<script setup lang="ts">
import { useSupabase } from "~/supabase";
import { useToNumber } from "#imports";

const route = useRoute();
const { supabase } = useSupabase();
const groupId = useToNumber(() => +route.params.groupId);
const muscleId = useToNumber(() => +route.params.muscleId);
const exerciseId = useToNumber(() => +route.params.exerciseId);

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

const getExercise = async () => {
  const data = await supabase
    .from("exercise")
    .select()
    .eq("id", exerciseId.value);

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

// Упражнение
const { data: exerciseData, error: exerciseError } = await useAsyncData(() =>
  getExercise()
);

const exercise = computed(() =>
  exerciseData.value && muscleData.value.data
    ? exerciseData.value.data[0]
    : null
);
</script>

<template>
  <PageTransition>
    <div v-if="group && muscle && exercise">
      <!-- Хлебные крошки -->
      <div class="flex items-center gap-1">
        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100 whitespace-nowrap text-xs"
          :to="`/groups`"
          >Группы мышц
        </NuxtLink>

        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100 whitespace-nowrap text-xs"
          :to="`/groups/${groupId}`"
        >
          / {{ group.name }}
        </NuxtLink>

        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100 whitespace-nowrap text-xs"
          :to="`/groups/${groupId}/muscles/${muscleId}`"
        >
          / {{ muscle.name }}
        </NuxtLink>

        <h1 class="whitespace-nowrap text-xs">/ {{ exercise.name }}</h1>
      </div>

      <p class="mt-4 whitespace-pre-wrap">
        {{ exercise.content }}
      </p>
    </div>
  </PageTransition>
</template>

<style scoped></style>
