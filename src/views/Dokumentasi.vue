<template>
  <div class="agendaView">
    <Header />
    <Breadcrumbs msg="Dokumentasi" />
    <div class="container">
      <div class="jumbotron">
        <h5>Dokumentasi Video</h5>
        <div class="cardVideo">
          <VideoDokumentasiVue title="Special Treatmen" idVideo="wP4EEXBhbiU" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="iOfqFfcjNv4" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="3UJqvTc1sRQ" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="wP4EEXBhbiU" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="iOfqFfcjNv4" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="3UJqvTc1sRQ" />
        </div>
        <button type="button" class="btn btn-outline-danger">Youtube</button>
        <h5 style="margin-top: 20px;">Dokumentasi Foto</h5>
        <div v-if="Object.keys(foto).length > 0">
          <div class="cardFoto">
            <div v-for="foto in foto[0].data" :key="foto.id">
              <div
                class="card text-center"
                style="width: 350px; height: 200px;"
              >
                <img
                  :src="foto.photo"
                  class="card-img-top"
                  alt="keterangan"
                  style="height: 100%;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dokumentasiPaginate" style="margin-top: 50px;"></div>
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
import VideoDokumentasiVue from '@/components/VideoDokumentasiCard.vue'
// import FotoDokumentasiVue from '@/components/FotoDokumentasi.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'
export default {
  name: 'agenda',
  components: {
    Header,
    Breadcrumbs,
    VideoDokumentasiVue,
    Footer,
  },
  data() {
    return {
      foto: [],
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/dokumentasi/')
      .then((response) => {
        this.foto.push(response.data)
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
  padding-top: 70px;
  border: none;
}
.jumbotron h5 {
  display: block;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
}
.dokumentasiPaginate {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardVideo,
.cardFoto {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
.card {
  border: none;
  margin-top: 10px;
  box-shadow: 6px 16px 16px -8px rgba(0, 0, 0, 0.43);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

/* .card {
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
} */
.paginate {
  widows: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
