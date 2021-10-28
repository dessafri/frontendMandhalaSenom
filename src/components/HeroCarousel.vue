<template>
  <carousel :items="1" :loop="true" :autoplay="true" :dots="false" :nav="false">
    <img src="@/assets/jumb-1.jpg" />
    <img src="@/assets/jumb-2.jpg" />
    <img src="@/assets/jumb-3.jpg" />
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'HeroCarousel',
  components: { carousel },
}
</script>

<style scoped>
img {
  width: 50%;
  height: 500px;
  border-top-left-radius: 100px;
}
</style>
