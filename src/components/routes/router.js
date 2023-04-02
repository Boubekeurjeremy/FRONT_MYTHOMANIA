
import WallPage from "../../pages/Wall/WallPage.vue";
import LoginPage from "../../pages/LoginPage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/home", component: WallPage },
    { path: "/login", component: LoginPage },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export  {router};