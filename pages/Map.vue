<template>
  <main>
    <navbar></navbar>
    <section class="mapContainer"><h2 class="map">Map</h2></section>
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
  mounted () {
  axios
    .get('https://data.seattle.gov/resource/j9km-ydkc.json?$$app_token=JhK7gpKFEAw5to97NYoHSIYs1&$where=feature_desc="Play Area (ADA Compliant)" OR feature_desc="Play Area"')
    .then(response => {
 // or response.data. Can validata data at this point.
      //response is an object containing an array of objects. response.data is the array of objects. Use .sort method on response. assign it to this.parks
      //response.data points to the array.

      // ###PUTS VALUE OF NAME PROPERTY IN A NEW ARRAY. THAT NEW ARRAY IS PUT INTO ANOTHER NEW ARRAY WHERE IT IS SORTED ALPHABETICALLY.

      let parkNames = [];

      for (let i = 0; i < response.data.length; i++) {
        parkNames.push (response.data[i].name);
        // parkNamesArray.push(parkNames);
        // parkNamesArray.sort();
      }
      console.log(parkNames.sort());
//#####sort response.data without putting it in a new array.


        (this.parks = parkNames.sort())

      // sortResponse = (a, b) => {
      //   let comparison = 0;
      //   let aSort = a.name;
      //   let bSort = b.name;
      //
      //   if (aSort > bSort) {
      //     comparison = 1;
      //   } else if (aSort < bSort) {
      //     comparison = -1;
      //   } else {
      //     comparison = 0;
      //   }
      //   return comparison;
      // }
      // console.log(response.data.sort(sortResponse)); //sortResponse is not defined at eval
      // console.log(response.data[0].name); // this returns park name of array idex
      // console.log(response.data); // this returns all API data
      // (this.parks = response.data) //previous code


    })

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
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}


</style>
