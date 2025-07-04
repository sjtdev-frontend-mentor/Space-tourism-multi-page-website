<!-- src/views/CrewPage.vue -->
<template>
  <PageLayout :slotId="currentCrewId" content1-style="pb-[20px] md:w-[512px] lg:h-full lg:max-h-[676px]  min-h-[256px]">
    <template #title>
      <PageTitle :index="'02'" :title="'MEET YOUR CREW'" />
    </template>

    <template #content-1>
      <div class="rank-name flex flex-col gap-[8px] text-center md:gap-[16px] lg:text-left">
        <h3 class="lg:desktop-text-preset-4 mobile-text-preset-4 md:tablet-text-preset-4 text-white/50">{{ currentCrew.role.toUpperCase() }}</h3>
        <h2 class="lg:desktop-text-preset-3 mobile-text-preset-3 md:tablet-text-preset-3 text-white">{{ currentCrew.name.toUpperCase() }}</h2>
      </div>
      <p class="mobile-text-preset-9 lg:desktop-text-preset-9 md:tablet-text-preset-9 text-center text-blue-300 lg:text-left">{{ currentCrew.bio }}</p>
      <div class="Pagination absolute inset-x-0 bottom-0 mx-auto flex w-[88px] gap-[16px] lg:bottom-[48px] lg:ml-0 lg:w-[200px] lg:gap-[40px]">
        <router-link class="h-[10px] w-[10px] rounded-full bg-[#36373F] lg:h-[15px] lg:w-[15px] hover:bg-white/50 transition-colors" v-for="crew in crews" :key="crew.id" :to="`/crew/${crew.id}`" :class="{ active: currentCrewId === crew.id }"></router-link>
      </div>
    </template>

    <template #content-2>
      <img
        class="h-[351px] w-auto object-contain md:mb-[-78px] md:h-[560px]"
        :style="{
          mask: `linear-gradient(to bottom, black calc(100% - 100%), rgba(0,0,0,0.8) 77%, transparent 100%)`,
          WebkitMask: `linear-gradient(to bottom, black calc(100% - 100%), rgba(0,0,0,0.8) 77%, transparent 100%)`,
        }"
        :src="currentCrew.image"
        :alt="currentCrew.name"
      />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@/views/PageLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { crews, type Crew } from "@/data/crew.ts";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentCrewId = computed(() => crews.find((crew: Crew) => crew.id === route.params.crewName)?.id || "douglas");
const currentCrew = computed(() => crews.find((crew: Crew) => crew.id === currentCrewId.value) || crews[0]);
</script>

<style scoped>
.Pagination .active {
  background-color: white;
}
</style>
