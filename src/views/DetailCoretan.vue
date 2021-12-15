<template>
  <div class="coretanView">
    <Header />
    <Breadcrumbs msg="CoretanMandhala" />
    <div class="container">
      <div v-if="Object.keys(artikel).length > 0">
        <div v-for="artikel in artikel" :key="artikel.id">
          <div class="data">
            <div class="jumbotron">
              <img :src="artikel.photo" alt="jumbotron" />
            </div>
            <div class="content">
              <h3>{{ artikel.nama }}</h3>
              <span>{{ convertDate(artikel.tanggal) }}</span>
              <p v-html="artikel.keterangan">
                {{ artikel.keterangan }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-12" v-else>
        Data Tidak Ada
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import moment from 'moment'

import Breadcrumbs from '@/components/BreadCrumbs.vue'
// import CardCoretanVue from '@/components/CardCoretan.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'
export default {
  name: 'detailcoretan',
  components: {
    Header,
    Breadcrumbs,
    Footer,
    // CardCoretanVue,
  },
  data() {
    return {
      artikel: [],
    }
  },
  methods: {
    convertDate(waktu) {
      return moment(waktu).format('dddd , DD MMMM YYYY')
    },
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/artikel/', {
        params: {
          id: this.$attrs.id,
        },
      })
      .then((response) => {
        this.artikel.push(response.data.data)
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
.jumbotron {
  width: 100%;
  padding-top: 50px;
  border: none;
  margin-bottom: 50px;
}
.jumbotron img {
  width: 100%;
  height: 500px;
}
.content {
  width: 100%;
  text-align: justify;
}
.content h3,
span {
  display: block;
}

.content h3 {
  font-weight: 600;
  font-family: 'Lato', sans-serif;
  font-size: 28px;
}
.content span {
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
}
.content p {
  margin-top: 50px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  margin-bottom: 100px;
}
.data:nth-child(2) {
  display: none;
}
</style>
