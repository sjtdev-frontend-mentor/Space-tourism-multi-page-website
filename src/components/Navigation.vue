<template>
  <nav class="fixed z-100 flex w-screen items-center justify-between p-[24px] md:p-0">
    <div class="flex flex-grow-0 items-center md:px-[40px] lg:px-[64px]">
      <img class="h-[48px] w-[48px] flex-none" src="/assets/shared/logo.svg" alt="" />
    </div>

    <div class="line z-10 mr-[-32px] hidden h-[1px] flex-grow bg-white/25 lg:flex"></div>

    <ul class="hidden h-[96px] justify-end gap-[48px] bg-white/5 text-white backdrop-blur-[40px] md:flex md:grow md:px-[40px] lg:flex lg:w-[736px] lg:flex-none lg:px-[64px]">
      <li v-for="item in menuItems">
        <router-link :to="item.path" class="flex h-full items-center gap-[12px] border-y-3 border-transparent hover:border-b-white/50 transition-colors" :class="{ 'border-b-white': activeItemId === item.id }">
          <div class="desktop-text-preset-8-bold">{{ item.number }}</div>
          <div class="desktop-text-preset-8">{{ item.name }}</div>
        </router-link>
      </li>
    </ul>

    <button class="z-10 md:hidden lg:hidden" @click="handleButtonClick" aria-label="菜单">
      <img v-if="!isMenuOpen" src="/assets/shared/icon-hamburger.svg" alt="" />
      <img v-else src="/assets/shared/icon-close.svg" alt="" />
    </button>
    <Transition name="slide-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-0 overflow-hidden">
        <div class="absolute inset-0 bg-transparent" :class="menuVisible ? 'opacity-100' : 'opacity-0'" @click="closeMenu"></div>

        <!-- 菜单内容（从右侧滑入） -->
        <div
          class="absolute inset-y-0 right-0 w-[254px] max-w-sm transform bg-transparent pt-[133px] pl-[32px] shadow-lg backdrop-blur-[80px] transition-transform duration-200 ease-in-out"
          :class="menuVisible ? 'translate-x-0' : 'translate-x-full'"
        >
          <!-- 菜单项列表 -->
          <ul class="flex flex-col gap-[32px] text-white">
            <li v-for="item in menuItems">
              <router-link :to="item.path" class="flex h-full items-center gap-[12px] hover:border-r-white/50" :class="{ 'border-r-3': activeItemId === item.id }">
                <div class="desktop-text-preset-8-bold">{{ item.number }}</div>
                <div class="desktop-text-preset-8">{{ item.name }}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 统一菜单数据源
const menuItems = ref([
  { id: "home", number: "00", name: "HOME", path: "/" },
  { id: "destination", number: "01", name: "DESTINATION", path: "/destination" },
  { id: "crew", number: "02", name: "CREW", path: "/crew" },
  { id: "technology", number: "03", name: "TECHNOLOGY", path: "/technology" },
]);

// 计算当前激活项
const activeItemId = computed(() => {
  // 检查是否是目的地页面（包括子路由）
  if (route.path.startsWith("/destination")) {
    return "destination";
  }
  if (route.path.startsWith("/crew")) {
    return "crew";
  }
  if (route.path.startsWith("/technology")) {
    return "technology";
  }
  return menuItems.value.find((item) => item.path === route.path)?.id || "";
});
// 菜单状态
const isMenuOpen = ref(false);
const menuVisible = ref(false);

const handleButtonClick = () => {
  if (isMenuOpen.value) {
    closeMenu();
  } else {
    toggleMenu();
  }
};

// 切换菜单状态
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (isMenuOpen.value) {
    // 显示菜单时，先设置可见状态，然后短暂延迟后设置菜单可见
    setTimeout(() => (menuVisible.value = true), 10);
    document.body.style.overflow = "hidden"; // 防止背景滚动
  } else {
    // 关闭菜单时，先设置菜单不可见，然后延迟关闭组件
    menuVisible.value = false;
    setTimeout(() => {
      isMenuOpen.value = false;
      document.body.style.overflow = ""; // 恢复背景滚动
    }, 300); // 等待动画完成
  }
};

// 关闭菜单
const closeMenu = () => {
  menuVisible.value = false;
  setTimeout(() => {
    isMenuOpen.value = false;
    document.body.style.overflow = "";
  }, 300);
};

onUnmounted(() => {
  document.body.style.overflow = ""; // 确保清理
});

// 监听窗口大小变化，在大屏幕上自动关闭菜单
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu();
  }
});

watch(
  () => route.path,
  () => {
    if (isMenuOpen.value) {
      closeMenu(); // 路由变化时关闭菜单
    }
  },
);
</script>
