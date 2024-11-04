<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from {
  opacity: 0;
}

.page-leave-to {
  opacity: 0;
}
</style>
