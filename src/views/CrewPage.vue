<template>
  <div class="crew-page flex h-full w-screen flex-col justify-center">
    <main class="flex h-full flex-grow flex-col items-center gap-[24px] p-[24px] md:items-start md:p-[40px] md:pb-0 lg:px-[165px] lg:py-[48px]">
      <PageTitle :index="'02'" :title="'MEET YOUR CREW'" />

      <TransitionGroup name="crossfade" tag="div" class="relative w-full flex-grow">
        <article :key="currentCrewId" class="absolute inset-0 flex h-full min-h-[200px] w-full flex-grow flex-col gap-[32px] md:px-[88px]">
          <div class="Explanation relative z-0 flex grow flex-col justify-center gap-[24px] pb-[20px] text-center">
            <div class="rank-name flex flex-col gap-[8px] md:gap-[16px]">
              <h3 class="mobile-text-preset-4 md:tablet-text-preset-4 text-white/50">{{ currentCrew.role.toUpperCase() }}</h3>
              <h2 class="mobile-text-preset-3 md:tablet-text-preset-3 text-white">{{ currentCrew.name.toUpperCase() }}</h2>
            </div>
            <p class="mobile-text-preset-9 md:tablet-text-preset-9 text-blue-300">{{ currentCrew.bio }}</p>
            <div class="Pagination absolute inset-x-0 bottom-0 mx-auto flex w-[88px] gap-[16px]">
              <router-link class="h-[10px] w-[10px] rounded-full bg-[#36373F]" v-for="crew in crews" :key="crew.id" :to="`/crew/${crew.id}`" :class="{ active: currentCrewId === crew.id }"></router-link>
            </div>
          </div>
          <div class="flex flex-none items-end justify-center">
            <img
              class="h-[351px] w-auto object-contain md:mb-[-60px] md:h-[560px] md:!mask-none"
              :style="{
                mask: `linear-gradient(to bottom,
                       black calc(100% - 100%),
                       rgba(0,0,0,0.8) 77%,
                       transparent 100%)`,
                WebkitMask: `linear-gradient(to bottom,
                             black calc(100% - 100%),
                             rgba(0,0,0,0.8) 77%,
                             transparent 100%)`,
              }"
              :src="currentCrew.image"
              :alt="currentCrew.name"
            />
          </div>
        </article>
      </TransitionGroup>
    </main>
  </div>
</template>

<script setup lang="ts">
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
