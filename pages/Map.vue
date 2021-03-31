<template>
  <main>
    <navbar></navbar>
    <section class="mapContainer"><h2 class="map">Map</h2></section>
    <parklist v-if="parks"
      v-for="park of parks"
      :key="park.id"
      :park="park"
      >
      </parklist>
  </main>
</template>

<script>
//import components
import navbar from '../components/Navbar.vue'
import parklist from '../components/ParkList.vue'
import axios from 'axios'

export default {
  el: 'Map',
  components: { navbar, parklist },//tag name of new and used component
  data() {
    return {
      loading: true,
      parks: null,
      errored: false
    }
  },
  mounted () {
  axios
    .get('https://data.seattle.gov/resource/j9km-ydkc.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1')
    .then(response => (this.parks = response.data))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
  // ###### methods: {}
}
</script>

<style scoped lang="scss">

html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  border: 2px solid teal;
}

.mapContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10%;
}

.map {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 8rem;
  height: 8rem;
  color: white;
  background: blue;
  margin: 1rem, auto;
}


</style>
