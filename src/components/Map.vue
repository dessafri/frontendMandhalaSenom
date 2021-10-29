<template>
  <div class="map">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="coordinates"
      @load="onMapLoaded"
    >
      <MglMarker :coordinates="coordinates" color="blue" />
      <MglGeolocateControl position="top-right" />
      <MglNavigationControl position="top-right" />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import {
  MglMap,
  MglMarker,
  MglGeolocateControl,
  MglNavigationControl,
} from 'vue-mapbox'
export default {
  name: 'Map',
  components: {
    MglMap,
    MglMarker,
    MglGeolocateControl,
    MglNavigationControl,
  },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoiZGVzc2FmcmkiLCJhIjoiY2t1emVlNjh6MDN2NTJ2cGF6d2pveHdrcCJ9.Mw1HrmGLNs7rn0OHjIgNhA', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      coordinates: [113.4875230501, -7.167193637305],
    }
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  },
  methods: {
    async onMapLoaded(event) {
      const asyncActions = event.component.actions
      await asyncActions.zoomTo(17, {
        duration: 9000,
      })
    },
  },
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
  border-radius: 30px;
}
.map .mapboxgl-map {
  border-radius: 30px;
}
</style>
