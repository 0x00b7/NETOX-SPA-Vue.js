import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreationView from "../views/CreationView.vue";
import LawView from "../views/LawView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/creation",
      name: "creation",
      component: CreationView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/legal",
      name: "legal",
      component: LawView
    }
  ],
}
);

export default router;