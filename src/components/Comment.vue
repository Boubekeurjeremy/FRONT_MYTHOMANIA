<script>
import Avatar from "./Avatar.vue";
export default {
  name: "Comment",
  components: {
    Avatar,
  },
};
</script>
<template>
  <div class="d-flex gap-3">
    <Avatar></Avatar>
    <div class="d-flex flex-column comment_text p-1">
      <p>Sylvie du marketing</p>
      <p>Ouah c'est super beau</p>
    </div>
  </div>
</template>
<style scoped>
.comment_text {
  background-color: var(--bs-gray-300);
  border-radius: 10px;
  width: 100%;
}
.card-body > .d-flex {
  margin-bottom: 1rem;
}

.comment_text p {
  margin-bottom: 0px;
}
.comment_text p:nth-child(1) {
  font-weight: 500;
}
</style>
