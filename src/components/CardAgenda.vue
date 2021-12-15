<template>
  <div class="card" style="width: 22rem; margin-right: 20px;">
    <img :src="image" class="card-img-top" alt="Agenda" />
    <div class="card-body">
      <h5 class="card-title col-col-12 text-start">
        <a href="">{{ title }}</a>
      </h5>
      <p id="date" class="col-col-12 text-start">{{ convertDate(waktu) }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('id')
export default {
  name: 'CardAgenda',
  props: { title: String, keterangan: String, waktu: String, image: String },
  methods: {
    convertDate(waktu) {
      return moment(waktu).format('dddd , DD MMMM YYYY')
    },
  },
}
</script>

<style scoped>
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
</style>
