<template>
  <button class="btn" type="button">
    {{ msg }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    msg: String,
  },
}
</script>
<style scoped>
.btn {
  width: 200px;
  height: 80 !important;
  border-radius: 30px;
  background-color: #14a6a0 !important;
  color: white !important;
}
</style>
