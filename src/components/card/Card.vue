<script>
import Comment from "./Comment.vue";
import Avatar from "../ui/Avatar.vue";
export default {
  name: "Card",
  components: {
    Comment,
    Avatar,
  },
};
</script>
<template>
  <div class="card mb-3 m-auto">
    <div class="card-header">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        class="rounded-circle"
        alt="Avatar"
      />

      Bob de la compta
    </div>
    <img src="https://picsum.photos/400/200" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </p>
      <Comment></Comment>
      <Comment></Comment>
      <div class="d-flex">
        <Avatar></Avatar>
        <input
          type="text"
          class="form-control input_card"
          placeholder="Add a comment"
          aria-label="Add a comment"
        />
        <button type="button" class="btn btn-primary">Post</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 768px){
  .card {
    width: 70%;
  }
}
.card-header {
  display: flex;
  align-items: center;
}
.card-header img {
  width: 50px;
  height: 50px;
}
.input_card {
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
