<template>
  <div class="container" id="mentor" style="margin-top: 30px;">
    <TitleSection msg="Pengurus" />
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
    <div class="loading d-flex" style="width: 100%; margin-top: 10px;" v-else>
      <div class="d-flex justify-content-center" style="margin: auto;">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <div
      class="buttonData"
      style="display: block; margin: auto;"
      v-if="Object.keys(mentor).length > 1"
    >
      <router-link to="/pengurus">
        <Button msg="Lebih Banyak Pengurus" />
      </router-link>
    </div>
    <div v-else class="fw-bold">Data Tidak Di Temukan</div>
  </div>
</template>

<script>
import TitleSection from './TitleSection.vue'
import carousel from 'vue-owl-carousel'
import CardMentor from './CardMentor.vue'
import Button from './Button.vue'
import axios from 'axios'
export default {
  name: 'SectionMentor',
  components: { TitleSection, CardMentor, carousel, Button },
  data() {
    return {
      mentor: [],
    }
  },
  mounted() {
    axios
      .get('https://mandhalasenom.my.id/api/mentor', {
        headers: {},
      })
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
#mentor {
  padding-bottom: 30px;
}
.mentor {
  /* margin-bottom: 100px; */
  color: #264653;
  margin-bottom: 10px;
}

.card-animate {
  margin-top: 50px;
}
.buttonData {
  width: 100%;
  height: 80px;
}
@media (max-width: 768px) {
  .mentor {
    color: #264653;
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
