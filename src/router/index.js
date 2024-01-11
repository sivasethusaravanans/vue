import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Dashboard";
// Import other views as needed
import About from "@/components/profile";
import Bout from "@/components/profile";
import Settings from "@/components/profile";
import Reports from "@/components/Reports";
Vue.use(VueRouter);

const routes = [
  {
    name:"HomePage",
    path: "/home",
    component: Home,
  },
  {
    name:"AboutPage",
    path: "/about",
    component: About,
  },
  {
    name:"Reports",
    path: "/reports",
    component: Reports,
  },
  {
    name:"BoutPage",
    path: "/bout",
    component: Bout,
  },
  {
    name:"SettingsPage",
    path: "/settings",
    component: Settings,
  },
  // Add other routes as needed
];

const router = new VueRouter({
  routes,
});

export default router;
