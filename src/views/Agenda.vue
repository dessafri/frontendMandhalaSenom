<template>
  <div class="agendaView">
    <Header />
    <Breadcrumbs msg="Agenda" />
    <div class="container">
      <div class="jumbotron">
        <div v-if="Object.keys(agenda).length > 0">
          <carousel
            class="card-animate d-flex justify-content-center"
            :items="1"
            :loop="true"
            :autoplay="true"
            :dots="true"
            :nav="false"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 1, nav: false },
            }"
          >
            <div v-for="(agenda, index) in agenda[0].data" :key="agenda.id">
              <div class="agendaAnimate" v-if="index <= 3">
                <JumbotronAgenda
                  :image="agenda.photo"
                  :title="agenda.title"
                  :waktu="agenda.tanggal"
                />
              </div>
            </div>
          </carousel>
        </div>
        <div
          class="loading d-flex"
          style="width: 100%; margin-top: 10px;"
          v-else
        >
          <div class="d-flex justify-content-center" style="margin: auto;">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="Object.keys(agenda).length > 0">
        <div class="agendaPagination" style="margin-top: 50px;">
          <div v-for="agenda in agenda[0].data" :key="agenda.id">
            <CardAgenda
              :title="agenda.title"
              :keterangan="agenda.Keterangan"
              :image="agenda.photo"
              :waktu="agenda.tanggal"
            />
          </div>
        </div>
      </div>
      <div class="paginate">
        <nav aria-label="Page navigation example" style="margin: auto;">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CardAgenda from '@/components/CardAgenda.vue'
import JumbotronAgenda from '@/components/jumbotronAgenda.vue'
import Header from '@/components/Header.vue'
import Breadcrumbs from '@/components/BreadCrumbs.vue'
import Footer from '@/components/Footer.vue'
import carousel from 'vue-owl-carousel'
import axios from 'axios'
export default {
  name: 'agenda',
  components: {
    Header,
    Breadcrumbs,
    carousel,
    Footer,
    CardAgenda,
    JumbotronAgenda,
  },
  data() {
    return {
      agenda: [],
    }
  },
  mounted() {
    axios
      .get('https://mandhalasenom.my.id/api/agenda')
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
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@100;500&display=swap');

*,
html {
  font-family: 'Montserrat', sans-serif;
}
.agendaAnimate {
  width: 100%;
  height: 464px;
  position: relative;
}
.agendaPagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 6px 16px 16px -8px rgba(0, 0, 0, 0.43);
}
.card-title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}
.card a {
  text-decoration: none;
  color: #1c2e60;
}
.card img {
  width: 100%;
  height: 200px;
}
.card-body h5 p {
  width: 100%;
}
.paginate {
  widows: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
