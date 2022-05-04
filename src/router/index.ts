import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Portofolio from "../components/Portofolio.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";
import ProjectDescription from "../components/ProjectDescription.vue";

import { createRouter, createWebHistory } from "vue-router";

const prefix: string = "/portofolio/";

const routes = [
  {
    path: prefix,
    name: "home",
    component: Home,
  },
  {
    path: prefix + "about",
    name: "about",
    component: About,
  },
  {
    path: prefix + "portofolio",
    name: "portofolio",
    component: Portofolio,
  },
  {
    path: prefix + "skills",
    name: "skills",
    component: Skills,
  },
  {
    path: prefix + "contact",
    name: "contact",
    component: Contact,
  },
  {
    path: prefix + "project/:id",
    name: "project",
    props: true,
    component: ProjectDescription,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
