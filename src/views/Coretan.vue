<template>
  <div class="agendaView">
    <Header />
    <Breadcrumbs msg="CoretanMandhala" />
    <div class="container">
      <h1>#CORETANMANDHALASENOM</h1>

      <div class="content" v-if="Object.keys(artikel).length > 0">
        <div
          class="coretan"
          v-for="(artikel, index) in artikel[0].data"
          :key="artikel.id"
        >
          <CardCoretanVue
            :image="artikel.photo"
            :title="artikel.nama"
            :keterangan="artikel.keterangan"
            v-if="index <= 3"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Breadcrumbs from '@/components/BreadCrumbs.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import CardCoretanVue from '@/components/CardCoretan.vue'
export default {
  name: 'agenda',
  components: {
    Header,
    Breadcrumbs,
    CardCoretanVue,
    Footer,
  },
  data() {
    return {
      artikel: [],
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/artikel/')
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
*,
html {
  font-family: 'Lato', sans-serif;
}
.content {
  margin-top: 50px;
  margin-bottom: 50px;
}
.content .card {
  margin-top: 20px;
  border: none;
}
h1 {
  font-weight: 600;
  font-size: 36px;
}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
</style>
