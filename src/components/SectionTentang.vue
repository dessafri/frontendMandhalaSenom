<template>
  <div class="container">
    <div class="tentang" id="tentang">
      <TitleSection msg="Mandhala Senom" />
      <p class="col col-lg-5 text-start">
        Taman Baca Mandhala Senom ini merupakan taman baca masyarakat yang
        berlokasi di Jalan Veteran No. 140, Barurambat Timur, Kecamatan
        Pademawu, Kabupaten Pamekasan, Jawa Timur. Secara historis, Taman Baca
        Mandhala Senom didirikan oleh Achmad Rofiqi, berawal dari Kabupaten
        Pamekasan yang mendapatkan predikat kabupaten pendidikan sejak tahun
        2012. Pada tahun 2016, barulah kemudian didirikan Taman Baca Mandhala
        Senom sebagai tempat menunjang proses belajar mengajar di Kampung
        Pendidikan, meningkatkan minat baca masyarakat sekitar, dan menumbuhkan
        kecintaan di bidang literasi.
      </p>
      <div id="map" class="col col-lg-5">
        <MapVue />
      </div>
      <div class="visimisi d-flex justify-content-between">
        <h2 class="text-center col col-12">Visi & Misi</h2>
        <div class="visi col col-lg-6 col-10 text-start">
          <p>
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Sebagai pusat kegiatan teknologi dan informasi, mewujudkan
            masyarakat yang cerdas, berwawasan dan berakhlakul karimah
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </p>
        </div>
        <div class="misi col col-lg-5 col-12 text-start">
          <ul>
            <li>Menyediakan buku sebagai bahan referensi</li>
            <li>
              Menyediakan teknologi informasi dalam menunjang kebutuhan
              masyarakat
            </li>
            <li>
              Mengembangkan soft skill masyarakat untuk meningkatkan kehidupan
              yang lebih baik
            </li>
            <li>
              Menyediakan fasilitas pendukung untuk membangun Literasi
              Masyarakat
            </li>
            <li>Memberikan pengetahuan akhlak kepada Masyarakat</li>
          </ul>
        </div>
      </div>
      <div class="info text-start">
        <infoButton image="crowd.png" jumlah="15" keterangan="MENTOR" />
        <infoButton image="open-book.png" jumlah="100" keterangan="BUKU" />
        <infoButton image="children.png" jumlah="90" keterangan="ANAK" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from './TitleSection.vue'
import infoButton from './infoButton.vue'
import MapVue from './Map.vue'

export default {
  name: 'SectionTentang',
  components: { TitleSection, infoButton, MapVue },
}
</script>

<style scoped>
.tentang {
  color: #1c2e60;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.tentang h1 {
  font-weight: bold;
  margin-bottom: 50px;
}

.tentang p {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

.tentang #map {
  width: 50%;
  height: 350px;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  border-radius: 30px;
}

.tentang .visimisi {
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
  width: 100%;
  margin-top: 50px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.tentang .visimisi h2 {
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 20px;
}

.tentang .visimisi p,
.tentang .visimisi i {
  font-size: 30px;
}

.tentang .visimisi .misi li {
  font-size: 20px;
}

.tentang .info {
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
  width: 100%;
  height: 150px;
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .tentang {
    width: 100%;
    height: auto;
    margin-top: 150px;
    margin-bottom: 400px;
    display: block;
  }
  .tentang p {
    margin-top: 10px;
  }
  .tentang #map {
    margin-top: 30px;
    width: 100%;
    height: 250px;
    margin-bottom: 50px;
  }
  .tentang .visi {
    margin-left: 15px;
  }
  .tentang .misi p {
    font-size: 30px;
  }
  .tentang .info {
    width: 100%;
  }
  .tentang .info .card {
    border-radius: 10px;
    -webkit-box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.37);
    box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.37);
    width: 100%;
    height: 150px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 10px;
    padding-left: 10px;
    border: none;
  }
  .tentang .info .card img {
    margin-top: 10px;
  }
  .tentang .info .card .text {
    width: auto;
    height: auto;
  }
  .tentang .info .card .text h3 {
    font-weight: bold;
    font-size: 45px;
    margin-bottom: -20px;
  }
  .tentang .info .card .text span {
    display: inline-block;
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
