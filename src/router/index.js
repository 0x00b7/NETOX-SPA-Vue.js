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
      name: "Home",
      component: HomeView
    },
    {
      path: "/Service",
      name: "service",
      component: ServiceView
    },
    {
      path: "/Order-Now",
      name: "order-now",
      component: OrderView
    },
    {
      path: "/Thanks",
      name: "success",
      component: success
    },
    {
      path: "/Sorry",
      name: "exception",
      component: exception
    },
    {
      path: "/About",
      name: "about",
      component: AboutView
    },
    {
      path: "/Legal",
      name: "legal",
      component: LegalView,
      children: [
        {
          path: 'Trademark',
          component: LegalTrademark
        },
        {
          path: 'Privacy',
          component: LegalPrivacy
        },
        {
          path: 'Eula',
          component: LegalEula
        }
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});

export default router;