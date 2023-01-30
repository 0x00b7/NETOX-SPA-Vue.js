import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import ServiceView from "../views/ServiceView.vue";
import FaqsView from "../views/FaqsView.vue";

import LegalCenterView from "../views/LegalCenterView.vue";
import PrivacyView from "../views/Legal-Center/Privacy.vue";
import TrademarkView from "../views/Legal-Center/Trademark.vue";
import EulaView from "../views/Legal-Center/Eula.vue";

import success from "../views/Response/success.vue";
import exception from "../views/Response/exception.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/Service",
      name: "Service",
      component: ServiceView,
    },
    {
      path: "/FAQs",
      name: "FAQs",
      component: FaqsView,
    },
    {
      path: "/Order-Now",
      name: "Order-Now",
      component: OrderView,
    },
    {
      path: "/Thanks",
      name: "Success",
      component: success,
    },
    {
      path: "/Sorry",
      name: "Exception",
      component: exception,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
    },
    {
      path: "/Legal-Center",
      name: "Legal-Center",
      component: LegalCenterView,
      children: [
        {
          path: "Trademark",
          component: TrademarkView,
        },
        {
          path: "Privacy",
          component: PrivacyView,
        },
        {
          path: "Eula",
          component: EulaView,
        },
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
