<template>
  <a href="#" class="btn btn-foto btn-outline-primary col col-12">
    {{ msg }}
  </a>
</template>

<script>
export default {
  name: 'ButtonMobile',
  props: { msg: String },
}
</script>

<style scoped>
.btn {
  display: block;
  width: 150px;
  height: 50px;
  margin: auto;
  margin-top: 50px;
  text-decoration: none;
}
</style>
