import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import OrderView from "../views/OrderView.vue";
import ServiceView from "../views/ServiceView.vue";
import FaqsView from "../views/FaqsView.vue";
import AdminView from "../views/AdminView.vue";

import SuccessView from "../views/Response/SuccessView.vue";
import ExceptionView from "../views/Response/ExceptionView.vue";

import LegalView from "../views/LegalCenterView.vue";
import LegalPrivacy from "../views/Legal/PrivacyView.vue";
import LegalTrademark from "../views/Legal/TrademarkView.vue";
import LegalEula from "../views/Legal/EulaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView,
    },
    {
      path: "/order-now",
      name: "order-now",
      component: OrderView,
    },
    {
      path: "/thanks",
      name: "success",
      component: SuccessView,
    },
    {
      path: "/sorry",
      name: "exception",
      component: ExceptionView,
    },
    {
      path: "/FAQs",
      name: "FAQs",
      component: FaqsView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    }
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
