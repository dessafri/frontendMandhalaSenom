<template>
  <div class="card col col-lg-4">
    <div class="card-header">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-body">
      <p v-html="keterangan">
        {{ keterangan }}
      </p>
    </div>
    <div class="card-footer">
      <h5>{{ waktu }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAgenda',
  props: { title: String, keterangan: String, waktu: String },
}
</script>

<style scoped>
.agenda .card {
  margin-top: 10px;
  width: 350px;
  height: auto;
}
.agenda h4 {
  font-weight: 400;
}
</style>
