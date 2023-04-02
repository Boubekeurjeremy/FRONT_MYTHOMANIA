<script>
import SigninVue from "./components/Signin.vue";
import NavbarVue from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    SigninVue,
    NavbarVue,
  },
};
</script>

<template>
  <NavbarVue></NavbarVue>
  <router-view> </router-view>
</template>

<style>
h1 {
  text-align: center;
}
</style>
