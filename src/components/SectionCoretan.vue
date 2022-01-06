<template>
  <div class="container" id="coretan">
    <div class="coretan d-flex flex-wrap" style="margin-top: 30px;">
      <TitleSection msg="#CORETANMANDHALASENOM" />
      <div class="coretan" v-if="Object.keys(artikel).length > 0">
        <div
          class="coretan"
          v-for="(artikel, index) in artikel[0].data"
          :key="artikel.id"
        >
          <CardCoretanVue
            :image="artikel.photo"
            :title="artikel.nama"
            :keterangan="artikel.keterangan"
            :id="artikel.id"
            v-if="index <= 3"
          />
        </div>
      </div>
      <div class="loading d-flex" style="width: 100%; margin-top: 10px;" v-else>
        <div class="d-flex justify-content-center" style="margin: auto;">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div
        class="button"
        style="display: block; margin: auto;"
        v-if="Object.keys(artikel).length > 1"
      >
        <router-link to="/agendamandhala">
          <Button msg="Lebih Banyak Agenda" />
        </router-link>
      </div>
      <div v-else class="fw-bold offset-5">
        <p class="text-center">
          Data Coretan Di Temukan
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import CardCoretanVue from './CardCoretan.vue'
import TitleSection from './TitleSection.vue'
import axios from 'axios'

export default {
  name: 'SectionCoretan',
  components: {
    TitleSection,
    CardCoretanVue,
    Button,
  },
  data() {
    return {
      artikel: [],
    }
  },
  mounted() {
    axios
      .get('https://mandhalasenom.my.id/api/artikel', {
        headers: {},
      })
      .then((response) => {
        this.artikel.push(response.data)
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
.coretan {
  width: 100%;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  margin-bottom: 10px;
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
    margin-top: -20px;
  }
}
</style>
