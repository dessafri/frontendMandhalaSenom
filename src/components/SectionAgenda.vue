<template>
  <div class="container" id="agenda">
    <div class="agenda col col-lg-12">
      <TitleSection msg="Agenda" />
      <div class="agenda" v-if="Object.keys(agenda).length > 0">
        <div
          class="agenda d-flex"
          v-for="agenda in agenda[0].data"
          :key="agenda.id"
        >
          <CardAgenda
            :title="agenda.title"
            :keterangan="agenda.Keterangan"
            :image="agenda.photo"
            :waktu="agenda.tanggal"
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
    </div>
    <div
      class="button"
      style="display: block; margin: auto;"
      v-if="Object.keys(agenda).length > 0"
    >
      <router-link to="/agendamandhala">
        <Button msg="Lebih Banyak Agenda" />
      </router-link>
    </div>
    <div class="button" v-else></div>
  </div>
</template>

<script>
import CardAgenda from './CardAgenda.vue'
import TitleSection from './TitleSection.vue'
import Button from './Button.vue'
import axios from 'axios'
export default {
  name: 'SectionAgenda',
  components: { TitleSection, CardAgenda, Button },
  data() {
    return {
      agenda: [],
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/agenda/')
      .then((response) => {
        this.agenda.push(response.data)
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
.agenda {
  color: #1c2e60;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .agenda {
    color: #1c2e60;
    display: flex;
    justify-content: center;
  }
  .agenda h2 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .agenda .card {
    margin-bottom: 10px;
    width: 100%;
  }
  .agenda .card .card-header {
    background-color: orange;
  }
}
</style>
