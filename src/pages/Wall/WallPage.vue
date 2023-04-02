<script>
import Card from "../../components/card/Card.vue";
import PostForm from "./PostForm.vue";
export default {
  name: "WallPage",
  components: {
    Card,
    PostForm,
  },
};
</script>
<template>
 
  <div class="container-sm mt-3">
    <PostForm></PostForm>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<style module></style>
