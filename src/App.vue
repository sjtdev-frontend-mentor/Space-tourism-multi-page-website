<template>
  <!-- 背景层 - 独立于过渡系统 -->
  <div
    class="background-layer"
    :style="{
      '--bg-mobile': `url(${baseURL + currentBg.mobile})`,
      '--bg-tablet': `url(${baseURL + currentBg.tablet})`,
      '--bg-desktop': `url(${baseURL + currentBg.desktop})`,
    }"
  ></div>

  <div class="app-container flex h-full flex-col">
    <!-- 静态导航栏层 -->
    <div class="h-[96px] w-full lg:mt-[40px]">
      <Navigation />
    </div>

    <!-- 内容交叠过渡层 -->
    <router-view v-slot="{ Component, route }">
      <TransitionGroup name="crossfade" tag="div" class="page-container">
        <component :is="Component" :key="route.fullPath" class="page-content" />
      </TransitionGroup>
    </router-view>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Navigation from "@/components/Navigation.vue";

const route = useRoute();
const previousPath = ref("");

// 监听路由变化记录前一路由
watch(
  () => route.path,
  (newPath, oldPath) => {
    previousPath.value = oldPath;
  },
  { immediate: true },
);
const baseURL = import.meta.env.BASE_URL;
// 动态背景配置
const bgConfig = {
  "/": {
    mobile: "assets/home/background-home-mobile.jpg",
    tablet: "assets/home/background-home-tablet.jpg",
    desktop: "assets/home/background-home-desktop.jpg",
  },
  "/destination": {
    mobile: "assets/destination/background-destination-mobile.jpg",
    tablet: "assets/destination/background-destination-tablet.jpg",
    desktop: "assets/destination/background-destination-desktop.jpg",
  },
  "/crew": {
    mobile: "assets/crew/background-crew-mobile.jpg",
    tablet: "assets/crew/background-crew-tablet.jpg",
    desktop: "assets/crew/background-crew-desktop.jpg",
  },
  "/technology": {
    mobile: "assets/technology/background-technology-mobile.jpg",
    tablet: "assets/technology/background-technology-tablet.jpg",
    desktop: "assets/technology/background-technology-desktop.jpg",
  },
};

const currentBg = computed(() => {
  const pathSegments = route.path.split("/");
  const basePath = pathSegments.length > 1 ? `/${pathSegments[1]}` : "/";

  return bgConfig[basePath] || bgConfig["/"];
});
</script>

<style scoped>
.background-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: var(--bg-mobile);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  transition: background-image 0.5s ease;
}

@media (min-width: 768px) {
  .background-layer {
    background-image: var(--bg-tablet);
  }
}

@media (min-width: 1024px) {
  .background-layer {
    background-image: var(--bg-desktop);
  }
}

.page-container {
  position: relative;
  flex: 1;
}

.page-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.crossfade-enter-active,
.crossfade-leave-active {
  transition: opacity 0.5s ease;
}

.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}

.crossfade-enter-active {
  z-index: 1;
}

.crossfade-leave-active {
  z-index: 0;
}
</style>
