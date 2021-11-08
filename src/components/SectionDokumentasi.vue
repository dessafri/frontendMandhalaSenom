<template>
  <div class="container">
    <div class="dokumentasi">
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
          <VideoDokumentasiVue title="Special Treatmen" idVideo="phsIlqKhI6k" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="4S-338h7lRY" />
          <VideoDokumentasiVue title="Special Treatmen" idVideo="Gc3oSPHo95A" />
        </carousel>
        <ButtonMobileVue msg="Lebih Banyak" />
      </div>
      <div class="foto">
        <h3 class="text-center">#FOTO KEGIATAN</h3>
        <div class="foto" v-if="Object.keys(foto).length > 0">
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
        <div class="col col-12 text-center" v-else>
          Foto Belum Ada
        </div>
        <ButtonMobileVue msg="Lebih Banyak" />
      </div>
    </div>
  </div>
</template>

<script>
import FotoDokumentasiVue from './FotoDokumentasi.vue'
import TitleSection from './TitleSection.vue'
import VideoDokumentasiVue from './VideoDokumentasi.vue'
import carousel from 'vue-owl-carousel'
import ButtonMobileVue from './ButtonMobile.vue'
import axios from 'axios'

export default {
  name: 'SectionDokumentasi',
  components: {
    TitleSection,
    VideoDokumentasiVue,
    FotoDokumentasiVue,
    carousel,
    ButtonMobileVue,
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
