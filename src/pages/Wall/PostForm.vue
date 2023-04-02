<script>
export default {
  name: "PostForm",
  components: {},
};
</script>
<template>
  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea2"
      style="height: 100px"
    ></textarea>
    <label for="floatingTextarea2">Comments</label>
  </div>
  <div class="d-flex">
    <label type="file-input" class="btn btn-secondary mt-1 "
      >Add image <input id="file-input" type="file" class="file_input" 
    /></label>
    <button type="button" class="btn btn-primary mt-1 ms-auto">Post</button>
  </div>
  <hr class="dropdown-divider-secondary" />
</template>
<style module>
div label input  {
  display: none !important;
}
body {
  background-color: var(--bs-gray-300) !important;
}
</style>
