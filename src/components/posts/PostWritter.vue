<script setup>

</script>

<template>
  <!-- View for writting a new post -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Write a new post</h5>
      <form>
        <div class="mb-3">
          <label for="post-title" class="form-label">Title</label>
          <input type="text" class="form-control" id="post-title" placeholder="Post title">
        </div>
        <div class="mb-3">
          <label for="post-description" class="form-label">Description</label>
          <textarea class="form-control" id="post-description" rows="3" placeholder="Post description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>