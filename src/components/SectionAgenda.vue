<template>
  <div class="container">
    <div class="agenda col col-lg-12 justify-content-evenly">
      <TitleSection msg="Agenda" />
      <CardAgenda
        title="Tahfidz Al-quran"
        keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
            voluptatum consectetur labore, porro voluptatem laboriosam veritatis
            dolor! Dolorum, excepturi minima quae ullam rerum, dicta consequatur
            consectetur"
        waktu="Rabu, 12 Oktober 2021"
      />
      <CardAgenda
        title="Tahfidz Al-quran"
        keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
            voluptatum consectetur labore, porro voluptatem laboriosam veritatis
            dolor! Dolorum, excepturi minima quae ullam rerum, dicta consequatur
            consectetur"
        waktu="Rabu, 12 Oktober 2021"
      />
      <CardAgenda
        title="Tahfidz Al-quran"
        keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
            voluptatum consectetur labore, porro voluptatem laboriosam veritatis
            dolor! Dolorum, excepturi minima quae ullam rerum, dicta consequatur
            consectetur"
        waktu="Rabu, 12 Oktober 2021"
      />
      <CardAgenda
        title="Tahfidz Al-quran"
        keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
            voluptatum consectetur labore, porro voluptatem laboriosam veritatis
            dolor! Dolorum, excepturi minima quae ullam rerum, dicta consequatur
            consectetur"
        waktu="Rabu, 12 Oktober 2021"
      />
      <CardAgenda
        title="Tahfidz Al-quran"
        keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
            voluptatum consectetur labore, porro voluptatem laboriosam veritatis
            dolor! Dolorum, excepturi minima quae ullam rerum, dicta consequatur
            consectetur"
        waktu="Rabu, 12 Oktober 2021"
      />
      <CardAgenda
        title="Tahfidz Al-quran"
        keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
            voluptatum consectetur labore, porro voluptatem laboriosam veritatis
            dolor! Dolorum, excepturi minima quae ullam rerum, dicta consequatur
            consectetur"
        waktu="Rabu, 12 Oktober 2021"
      />
    </div>
  </div>
</template>

<script>
import CardAgenda from './CardAgenda.vue'
import TitleSection from './TitleSection.vue'
export default {
  name: 'SectionAgenda',
  components: { TitleSection, CardAgenda },
}
</script>

<style scoped>
.agenda {
  color: #1c2e60;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 100px;
}
</style>
