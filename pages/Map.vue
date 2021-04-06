<template>
  <main>
    <navbar></navbar>
    <div id="mapid"></div>

    <section class="parkList">
      <header class="parkList header">Park List</header>
      <article class="cardContainer">
        <parklist v-if="parks"
          v-for="park of parks"
          :key="park.id"
          :park="park"
          >
          </parklist>
      </article>

    </section>
  </main>
</template>

<script>
//import components
import navbar from '../components/Navbar.vue'
import parklist from '../components/ParkList.vue'
import axios from 'axios'

export default {
  name: 'Map',
  components: { navbar, parklist },//tag name of new and used component
  data() {
    return {
      loading: true,
      parks: null,
      errored: false
    }
  },
  //####GET AND SORT API DATA####
  mounted () {
  axios
    .get('https://data.seattle.gov/resource/j9km-ydkc.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1&$where=feature_desc="Play Area (ADA Compliant)" OR feature_desc="Play Area"')
    .then(response => {
     // or response.data. Can validate data at this point.
     //response is an object containing an array of objects. response.data points to the array of objects. Use .sort method on response. assign it to this.parks
      // ###Assigns response.data to sortParks. Applies array method .sort(), which takes the function with two parameters as written below..
      let sortParks = response.data.sort((p1, p2) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);

      (this.parks = sortParks)
      //####----LEAFLET.JS MAP MARKERS----####
      for (let i = 0; i < sortParks.length; i++) {
        let marker = L.marker([sortParks[i].ypos, sortParks[i].xpos]).addTo(mymap);
        console.log(sortParks[i].xpos);
      }


    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)

//####----LEAFLET.JS MAP----####
    var mymap = L.map('mapid').setView([47.62051, -122.34930], 12.5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RjYXJsdG9uIiwiYSI6ImNrbjY5dHoyaTAxaXYycG8wZWF2azJxN2QifQ.zOTxW9CuYgd41kecUhOtVA'
    }).addTo(mymap);

//####----LEAFLET.JS MAP MARKERS----####
// var marker2 = L.marker([47.57849726, -122.4073123]).addTo(mymap);
// var marker3 = L.marker([47.589165, -122.30566 ]).addTo(mymap);
// console.log(sortParks);

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
  color: black;
  border: 1px solid black;
  background: none;
  margin: 1rem, auto;
}

#mapid {
  height: 50vh;
  margin: 2rem;
  padding: 0 2rem;
  border: 1.5rem solid lightsteelblue;
  border-radius: 8px;
}

header {
  color: white;
  margin: 1rem;
  font-size: 2rem;
  background-color: teal;
  padding: .5rem;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.cardContainer {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}


</style>
