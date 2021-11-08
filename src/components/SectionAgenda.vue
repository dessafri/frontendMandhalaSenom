<template>
  <div class="container">
    <div class="agenda col col-lg-12">
      <TitleSection msg="Agenda" />
      <div class="agenda" v-if="Object.keys(agenda).length > 0">
        <div class="agenda" v-for="agenda in agenda[0].data" :key="agenda.id">
          <CardAgenda
            :title="agenda.title"
            :keterangan="agenda.Keterangan"
            :waktu="agenda.tanggal"
          />
        </div>
      </div>
      <div class="col-12 text-center" v-else>
        Agenda Belum Di Tambahkan
      </div>
    </div>
  </div>
</template>

<script>
import CardAgenda from './CardAgenda.vue'
import TitleSection from './TitleSection.vue'
import axios from 'axios'
export default {
  name: 'SectionAgenda',
  components: { TitleSection, CardAgenda },
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
  margin-bottom: 50px;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .agenda {
    color: #1c2e60;
    display: block;
  }
  .agenda h2 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .agenda .card {
    margin-bottom: 50px;
    width: 100%;
  }
  .agenda .card .card-header {
    background-color: orange;
  }
}
</style>
