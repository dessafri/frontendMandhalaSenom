<template>
  <div class="card col-12 mt-5">
    <div class="row d-flex">
      <img :src="image" class="card-img-top col col-lg-3" alt="artikel 1" />
      <div class="card-body col-lg-8" style="margin-top: -20px;">
        <router-link v-bind:to="'/detailcoretan/' + id">
          <a href="">
            <h5 class="card-title fw-bolder text-start">{{ title }}</h5>
          </a>
        </router-link>
        <p class="card-text text-start" v-html="keterangan">
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
    id: Number,
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
  height: 250px;
}
.coretan .card .card-body p {
  display: block;
  height: 220px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.coretan .card .card-body a,
.coretan .card .card-body h5 {
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: rgb(221, 94, 48);
  margin-left: 0;
  text-transform: capitalize;
}
.coretan .card .card-body a,
.coretan .card .card-body h5:hover {
  color: #1c2e60;
}
@media (max-width: 768px) {
  .coretan {
    display: flex;
    margin-bottom: 50px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .coretan .card {
    border: none;
    margin-top: 30px;
    margin-bottom: 50px;
    width: 75%;
    height: 375px;
  }
  .coretan .card a {
    text-decoration: none;
    color: #142658;
  }
  .coretan .card .card-title {
    margin-top: 10px;
  }
}
</style>
