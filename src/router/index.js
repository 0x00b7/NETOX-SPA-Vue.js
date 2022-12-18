import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreationView from "../views/CreationView.vue";

import LawView from "../views/LawView.vue";

import LawPrivacy from "../views/Law/LawPrivacy.vue";
import LawImprint from "../views/Law/LawImprint.vue";
import LawEula from "../views/Law/LawEula.vue";


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
      path: "/Law",
      name: "Law-Center",
      component: LawView,
      children: [
        {
          path: 'Imprint',
          component: LawImprint,
        },
        {
          path: 'Privacy',
          component: LawPrivacy,
        },
        {
          path: 'Eula',
          component: LawEula,
        }
      ],
    }
  ],
}
);

export default router;