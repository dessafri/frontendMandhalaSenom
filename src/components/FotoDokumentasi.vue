<template>
  <div class="card text-center" style="width: 18rem;">
    <img :src="image" class="card-img-top" :alt="keterangan" />
  </div>
</template>

<script>
export default {
  name: 'FotoDokumentasi',
  props: { image: String, keterangan: String },
}
</script>

<style scoped>
.card {
  margin-left: 10px;
}
</style>
