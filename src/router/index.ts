import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Portofolio from "../components/Portofolio.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/portofolio/",
    name: "home",
    component: Home,
  },
  {
    path: "/portofolio/about",
    name: "about",
    component: About,
  },
  {
    path: "/portofolio/portofolio",
    name: "portofolio",
    component: Portofolio,
  },
  {
    path: "/portofolio/skills",
    name: "skills",
    component: Skills,
  },
  {
    path: "/portofolio/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
