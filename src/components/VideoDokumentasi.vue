<template>
  <div class="card col-12">
    <div class="card-body">
      <iframe
        :src="`https://www.youtube.com/embed/${idVideo}`"
        frameborder="0"
        width="650"
        height="415"
        allowfullscreen
      ></iframe>
      <h5 class="card-title text-center mt-2">
        {{ title }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideoDokumentasi',
  props: { title: String, idVideo: String },
}
</script>

<style scoped>
.card {
  height: 500px !important;
}
@media (max-width: 768px) {
  .card {
    height: 350px !important;
  }
  iframe {
    width: 450px;
    height: 250px;
  }
}
</style>
