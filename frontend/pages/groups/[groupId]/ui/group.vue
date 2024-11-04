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

const getMuscles = async () => {
  const data = await supabase
    .from("muscle")
    .select()
    .eq("groupId", groupId.value);

  return data;
};

const { data: groupsData, error: groupsError } = await useAsyncData(() =>
  getMuscleGroup()
);

const group = computed(() =>
  groupsData.value && groupsData.value.data ? groupsData.value.data[0] : null
);

const { data: musclesData, error: musclesError } = await useAsyncData(() =>
  getMuscles()
);

const muscles = computed(() =>
  musclesData.value ? musclesData.value.data : []
);
</script>

<template>
  <PageTransition>
    <div v-if="!groupsError && group">
      <!-- Хлебные крошки -->
      <div class="flex items-center gap-1">
        <NuxtLink
          class="opacity-20 transition-opacity hover:opacity-100"
          :to="`/groups`"
          >Группы мышц
        </NuxtLink>

        <h1>/ {{ group.name }}</h1>
      </div>

      <p class="mt-2 opacity-20">
        Здесь перечислены мышци, относящиеся к группе "{{ group.name }}"
      </p>

      <!-- Список мышц -->
      <section
        v-if="!musclesError"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        <NuxtLink
          v-for="item in muscles"
          :key="item.name"
          :to="`/groups/${groupId}/muscles/${item.id}`"
        >
          <TypeCard :type="'Мышца'" :name="item.name" />
        </NuxtLink>
      </section>

      <section v-else>
        <p class="leading-6 mt-2 opacity-20">
          Ошибка получения данных. Попробуйте попытку позже
        </p>
      </section>
    </div>
  </PageTransition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
