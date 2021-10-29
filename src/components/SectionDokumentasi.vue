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
          <FotoDokumentasiVue image="jumb-1.jpg" />
          <FotoDokumentasiVue image="jumb-2.jpg" />
          <FotoDokumentasiVue image="jumb-3.jpg" />
        </carousel>
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

export default {
  name: 'SectionDokumentasi',
  components: {
    TitleSection,
    VideoDokumentasiVue,
    FotoDokumentasiVue,
    carousel,
    ButtonMobileVue,
  },
}
</script>
