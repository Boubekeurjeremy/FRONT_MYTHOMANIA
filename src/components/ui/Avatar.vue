<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 50,
    },
  },
};
</script>
<template>
  <img
    src="https://picsum.photos/50"
    class="card-img-top rounded-circle shadow-4"
    alt="..."
  />
</template>
<style scoped>
img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
