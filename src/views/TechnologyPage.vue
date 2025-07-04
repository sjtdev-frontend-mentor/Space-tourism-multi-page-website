<template>
  <PageLayout
    :slotId="currentTechnologyId"
    :content1Style="'mx-[-24px] md:mx-[-40px] h-[322px] md:h-[420px] pt-[64px] !flex-none lg:order-2 lg:h-[600px]'"
    :content2Style="'grow gap-[40px] md:w-[512px] lg:flex-row lg:items-center lg:gap-[64px]'"
  >
    <template #title>
      <PageTitle :index="'03'" :title="'SPACE LAUNCH 101'" />
    </template>
    <template #content-1>
      <picture class="block h-full w-full object-cover">
        <source media="(min-width: 1024px)" :srcset="currentTechnology.imagePortrait" />
        <img class="h-full w-full object-cover" :src="currentTechnology.imageLandscape" :alt="currentTechnology.name" />
      </picture>
    </template>
    <template #content-2>
      <div class="flex gap-[16px] lg:flex-col lg:gap-[32px]">
        <router-link v-for="technology in technologies" :to="`/technology/${technology.id}`">
          <button
            class="lg:desktop-text-preset-4 md:tablet-text-preset-4 mobile-text-preset-4 h-[40px] w-[40px] rounded-full border border-white/25 leading-[100%] transition-colors hover:border-white md:h-[56px] md:w-[56px] lg:h-[80px] lg:w-[80px]"
            :class="{ 'bg-white text-blue-900': technology.id === currentTechnologyId, 'text-white': technology.id !== currentTechnologyId }"
          >
            {{ technology.id }}
          </button>
        </router-link>
      </div>
      <div class="Explaination flex flex-col gap-[16px] text-center lg:text-left">
        <div class="rank-name flex flex-col gap-[16px]">
          <p class="md:tablet-text-preset-4 mobile-text-preset-4 text-white/50">THE TERMINOLOGY…</p>
          <p class="md:tablet-text-preset-3 mobile-text-preset-3 text-white">{{ currentTechnology.name.toUpperCase() }}</p>
        </div>
        <div class="md:tablet-text-preset-9 mobile-text-preset-9 text-blue-300">{{ currentTechnology.description }}</div>
      </div>
    </template>
  </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "@/views/PageLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { technologies, type Technology } from "@/data/technology.ts";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentTechnologyId = computed(() => technologies.find((t: Technology) => t.id === route.params.techId)?.id || "1");
const currentTechnology = computed(() => technologies.find((t: Technology) => t.id === currentTechnologyId.value) || technologies[0]);
</script>
