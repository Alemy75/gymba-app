<template>
  <div>
    <input
      type="search"
      class="mt-4 w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-full focus:outline-none"
      placeholder="Поиск..."
    />

    <h2 class="text-2xl font-bold mt-10 text-blue-400">Группы мышц</h2>

    <p class="leading-6 mt-2">
      В данном разделе вы сможете найти упражнение для необходимой вам
      мышци/группы мышц
    </p>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div
        class="rounded-2xl border-2 bg-blue-400 border-blue-200 transition-all hover:shadow-lg"
      >
        <h2 class="px-4 py-4 text-xl text-white font-bold">Грудные</h2>
      </div>

      <div
        class="rounded-2xl border-2 bg-blue-400 border-blue-200 transition-all hover:shadow-lg"
      >
        <h2 class="px-4 py-4 text-xl text-white font-bold">Спина</h2>
      </div>

      <div
        class="rounded-2xl border-2 bg-blue-400 border-blue-200 transition-all hover:shadow-lg"
      >
        <h2 class="px-4 py-4 text-xl text-white font-bold">Ноги</h2>
      </div>

      <div
        class="rounded-2xl border-2 bg-blue-400 border-blue-200 transition-all hover:shadow-lg"
      >
        <h2 class="px-4 py-4 text-xl text-white font-bold">Кор</h2>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
