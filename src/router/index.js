import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"

const routes = [
  {
    path: '/',
    redirect: {
        name: "login"
    }
  },

  {
    path: "/login",
    name: "login",
    component: LoginComponent
  },

  {
    path: "/secure",
    name: "secure",
    component: SecureComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
