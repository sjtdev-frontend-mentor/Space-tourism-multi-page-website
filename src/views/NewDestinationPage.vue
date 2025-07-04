<template>
  <div class="destination-page flex h-full w-screen flex-col justify-center">
    <PageLayout :slot-id="currentPlanetId" content2-style="md:px-[88px] lg:items-start">
      <template #title>
        <PageTitle :index="'01'" :title="'PICK YOUR DESTINATION'" />
      </template>

      <template #content-1>
        <img class="h-[150px] w-[150px] object-contain md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px]" :src="currentPlanet.image" :alt="currentPlanet.name" />
      </template>

      <template #content-2>
        <nav class="planet-tabs md:desktop-text-preset-8 mobile-text-preset-8 lg:desktop-text-preset-8 flex gap-[32px] text-blue-300">
          <router-link class="hover:border-b-white/50 border-b-3 border-transparent transition-colors" v-for="planet in planets" :key="planet.id" :to="`/destination/${planet.id}`" :class="{ active: currentPlanetId === planet.id }">
            {{ planet.name }}
          </router-link>
        </nav>
        <div class="planet-info flex min-h-[216px] flex-col items-center gap-[16px] text-center md:gap-[24px] lg:items-start lg:text-left">
          <h2 class="md:tablet-text-preset-2 mobile-text-preset-2 lg:desktop-text-preset-2 text-white">{{ currentPlanet.name }}</h2>
          <p class="description mobile-text-preset-9 md:tablet-text-preset-9 lg:desktop-text-preset-9 text-blue-300">{{ currentPlanet.description }}</p>
        </div>
        <div class="line h-[1px] w-full bg-white/25"></div>
        <div class="stats flex w-full flex-col gap-[24px] text-center md:flex-row lg:text-left">
          <div class="flex grow flex-col gap-[12px]">
            <div class="label desktop-text-preset-7 text-blue-300">AVG. DISTANCE</div>
            <div class="value desktop-text-preset-6 text-white">{{ currentPlanet.distance }}</div>
          </div>
          <div class="flex grow flex-col gap-[12px]">
            <div class="label desktop-text-preset-7 text-blue-300">EST. TRAVEL TIME</div>
            <div class="value desktop-text-preset-6 text-white">{{ currentPlanet.travelTime }}</div>
          </div>
        </div>
      </template>
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import PageLayout from "./PageLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { planets, type Planet } from "@/data/destination";

const route = useRoute();

// 当前星球ID（默认为月球）
const currentPlanetId = computed(() => {
  const planetId = route.params.planetName as string;
  return planetId || planets[0].id; // 默认显示月球
});

// 当前星球数据
const currentPlanet = computed<Planet>(() => {
  return planets.find((p) => p.id === currentPlanetId.value) || planets[0];
});
</script>

<style scoped>
/* 激活标签样式 */
.planet-tabs .active {
  color: white;
  border-bottom: 3px solid white;
  padding-bottom: 8px;
}
</style>
