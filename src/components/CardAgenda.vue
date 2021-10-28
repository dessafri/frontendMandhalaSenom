<template>
  <div class="card col col-lg-4">
    <div class="card-header">
      <h5>{{ title }}</h5>
    </div>
    <div class="card-body">
      <p>
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
  width: 32%;
  height: auto;
}
</style>
