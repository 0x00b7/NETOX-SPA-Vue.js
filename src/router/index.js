import { createRouter, createWebHistory } from "vue-router";

import homeView from "../views/homeView.vue";
import aboutView from "../views/aboutView.vue";
import orderView from "../views/orderView.vue";
import serviceView from "../views/serviceView.vue";
import faqsView from "../views/faqsView.vue";

import legalCenterView from "../views/legalCenterView.vue";
import privacyView from "../views/Legal-Center/privacyView.vue";
import trademarkView from "../views/Legal-Center/trademarkView.vue";
import eulaView from "../views/Legal-Center/eulaView.vue";

import successView from "../views/Response/successView.vue";
import exceptionView from "../views/Response/exceptionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: homeView,
    },
    {
      path: "/Service",
      name: "Service",
      component: serviceView,
    },
    {
      path: "/FAQs",
      name: "FAQs",
      component: faqsView,
    },
    {
      path: "/Order-Now",
      name: "Order-Now",
      component: orderView,
    },
    {
      path: "/Thanks",
      name: "Success",
      component: successView,
    },
    {
      path: "/Sorry",
      name: "Exception",
      component: exceptionView,
    },
    {
      path: "/About",
      name: "About",
      component: aboutView,
    },
    {
      path: "/Legal-Center",
      name: "Legal-Center",
      component: legalCenterView,
      children: [
        {
          path: "Trademark",
          component: trademarkView,
        },
        {
          path: "Privacy",
          component: privacyView,
        },
        {
          path: "Eula",
          component: eulaView,
        },
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
