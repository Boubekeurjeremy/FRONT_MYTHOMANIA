import { createApp } from "vue";
import bootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import Wall from "./components/Wall.vue";
import SigninComponent from "./components/Signin.vue";
import { createWebHistory, createRouter } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const routes = [
  { path: "/home", component: Wall },
  { path: "/signin", component: SigninComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(bootstrapVue3);
app.use(router);
app.mount("#app");
