<template>
  <div class="jumbo">
    <img :src="image" alt="" />
    <div class="title">
      <h2>{{ title }}</h2>
      <span>{{ convertDate(waktu) }}</span>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
moment.locale('id')
export default {
  name: 'JumbotronAgenda',
  props: { title: String, waktu: String, image: String },
  methods: {
    convertDate(waktu) {
      return moment(waktu).format('dddd , DD MMMM YYYY')
    },
  },
}
</script>
<style scoped>
img {
  width: 100%;
  height: 464px;
}

.title {
  position: absolute;
  z-index: 99;
  top: 20px;
  left: 50px;
  font-family: 'Lato', sans-serif;
}
.title h2 {
  font-weight: bold;
  font-size: 36px;
  color: white;
  text-align: start;
}
.title span {
  display: block;
  text-align: left !important;
  font-weight: 500;
  font-size: 14px;
  color: white !important;
}
</style>
