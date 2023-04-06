import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Socials from "../views/Socials.vue";
import Downloads from "../views/Downloads.vue";
import Launchpad from "../views/downloads/Launchpad.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/socials", name: "Socials", component: Socials },
  { path: "/downloads", name: "Downloads", component: Downloads },
  { path: "/downloads/launchpad", name: "Launchpad", component: Launchpad },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
