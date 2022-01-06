<template>
  <div class="jumbotron">
    <div class="container">
      <div class="title d-flex flex-wrap justify-content-center">
        <vue-typed-js
          :strings="['Kampung Pendidikan Mandhala Senom']"
          :loop="true"
          :typeSpeed="100"
          :backDelay="1000"
          :backSpeed="100"
        >
          <h1 class="typing"></h1>
        </vue-typed-js>
      </div>
      <div class="row d-flex justify-content-between mt-lg-5">
        <div class="tagline col col-lg-5">
          <div class="row">
            <h2>
              <i class="fa fa-quote-left" aria-hidden="true"></i>
              Kampung Pendidikan
              <span>Yes</span>
              <br />
              <span>Mandhala Senom</span>
              Oke
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </h2>
            <button class="btn btn-cta">LEBIH LANJUT</button>
          </div>
        </div>
        <div class="animate-navigate d-flex justify-content-center d-lg-none">
          <i class="fas fa-angle-double-down"></i>
        </div>
        <div class="image-animate col offset-1 col-lg-6 d-none d-lg-block">
          <HeroCarousel />
        </div>
      </div>
      <div style="display: flex; justify-content: center;">
        <div class="infografis text-start">
          <infoButton image="crowd.png" jumlah="15" keterangan="MENTOR" />
          <infoButton image="children.png" jumlah="99" keterangan="MENTOR" />
          <infoButton image="books.png" jumlah="1000" keterangan="BUKU" />
          <!-- <div class="info text-start">
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import HeroCarousel from './HeroCarousel.vue'
import infoButton from './infoButton.vue'

export default {
  name: 'Jumbotron',
  components: { HeroCarousel, infoButton },
}
Vue.use(VueTypedJs)
</script>

<style scoped>
.jumbotron {
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 50px;
  background-color: #ef3e38 !important;
  color: white !important;
  box-sizing: border-box;
  /* z-index: -999999; */
}

.jumbotron .title {
  width: 100%;
  height: 50px;
}

.jumbotron .title h1 {
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-style: italic;
  font-size: 40px;
  font-weight: 900;
  color: white !important;
}

.jumbotron .tagline {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: 'Lato', sans-serif;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: auto;
}

.jumbotron .tagline h2 span {
  display: inline-block;
  font-weight: bold;
  color: #14a6a0 !important;
}

.jumbotron .animate-navigate {
  width: 100%;
  height: 150px;
  padding-top: 100px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 50px;
  opacity: 0.2;
}

.jumbotron .image-animate {
  width: 50%;
  height: 500px;
}

.jumbotron .image-animate img {
  width: 50%;
  height: 500px;
  border-top-left-radius: 100px;
}
.jumbotron .btn-cta {
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  width: 182px;
  height: 46px;
  background-color: #14a6a0;
  color: white;
  border-radius: 60px;
  margin-left: 30px;
  margin-top: 30px;
}
.jumbotron .infografis {
  width: 60%;
  background-color: #14a6a0;
  min-height: 100px;
  position: absolute;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.jumbotron .info {
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
  width: 100%;
  height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .jumbotron .title {
    width: 100%;
    height: 250px;
  }
  .jumbotron .tagline {
    margin-top: 50px;
    padding: 5px;
  }
  .jumbotron .tagline h2 {
    font-size: 30px;
  }
  .jumbotron .animate-navigate {
    width: 100%;
    height: 150px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 50px;
    opacity: 0.2;
  }
  .jumbotron .image-animate {
    display: none;
  }
}
</style>
