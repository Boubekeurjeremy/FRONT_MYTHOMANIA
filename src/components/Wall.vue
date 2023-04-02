<script>
import Card from "./Card.vue";
import PostForm from "./PostForm.vue";
export default {
  name: "Wall",
  components: {
    Card,
    PostForm,
  },
};
</script>
<template>
  <h1>Wall</h1>
  <div class="container-sm">
    <PostForm></PostForm>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<style module></style>
