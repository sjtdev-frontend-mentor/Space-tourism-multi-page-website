<template>
  <div class="destination-page flex h-full w-screen flex-col justify-center">
    <main class="flex h-full flex-grow flex-col items-center justify-center gap-[24px] p-[24px] md:items-start md:p-[40px] lg:px-[165px] lg:py-[48px]">
      <PageTitle :index="'01'" :title="'PICK YOUR DESTINATION'" />

      <TransitionGroup tag="div" class="relative w-full flex-grow" name="crossfade">
        <article class="absolute inset-0 flex h-full flex-grow flex-col gap-[32px] lg:flex-row lg:items-stretch" :key="currentPlanetId">
          <!-- 星球图片 -->
          <div class="planet-image flex grow items-center justify-center lg:flex-1">
            
            <img class="h-[150px] w-[150px] object-contain md:h-[360px] md:w-[360px] lg:h-[576px] lg:w-[576px]" :src="currentPlanet.image" :alt="currentPlanet.name" />
          </div>
          <div class="flex flex-col items-center gap-[24px] text-center md:px-[88px] md:py-[12px] lg:flex-1 lg:items-start lg:justify-center lg:gap-[40px] lg:px-[47px] lg:text-left">
            <!-- 星球标签导航 -->
            <nav class="planet-tabs md:desktop-text-preset-8 mobile-text-preset-8 flex gap-[32px] text-blue-300">
              <router-link v-for="planet in planets" :key="planet.id" :to="`/destination/${planet.id}`" :class="{ active: currentPlanetId === planet.id }">
                {{ planet.name }}
              </router-link>
            </nav>
            <div class="planet-info flex min-h-[216px] flex-col gap-[16px] md:gap-[24px]">
              <h2 class="md:tablet-text-preset-2 mobile-text-preset-2 lg:desktop-text-preset-2 text-white">{{ currentPlanet.name }}</h2>
              <p class="description mobile-text-preset-9 text-blue-300">{{ currentPlanet.description }}</p>
            </div>
            <div class="line h-[1px] w-full bg-white/25"></div>
            <div class="stats flex w-full flex-col gap-[24px] md:flex-row">
              <div class="grow">
                <div class="label desktop-text-preset-7 text-blue-300">AVG. DISTANCE</div>
                <div class="value desktop-text-preset-6 text-white">{{ currentPlanet.distance }}</div>
              </div>
              <div class="grow">
                <div class="label desktop-text-preset-7 text-blue-300">EST. TRAVEL TIME</div>
                <div class="value desktop-text-preset-6 text-white">{{ currentPlanet.travelTime }}</div>
              </div>
            </div>
          </div>
        </article>
      </TransitionGroup>
    </main>
  </div>
</template>

<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { planets, type Planet } from "@/data/destination";

const route = useRoute();

// 当前星球ID（默认为月球）
const currentPlanetId = computed(() => {
  const planetId = route.params.planetName as string;
  return planetId || "moon"; // 默认显示月球
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
