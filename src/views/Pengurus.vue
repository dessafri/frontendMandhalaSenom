<template>
  <div class="agendaView">
    <Header />
    <Breadcrumbs msg="Pengurus" />
    <div class="container">
      <div class="jumbotron">
        <h5 class="text-center fw-bold">STRUKTUR ORGANISASI MANDHALA SENOM</h5>
        <div class="cardPengurus" v-if="Object.keys(mentor).length > 0">
          <div v-for="mentor in mentor[0].data" :key="mentor.id">
            <div
              style="width: 100%; display: flex; justify-content: space-around;"
            >
              <div class="card">
                <div class="cardRelawan">
                  <img :src="mentor.photo" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ mentor.nama }}</h5>
                  <p class="card-text" v-html="mentor.jabatan">
                    {{ mentor.jabatan }}
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="cardRelawan">
                  <img :src="mentor.photo" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ mentor.nama }}</h5>
                  <p class="card-text" v-html="mentor.jabatan">
                    {{ mentor.jabatan }}
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="cardRelawan">
                  <img :src="mentor.photo" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ mentor.nama }}</h5>
                  <p class="card-text" v-html="mentor.jabatan">
                    {{ mentor.jabatan }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 style="margin-top: 20px;" class="fw-bold">
          Relawan Mandhala Senom
        </h5>
        <div class="cardPengurus" v-if="Object.keys(relawan).length > 0">
          <div v-for="relawan in relawan[0].data" :key="relawan.id">
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
              "
            >
              <div class="card" style="width: 30%;">
                <div class="cardRelawan">
                  <img :src="relawan.photo" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ relawan.nama }}</h5>
                  <p class="card-text" v-html="relawan.jabatan">
                    {{ relawan.jabatan }}
                  </p>
                </div>
              </div>
              <div class="card" style="width: 30%;">
                <div class="cardRelawan">
                  <img :src="relawan.photo" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ relawan.nama }}</h5>
                  <p class="card-text" v-html="relawan.jabatan">
                    {{ relawan.jabatan }}
                  </p>
                </div>
              </div>
            </div>
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
import Header from '@/components/Header.vue'
import Breadcrumbs from '@/components/BreadCrumbs.vue'
// import CardMentor from '@/components/CardMentor.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'
export default {
  name: 'agenda',
  components: {
    Header,
    Breadcrumbs,
    Footer,
  },
  data() {
    return {
      mentor: [],
      relawan: [],
    }
  },
  mounted() {
    axios
      .get('https://mandhalasenom.my.id/api/mentor', {
        params: {
          jabatan: 'pengurus',
        },
      })
      .then((response) => {
        this.mentor.push(response.data)
      })
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
    axios
      .get('https://mandhalasenom.my.id/api/mentor', {
        params: {
          jabatan: 'relawan',
        },
      })
      .then((response) => {
        this.relawan.push(response.data)
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
h5 {
  font-size: 24px;
}
.cardPengurus {
  width: 100%;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
}
.cardPengurus .card {
  border: none;
  margin-bottom: 30px;
  margin-right: 20px;
}
.cardPengurus .card .cardRelawan img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.cardRelawan {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.paginate {
  widows: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
