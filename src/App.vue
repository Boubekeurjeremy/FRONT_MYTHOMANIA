<script >
 import SigninVue from "./components/signin.vue";
  export default {
    name: "App",
    components: {
      SigninVue,
    },};
</script>

<template>
  
  <h1>Mythomania</h1>
  <router-view>
  
  </router-view>

</template>

<style>
h1{
  text-align: center;
}
</style>
