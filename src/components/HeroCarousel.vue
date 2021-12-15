<template>
  <div class="hero">
    <div v-if="Object.keys(foto).length > 0">
      <carousel
        :items="1"
        :loop="true"
        :autoplay="true"
        :dots="false"
        :nav="false"
      >
        <div v-for="(foto, index) in foto[0].data" :key="foto.id">
          <img :src="foto.photo" v-if="index <= 3" />
        </div>
      </carousel>
    </div>
    <div class="loading d-flex" style="height: 400px;" v-else>
      <div
        class="loading d-flex"
        style="width: 100%; margin-top: 10px; margin: auto;"
      >
        <div class="d-flex justify-content-center" style="margin: auto;">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
  name: 'HeroCarousel',
  components: { carousel },
  data() {
    return {
      foto: [],
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/dokumentasi/')
      .then((response) => {
        this.foto.push(response.data)
      })
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  },
}
</script>

<style scoped>
img {
  width: 50%;
  height: 500px;
  border-top-left-radius: 100px;
}
</style>
