import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import ServiceView from "../views/ServiceView.vue";
import FaqsView from "../views/FaqsView.vue";

import LegalView from "../views/LegalCenterView.vue";
import LegalPrivacy from "../views/Legal/PrivacyView.vue";
import LegalTrademark from "../views/Legal/TrademarkView.vue";
import LegalEula from "../views/Legal/EulaView.vue";

import Success from "../views/Response/Success.vue";
import Exception from "../views/Response/Exception.vue";

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
      name: "Service",
      component: ServiceView
    },
    {
      path: "/Order-Now",
      name: "Order-Now",
      component: OrderView
    },
    {
      path: "/Thanks",
      name: "Success",
      component: Success
    },
    {
      path: "/Sorry",
      name: "Exception",
      component: Exception
    },
    {
      path: "/FAQs",
      name: "FAQs",
      component: FaqsView
    },
    {
      path: "/About",
      name: "About",
      component: AboutView
    },
    {
      path: "/Legal",
      name: "Legal",
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