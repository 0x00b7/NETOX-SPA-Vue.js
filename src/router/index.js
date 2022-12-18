import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreationView from "../views/CreationView.vue";

import LawView from "../views/LawView.vue";
<<<<<<< HEAD
=======

>>>>>>> aa30f7fbf0f72ed4d58e1928bfc7cc61ad132662
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
<<<<<<< HEAD
      name: "Law",
=======
      name: "Law-Center",
>>>>>>> aa30f7fbf0f72ed4d58e1928bfc7cc61ad132662
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
    }
  ],
}
);

export default router;