import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import CreationView from "../views/CreationView.vue";

import LawView from "../views/LawView.vue";
import LawPrivacy from "../views/Law/LawPrivacy.vue";
import LawImprint from "../views/Law/LawImprint.vue";
import LawEula from "../views/Law/LawEula.vue";
import Dev from "../views/Dev.vue";

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
      path: "/dev",
      name: "dev",
      component: Dev
    },
    {
      path: "/order-now",
      name: "order-now",
      component: OrderView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/Law",
      name: "Law",
      component: LawView,
      children: [
        {
          path: 'imprint',
          component: LawImprint,
        },
        {
          path: 'privacy',
          component: LawPrivacy,
        },
        {
          path: 'eula',
          component: LawEula,
        }
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});

export default router;