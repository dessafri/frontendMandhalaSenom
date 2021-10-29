<template>
  <div class="card col-12">
    <div class="row d-flex">
      <img
        :src="require(`@/assets/${image}`)"
        class="rounded card-img-top col col-lg-3"
        alt="artikel 1"
      />
      <div class="card-body col-lg-8">
        <a href="">
          <h5 class="card-title fw-bolder text-start">{{ title }}</h5>
        </a>
        <p class="card-text text-start">
          {{ keterangan }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCoretan',
  props: {
    image: String,
    title: String,
    keterangan: String,
  },
}
</script>

<style scoped>
.coretan .card {
  width: 100%;
  height: 220px;
  border: none;
  margin-top: 20px;
}

.coretan .card img {
  width: 30%;
  height: auto;
}
.coretan .card .card-body p {
  display: block;
}

.coretan .card .card-body a,
.coretan .card .card-body h5 {
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: #1c2e60;
  margin-left: 0;
}
</style>
