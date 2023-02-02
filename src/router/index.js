import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import ServiceView from "../views/ServiceView.vue";

import LegalView from "../views/LegalCenterView.vue";
import LegalPrivacy from "../views/Legal/PrivacyView.vue";
import LegalTrademark from "../views/Legal/TrademarkView.vue";
import LegalEula from "../views/Legal/EulaView.vue";

import success from "../views/Response/success.vue";
import exception from "../views/Response/exception.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView
    },
    {
      path: "/order-now",
      name: "order-now",
      component: OrderView,
    },
    {
      path: "/thanks",
      name: "success",
      component: success
    },
    {
      path: "/sorry",
      name: "exception",
      component: exception
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/Legal",
      name: "legal",
      component: LegalView,
      children: [
        {
          path: 'trademark',
          component: LegalTrademark,
        },
        {
          path: 'privacy',
          component: LegalPrivacy,
        },
        {
          path: 'eula',
          component: LegalEula,
        }
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});

export default router;