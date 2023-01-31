import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import ServiceView from "../views/ServiceView.vue";
import FAQsView from "../views/FAQsView.vue";

import LegalCenterView from "../views/LegalCenterView.vue";
import PrivacyView from "../views/Legal-Center/Privacy.vue";
import TrademarkView from "../views/Legal-Center/Trademark.vue";
import EulaView from "../views/Legal-Center/Eula.vue";

import Success from "../views/Response/Success.vue";
import Exception from "../views/Response/Exception.vue";

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
      component: FAQsView,
    },
    {
      path: "/Order-Now",
      name: "Order-Now",
      component: OrderView,
    },
    {
      path: "/Thanks",
      name: "Success",
      component: Success,
    },
    {
      path: "/Sorry",
      name: "Exception",
      component: Exception,
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
