<template>
  <div class="card text-center" style="width: 18rem;">
    <img
      :src="require(`@/assets/${image}`)"
      class="card-img-top"
      alt="picture mentor"
    />
  </div>
</template>

<script>
export default {
  name: 'FotoDokumentasi',
  props: { image: String },
}
</script>

<style scoped>
.card {
  margin-left: 10px;
}
</style>
