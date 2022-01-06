<template>
  <div id="home">
    <Header />
    <Jumbotron />
    <SectionTentang />
    <div class="sectiongabung d-none d-md-block">
      <SectionAgenda />
      <SectionMentor />
    </div>
    <div class="sectioncoretan d-none d-md-block">
      <SectionCoretanVue />
    </div>
    <div class="d-md-none d-sm-block">
      <SectionAgenda />
      <SectionMentor />
    </div>
    <div class="d-md-none d-sm-block">
      <SectionCoretanVue />
    </div>
    <SectionDokumentasiVue />
    <FooterVue />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HeroCarousel from '@/components/HeroCarousel.vue'
import Header from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import SectionTentang from '../components/SectionTentang.vue'
import SectionAgenda from '../components/SectionAgenda.vue'
import SectionMentor from '../components/SectionMentor.vue'
import SectionCoretanVue from '../components/SectionCoretan.vue'
import SectionDokumentasiVue from '../components/SectionDokumentasi.vue'
import FooterVue from '../components/Footer.vue'
import $ from 'jquery'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // HeroCarousel,
    Header,
    Jumbotron,
    SectionTentang,
    SectionAgenda,
    SectionMentor,
    SectionCoretanVue,
    SectionDokumentasiVue,
    FooterVue,
  },
  mounted() {
    $('.scroll').on('click', function (e) {
      let tujuan = $(this).attr('href')

      let elemenTujuan = $(tujuan)

      $('html, body').animate(
        {
          scrollTop: elemenTujuan.offset().top - 600,
        },
        1500,
        'easeInOutExpo',
      )
      console.log(elemenTujuan)
      e.preventDefault()
    })
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@100;500&display=swap');
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Montserrat', sans-serif;
}

.sectiongabung {
  background-color: #ef3e38;
  border-bottom-right-radius: 300px;
  position: relative;
  z-index: 9999;
}
.sectioncoretan {
  background-color: #2a9d8f;
  margin-top: -350px;
  padding-top: 350px;
  position: relative;
  z-index: 0;
  border-bottom-left-radius: 100px;
}
.tentang {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.tentang h1 {
  font-weight: bold;
  margin-bottom: 50px;
  color: #264653;
}

.tentang p {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  color: #2a9d8f;
}

.tentang #map {
  width: 50%;
  height: 350px;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  border-radius: 30px;
}

.tentang .visimisi {
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
  width: 100%;
  margin-top: 50px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.tentang .visimisi h2 {
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 20px;
}

.tentang .visimisi p,
.tentang .visimisi i {
  font-size: 30px;
}

.tentang .visimisi .misi li {
  font-size: 20px;
}

.tentang .info {
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
  width: 100%;
  height: 150px;
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.tentang .info .card {
  border: none;
  width: auto;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: auto;
}

.tentang .info .card .text {
  margin-left: 30px;
}

.tentang .info .card .text h3 {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: -30px;
}

.tentang .info .card .text span {
  display: inline-block;
  font-weight: 500;
  margin-left: 5px;
}

.agenda {
  color: #1c2e60;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 100px;
}

.agenda .card {
  margin-top: 10px;
  width: 32%;
  height: auto;
}

.mentor {
  margin-bottom: 100px;
  color: #1c2e60;
}

.mentor .card-animate .card {
  height: auto;
  border: none;
}

.mentor .card-animate .card img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin: auto;
}

.coretan {
  width: 100%;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  margin-bottom: 50px;
  color: #1c2e60;
}

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

.coretan .card .card-body {
  margin-top: -30px;
}

.coretan .card .card-body a,
.coretan .card .card-body h5 {
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: #1c2e60;
  margin-left: 0;
}

/* .coretan a,
.coretan button.btn-more {
  text-decoration: none;
  display: block;
  width: 250px;
  height: 50px;
  margin-top: 20px;
  margin-left: 30%;
} */

.dokumentasi {
  color: #264653;
  margin-top: 50px;
}

.dokumentasi h2 {
  font-weight: bold;
}

.dokumentasi .video {
  margin-top: 50px;
}

.dokumentasi .video h3 {
  margin-bottom: 20px;
  color: #ef3e38 !important;
}

.dokumentasi .video .video-animate {
  width: 100%;
  height: auto;
}

.dokumentasi .video .video-animate .card {
  height: 400px;
  display: block;
  margin: auto;
  border: none;
}

.dokumentasi .video .video-animate .card iframe {
  display: block;
  margin: auto;
}

.dokumentasi .video .btn {
  margin-bottom: 50px;
}

.dokumentasi .foto {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.dokumentasi .foto .foto-animate {
  margin-top: -10px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.dokumentasi .foto .foto-animate .card {
  width: 420px;
  height: 220px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: none;
  margin-left: 10px;
}

.dokumentasi .foto .foto-animate .card img {
  width: 500px;
  height: 220px;
  display: block;
  margin: auto;
  margin-left: 15px;
}

.dokumentasi .foto .btn {
  margin-bottom: 50px;
}

.footer {
  width: 100%;
  height: 270px;
  background-color: #ef3e38;
  color: white;
  padding-top: 20px;
}

.footer h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
@media (max-width: 768px) {
  .sectioncoretan .sectiongabung {
    background-color: yellowgreen;
  }
}
</style>
