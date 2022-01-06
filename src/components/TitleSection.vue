<template>
  <h1 class="text-center col col-12">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'TitleSection',
  props: { msg: String },
}
</script>

<style scoped>
@media (max-width: 768px) {
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #264653 !important;
  }
}
</style>
