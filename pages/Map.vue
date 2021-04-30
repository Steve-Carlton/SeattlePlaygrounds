<template>
  <main>
    <banner-top></banner-top>
    <navbar></navbar>
    <playground-map></playground-map>
    <section class="parkList">
      <header class="parkList__header">Park List</header>
      <article class="cardContainer">
        <park-list v-if="parks" v-for="park of parks" :key="park.id" :park="park"></park-list>
      </article>
    </section>
  </main>
</template>

<script>
//import components
import BannerTop from '../components/BannerTop.vue'
import Navbar from '../components/Navbar.vue'
import PlaygroundMap from '../components/PlaygroundMap.vue'
import ParkList from '../components/ParkList.vue'
import axios from 'axios'

export default {
  name: 'Map',
  components: { BannerTop, Navbar, PlaygroundMap, ParkList },//tag name of new and used component

  data() {
    return {
      loading: true,
      parks: null,
      errored: false,
    }
  },
  //####GET AND SORT API DATA####
  mounted () {
  axios
    .get('https://data.seattle.gov/resource/2cer-njie.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1&$where=feature_desc="Play Area (ADA Compliant)" OR feature_desc="Play Area"')

    //Modified Dataset
    // .get('https://data.seattle.gov/resource/sfg9-akgs.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1&$where=feature_desc="Play Area (ADA Compliant)" OR feature_desc="Play Area"')

    .then(response => {
     // or response.data. Can validate data at this point.
     //response is an object containing an array of objects. response.data points to the array of objects. Use .sort method on response. assign it to this.parks

    //****CUSTOM MAP ICON****
     let flagMapIcon = L.icon({
       iconUrl:'/flagMapIcon.png', //images must be in static folder.
       shadowUrl: '/flagMapIconShadow.png',
       iconSize: [33, 49],
       shadowSize: [32, 20],
       iconAnchor: [2, 48],
       shadowAnchor: [0, 20],
       popupAnchor: [2, -40]
     });

      //***SORT PARKS***Assigns response.data to sortParks. Applies array method .sort(), which takes the function with two parameters as written below.
      let sortParks = response.data.sort((p1, p2) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);

      (this.parks = sortParks)
      // console.log(sortParks);

    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  },
  head() {
     return {
       title: "Seattle Playgrounds | Map",
       meta: [
         // hid is used as unique identifier. Do not use `vmid` for it as it will not work
         {
           hid: 'Map',
           name: 'Seattle Playgrounds map',
           content: 'Map that shows locations for playgrounds in Seattle'
         }
       ]
     }
   }

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
  border: .5rem solid lightsteelblue;
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
  position: relative;
}


</style>
