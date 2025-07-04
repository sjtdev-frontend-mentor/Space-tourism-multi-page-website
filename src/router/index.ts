import { createRouter, createWebHashHistory } from "vue-router";
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
    path: "/crew/:crewName",
    name: "Crew",
    component: () => import("@/views/NewCrewPage.vue"),
    props: true,
  },
  {
    path: "/technology/:techId",
    name: "Technology",
    component: () => import("@/views/TechnologyPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const DEFAULT_ROUTES = {
    "/destination": "/destination/moon",
    "/crew": "/crew/douglas",
    "/technology": "/technology/1",
  } as const;

  type ValidPath = keyof typeof DEFAULT_ROUTES;
  const targetPath = to.path as ValidPath;

  if (DEFAULT_ROUTES[targetPath]) {
    next(DEFAULT_ROUTES[targetPath]);
    return;
  }
  next();
});

export default router;
