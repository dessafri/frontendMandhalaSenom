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
          <h2>
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Kampung Pendidikan
            <span>Yes</span>
            <br />
            <span>Mandhala Senom</span>
            Oke
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </h2>
        </div>
        <div class="animate-navigate d-flex justify-content-center d-lg-none">
          <i class="fas fa-angle-double-down"></i>
        </div>
        <div class="image-animate col offset-1 col-lg-6 d-none d-lg-block">
          <HeroCarousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import HeroCarousel from './HeroCarousel.vue'

export default {
  name: 'Jumbotron',
  components: { HeroCarousel },
}
Vue.use(VueTypedJs)
</script>

<style scoped>
.jumbotron {
  width: 100%;
  height: 600px;
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 50px;
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
  color: #1c2e60 !important;
}

.jumbotron .tagline {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: auto;
}

.jumbotron .tagline h2 span {
  display: inline-block;
  font-weight: bold;
  color: #142658;
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
