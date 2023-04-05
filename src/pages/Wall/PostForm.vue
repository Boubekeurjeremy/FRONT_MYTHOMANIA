<script>
export default {
  name: "PostForm",
  components: {},
};
</script>
<template>
  <div class="form-floating mt-4">
    <div
      contenteditable="true"
      class="form-control py-3"
      id="floatingTextarea2"
      style="height: 100px"
    ></div>
    <label for="floatingTextarea2"></label>
  </div>
  <div class="d-flex">
    <label type="file-input" class="btn btn-secondary mt-2"
      >Add image <input id="file-input" type="file" class="file_input"
    /></label>
    <button type="button" class="btn btn-primary mt-2 ms-auto">Post</button>
  </div>
  <hr class="dropdown-divider-secondary" />
</template>
<style scoped>
div label input {
  display: none !important;
}
body {
  background-color: var(--bs-gray-300) !important;
}
.form-floating > div.form-control {
  height: auto !important;
  min-height: 5rem !important;
}
.form-floating > div.form-control:empty:not(:focus)::before {
  content: "Leave a comment here";
  color: #a0a0a0;
  display: block;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  
}
</style>
