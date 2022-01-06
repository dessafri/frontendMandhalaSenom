<template>
  <div class="card col-lg-3">
    <div class="row">
      <div class="col col-2">
        <img :src="`https://img.icons8.com/wired/64/000000/${image}`" />
      </div>
      <div class="text col col-8">
        <h3>{{ jumlah }}</h3>
        <br />
        <span>{{ keterangan }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoButton',
  components: {},
  props: { image: String, jumlah: String, keterangan: String },
}
</script>

<style scoped>
.card {
  border: none;
  width: auto;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: auto;
  background-color: transparent;
}

.card .text {
  margin-left: 30px;
}

.card .text h3 {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: -30px;
}

.card .text span {
  display: inline-block;
  font-weight: 500;
  margin-left: 5px;
}
</style>
