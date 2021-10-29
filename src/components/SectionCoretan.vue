<template>
  <div class="container">
    <div class="coretan d-flex flex-wrap">
      <TitleSection msg="#CORETANMANDHALASENOM" />
      <CardCoretanVue
        image="artikel-1.jpg"
        title="Card Title"
        keterangan="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardCoretanVue
        image="artikel-1.jpg"
        title="Card Title"
        keterangan="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <CardCoretanVue
        image="artikel-1.jpg"
        title="Card Title"
        keterangan="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      <ButtonMobileVue msg="Lebih Banyak" />
    </div>
  </div>
</template>

<script>
import ButtonMobileVue from './ButtonMobile.vue'
import CardCoretanVue from './CardCoretan.vue'
import TitleSection from './TitleSection.vue'

export default {
  name: 'SectionCoretan',
  components: {
    TitleSection,
    CardCoretanVue,
    ButtonMobileVue,
  },
}
</script>

<style scoped>
.coretan {
  width: 100%;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  margin-bottom: 50px;
  color: #1c2e60;
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
@media (max-width: 768px) {
  .coretan {
    margin-bottom: 50px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .coretan .card {
    border: none;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 75%;
    height: 375px;
  }
  .coretan .card a {
    text-decoration: none;
    color: #142658;
  }
  .coretan .card .card-title {
    margin-top: -20px;
  }
}
</style>
