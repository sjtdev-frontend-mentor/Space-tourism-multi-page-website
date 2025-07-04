<!-- src/components/PageLayout.vue -->
<template>
  <div class="page-layout flex h-full w-screen flex-col justify-center items-center">
    <main class="flex h-full flex-grow flex-col items-center justify-center gap-[24px] p-[24px] md:items-start md:p-[40px] lg:px-[165px] lg:py-[48px] lg:max-w-[1440px] w-full">
      <slot name="title"></slot>

      <TransitionGroup tag="div" class="relative w-full flex-grow" name="crossfade">
        <article class="absolute inset-0 flex h-full flex-grow flex-col gap-[32px] lg:flex-row md:items-center" :key="slotId">
          <div class="content-1 relative z-0 flex grow items-center justify-center flex-col gap-[24px] lg:w-1/2 lg:items-start" :class="content1Style">
            <slot name="content-1"></slot>
          </div>
          <div class="content-2 items-center flex flex-col justify-center gap-[24px] lg:w-1/2 lg:text-left lg:px-[47px] lg:py-[133px]" :class="content2Style">
            <slot name="content-2"></slot>
          </div>
        </article>
      </TransitionGroup>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps({
  slotId: String,
  content1Style: String,
  content2Style: String,
});
</script>
<style scoped></style>
