<template>
  <h1 class="flex gap-[24px]">
    <p class="lg:desktop-text-preset-5-bold md:tablet-text-preset-5-bold mobile-text-preset-6 text-white/24">{{ index }}</p>
    <p class="lg:desktop-text-preset-5 md:tablet-text-preset-5 mobile-text-preset-6 text-white">{{ title }}</p>
  </h1>
</template>

<script setup lang="ts">
defineProps({
  index: String,
  title: String,
});
</script>
