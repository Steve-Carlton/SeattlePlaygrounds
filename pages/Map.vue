<template>
  <main>
    <bannerTop></bannerTop>
    <navbar></navbar>
    <div id="mapid"></div>
    <section class="parkList">
      <header class="parkList__header">Park List</header>
      <article class="cardContainer">
        <parklist v-if="parks" v-for="park of parks" :key="park.id" :park="park">
        </parklist>
      </article>
    </section>
  </main>
</template>

<script>
//import components
import bannerTop from '../components/BannerTop.vue'
import navbar from '../components/Navbar.vue'
import parklist from '../components/ParkList.vue'
import axios from 'axios'

export default {
  name: 'Map',
  components: { bannerTop, navbar, parklist },//tag name of new and used component
  data() {
    return {
      loading: true,
      parks: null,
      errored: false,
      parkUrls: [
        { id: 0, }
      ]
    }
  },
  //####GET AND SORT API DATA####
  mounted () {
  axios
    .get('https://data.seattle.gov/resource/2cer-njie.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1&$where=feature_desc="Play Area (ADA Compliant)" OR feature_desc="Play Area"')

    //Edited Dataset
    // .get('https://data.seattle.gov/resource/sfg9-akgs.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1&$where=feature_desc="Play Area (ADA Compliant)" OR feature_desc="Play Area"')

    .then(response => {
     // or response.data. Can validate data at this point.
     //response is an object containing an array of objects. response.data points to the array of objects. Use .sort method on response. assign it to this.parks

    //****CUSTOM MAP ICON****
     let flagMapIcon = L.icon({
       iconUrl:'/flagMapIcon.png', //works now that images were moved into static folder.
       shadowUrl: '/flagMapIconShadow.png',
       iconSize: [33, 49],
       shadowSize: [32, 20],
       iconAnchor: [2, 48],
       shadowAnchor: [0, 20],
       popupAnchor: [2, -40]
     });

      // ###Assigns response.data to sortParks. Applies array method .sort(), which takes the function with two parameters as written below..
      let sortParks = response.data.sort((p1, p2) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);

      (this.parks = sortParks)
      console.log(sortParks);

      //####----LEAFLET.JS MAP MARKERS----####
      //#### Screens out undefined data in the API, then iterates map markers####
      for (let i = 0; i < sortParks.length; i++) {
        if (sortParks[i].xpos === undefined) {
          continue; // Jumps to expression: i++
      } else {
        let marker = L.marker([sortParks[i].ypos, sortParks[i].xpos], {icon: flagMapIcon}).addTo(mymap);

        marker.bindPopup(sortParks[i].name);
        }
      }
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)

//####----LEAFLET.JS MAP----####
    var mymap = L.map('mapid').setView([47.62051, -122.34930], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RjYXJsdG9uIiwiYSI6ImNrbjY5dHoyaTAxaXYycG8wZWF2azJxN2QifQ.zOTxW9CuYgd41kecUhOtVA'
    }).addTo(mymap);

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
  background: rgba(32,32,255,1);
  background: linear-gradient(315deg, rgba(174,62,245,1) 10%, rgba(32,32,255,1) 50%, rgba(71,148,255,1) 100%);
}

// .header {
//   background: rgb(32,32,255);
//   background: linear-gradient( rgba(32,32,255,1) 0%, rgba(71,148,255,1) 100%);
// }

.mapContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10%;
}


#mapid {
  height: 50vh;
  margin: 2.5rem;
  padding: 0 2rem;
  border: 1.5rem solid lightsteelblue;
  border-radius: 8px;
}

.parkList__header {
  color: white;
  margin: 1rem;
  font-size: 2rem;
  background-color: rgba(0,195,168,0.6);
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
