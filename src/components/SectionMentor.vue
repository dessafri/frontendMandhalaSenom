<template>
  <div class="container">
    <div class="mentor">
      <TitleSection msg="Mentor" />
      <carousel
        class="card-animate d-flex justify-content-center"
        :items="3"
        :loop="true"
        :autoplay="true"
        :dots="false"
        :nav="false"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 3, nav: false },
        }"
      >
        <CardMentor image="pic-1.jpg" nama="Ach Rofiqi" jabatan="Ketua TBM" />
        <CardMentor image="pic-1.jpg" nama="Ach Rofiqi" jabatan="Ketua TBM" />
        <CardMentor image="pic-1.jpg" nama="Ach Rofiqi" jabatan="Ketua TBM" />
        <CardMentor image="pic-1.jpg" nama="Ach Rofiqi" jabatan="Ketua TBM" />
        <CardMentor image="pic-1.jpg" nama="Ach Rofiqi" jabatan="Ketua TBM" />
        <CardMentor image="pic-1.jpg" nama="Ach Rofiqi" jabatan="Ketua TBM" />
      </carousel>
    </div>
  </div>
</template>

<script>
import TitleSection from './TitleSection.vue'
import carousel from 'vue-owl-carousel'
import CardMentor from './CardMentor.vue'
export default {
  name: 'SectionMentor',
  components: { CardMentor, TitleSection, carousel },
}
</script>

<style scoped>
.mentor {
  margin-bottom: 100px;
  color: #1c2e60;
}

.card-animate {
  margin-top: 50px;
}
@media (max-width: 768px) {
  .mentor {
    color: #1c2e60;
  }
  .mentor h2 {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 30px;
  }
  .mentor .card .card-body h5 {
    font-weight: bold;
  }
}
</style>
