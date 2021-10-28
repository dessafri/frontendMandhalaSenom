<template>
  <div class="card" style="width: 18rem;">
    <img
      :src="require(`@/assets/${image}`)"
      class="card-img-top"
      alt="picture mentor"
    />
    <div class="card-body">
      <h5 class="card-title">{{ nama }}</h5>
      <span>{{ jabatan }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMentor',
  props: { image: String, nama: String, jabatan: String },
}
</script>

<style scoped>
.mentor .card-animate .card {
  margin-top: 80px;
  height: auto;
  border: none;
  display: block;
  margin: auto;
}

.mentor .card-animate .card img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin: auto;
}
</style>
