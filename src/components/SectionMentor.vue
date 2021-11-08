<template>
  <div class="container">
    <TitleSection msg="Mentor" />
    <div class="mentor" v-if="Object.keys(mentor).length > 0">
      <carousel
        class="card-animate d-flex justify-content-center"
        :items="1"
        :loop="true"
        :autoplay="true"
        :dots="false"
        :nav="false"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 3, nav: false },
        }"
      >
        <div class="mentor" v-for="mentor in mentor[0].data" :key="mentor.id">
          <CardMentor
            :image="mentor.photo"
            :nama="mentor.nama"
            :jabatan="mentor.jabatan"
          />
        </div>
      </carousel>
    </div>
    <div class="col-12 text-center" v-else>
      Data Tidak Di temukan
    </div>
  </div>
</template>

<script>
import TitleSection from './TitleSection.vue'
import carousel from 'vue-owl-carousel'
import CardMentor from './CardMentor.vue'
import axios from 'axios'
export default {
  name: 'SectionMentor',
  components: { TitleSection, CardMentor, carousel },
  data() {
    return {
      mentor: [],
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/mentor/')
      .then((response) => {
        this.mentor.push(response.data)
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
