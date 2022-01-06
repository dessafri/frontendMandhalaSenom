import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/agendamandhala',
    name: 'Agenda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Agenda.vue'),
  },
  {
    path: '/dokumentasikegiatan',
    name: 'Dokumentasi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Dokumentasi.vue'),
  },
  {
    path: '/detailcoretan/:id',
    props: true,
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DetailCoretan.vue'),
  },
  {
    path: '/coretanmandhala',
    name: 'CoretanMandhalaSenom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Coretan.vue'),
  },
  {
    path: '/pengurus',
    name: 'PengurusMandhalaSenom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Pengurus.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 70 },
      }
    } else {
      return savedPosition || { x: 0, y: 0 }
    }
  },
})

export default router
