<template>
  <div
    class="px-4 py-4 text-left rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-blue-200 transition-all hover:shadow-lg transform hover:translate-y-[-2px] flex items-start gap-2 justify-between"
  >
    <div>
      <p class="text-white text-md opacity-50">Группа</p>

      <h2 class="text-xl text-white font-bold">{{ name }}</h2>
    </div>

    <img
      class="w-4/12 shadow-2xl aspect-square rounded-full object-cover"
      src="https://yt3.googleusercontent.com/9rAG7df2Ww1rhxDsdj12PWLIxHK71MR6KEotYTvoZMa6l0b2okCm_zBKcI7bdS3saOFamjBs=s900-c-k-c0x00ffffff-no-rj"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  name: string;
}>();

const { name } = toRefs(props);
</script>

<style scoped></style>
