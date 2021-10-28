<template>
  <div class="home">
    <Header />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Jumbotron />
    <SectionTentang />
    <SectionAgenda />
    <SectionMentor />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import HeroCarousel from '@/components/HeroCarousel.vue'
import Header from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import SectionTentang from '../components/SectionTentang.vue'
import SectionAgenda from '../components/SectionAgenda.vue'
import SectionMentor from '../components/SectionMentor.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // HeroCarousel,
    Header,
    Jumbotron,
    SectionTentang,
    SectionAgenda,
    SectionMentor,
  },
}
</script>
Jumbotron

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap');
</style>
