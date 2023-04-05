
import WallPage from "../../pages/Wall/WallPage.vue";
import LoginPage from "../../pages/LoginPage.vue";
import ProfilePage from "../../pages/ProfilePage.vue";
import EditProfile from "../../pages/EditProfile.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/home", component: WallPage },
    { path: "/login", component: LoginPage },
    {path: "/profile", component: ProfilePage},
    {path: "/editprofile", component: EditProfile},
    { path: "/", redirect: "/home"}
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export  {router};