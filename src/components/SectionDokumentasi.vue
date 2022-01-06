<template>
  <div class="container">
    <div class="dokumentasi" id="dokumentasi">
      <TitleSection msg="Dokumentasi Kegiatan" />
      <div class="video">
        <h3 class="text-center col col-12">#VIDEO KEGIATAN</h3>
        <carousel
          class="video-animate"
          :items="1"
          :loop="true"
          :autoplay="true"
          :dots="false"
          :nav="false"
          :mouseDrag="false"
          :autoHeight="false"
          :autoWidth="false"
          :responsive="{
            0: { items: 1, nav: false },
            600: { items: 1, nav: false },
          }"
        >
          <VideoDokumentasiVue title="Special Treatmen" idVideo="wP4EEXBhbiU" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="iOfqFfcjNv4" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="3UJqvTc1sRQ" />
        </carousel>
        <router-link to="/dokumentasi">
          <Button msg="Lebih Banyak Video" />
        </router-link>
      </div>
      <div class="foto">
        <h3 class="text-center" style="color: #ef3e38;">
          #FOTO KEGIATAN
        </h3>
        <div class="fotoData" v-if="Object.keys(foto).length > 0">
          <carousel
            class="foto-animate"
            :items="3"
            :loop="true"
            :autoplay="true"
            :dots="false"
            :nav="false"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 3, nav: false },
            }"
          >
            <div class="foto" v-for="foto in foto[0].data" :key="foto.id">
              <FotoDokumentasiVue :image="foto.photo" :keterangan="foto.nama" />
            </div>
          </carousel>
        </div>
        <div
          class="loading d-flex"
          style="width: 100%; margin-top: 20px;"
          v-else
        >
          <div class="d-flex justify-content-center" style="margin: auto;">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div
          class="button"
          style="display: block; margin: auto;"
          v-if="Object.keys(foto).length > 0"
        >
          <router-link to="/dokumentasikegiatan">
            <Button msg="Lebih Banyak Foto" />
          </router-link>
        </div>
        <div class="button" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import FotoDokumentasiVue from './FotoDokumentasi.vue'
import TitleSection from './TitleSection.vue'
import VideoDokumentasiVue from './VideoDokumentasi.vue'
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
  name: 'SectionDokumentasi',
  components: {
    TitleSection,
    VideoDokumentasiVue,
    FotoDokumentasiVue,
    carousel,
    Button,
  },
  data() {
    return {
      foto: [],
    }
  },
  mounted() {
    axios
      .get('https://mandhalasenom.my.id/api/dokumentasi', {
        headers: {},
      })
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
.fotoData {
  margin-top: 0px;
}
</style>
