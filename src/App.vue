<script>
import LoginPage from "./pages/LoginPage.vue";
import AppNavbar from "./components/layout/AppNavbar.vue";
export default {
  name: "App",
  components: {
    LoginPage,
    AppNavbar,
  },
};
</script>

<template>
  <AppNavbar></AppNavbar>
  <router-view> </router-view>
</template>

<style>
h1 {
  text-align: center;
}
body{
  background-color: lightgrey !important;
}
</style>
