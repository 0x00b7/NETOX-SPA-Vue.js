import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import ServiceView from "../views/ServiceView.vue";
import FAQsView from "../views/FAQsView.vue";

import LegalCenterView from "../views/LegalCenterView.vue";
import PrivacyView from "../views/Legal-Center/PrivacyView.vue";
import TrademarkView from "../views/Legal-Center/TrademarkView.vue";
import EulaView from "../views/Legal-Center/EulaView.vue";

import SuccessView from "../views/Response/SuccessView.vue";
import ExceptionView from "../views/Response/ExceptionView.vue";

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
      component: SuccessView,
    },
    {
      path: "/Sorry",
      name: "Exception",
      component: ExceptionView,
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
