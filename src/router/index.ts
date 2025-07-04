import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/destination/:planetName",
    name: "Destination",
    component: () => import("@/views/NewDestinationPage.vue"), // 懒加载
    props: true,
  },
  {
    path: '/crew/:crewName',
    name: 'Crew',
    component: () => import('@/views/NewCrewPage.vue'),
    props: true,
  },
  {
    path: '/technology/:techId',
    name: 'Technology',
    component: () => import('@/views/TechnologyPage.vue')
  }
];

// 4. 创建路由实例
const router = createRouter({
  // 使用 HTML5 History API 模式 (需要服务器配置支持)
  history: createWebHistory(import.meta.env.BASE_URL), // import.meta.env.BASE_URL 通常是项目部署的基础路径
  // 或者使用 Hash 模式 (URL 中有 #)： createWebHashHistory()
  routes, // 简写，相当于 routes: routes
});

// 新增全局前置守卫
  router.beforeEach((to, from, next) => {
    // 使用 as const 获得精确字面量类型
    const DEFAULT_ROUTES = {
      '/destination': '/destination/moon',
      '/crew': '/crew/douglas',
      '/technology': '/technology/1',
    } as const;
  
    // 类型保护 + 键名提取
    type ValidPath = keyof typeof DEFAULT_ROUTES;
    const targetPath = to.path as ValidPath;
    
    if (DEFAULT_ROUTES[targetPath]) {
      next(DEFAULT_ROUTES[targetPath]);
      return;
    }
    next();
  });

// 5. 导出路由实例
export default router;
