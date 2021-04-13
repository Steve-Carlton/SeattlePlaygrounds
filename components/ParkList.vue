<template>
  <section>
    <article class="tiles">
      <h5 class="tiles__title">{{ park.name }}</h5>
      <h6>Park Hours: {{ park.hours }} </h6>
      <!-- <p>Coordinates: {{ park.ypos }}, {{ park.xpos }}</p> -->
      <p id="streetAddress">Address: {{park.location_1}}</p>
      <!-- <p id="parkAddress">Address: {{ computedStreetAddress }}</p> -->
      <!-- <parkAddresses v-for="item in posts"
        v-bind:streetAddress="item.text"
  v-bind:key="item.id">

      </parkAddresses> -->
      <p>{{ park.feature_desc }}</p>

    </article>
  </section>
</template>

<script>
import {getAddress} from "../middleware/getAddress.js"
// import parkAddresses from "./ParkAddresses.vue"

export default {
  name: 'parklist',
  components: { },
	props: {
		park: Object,
	},
  data: function () {
    return {
    posts: [
      { id: 0, text: '123 Banana St' },
      { id: 1, text: '456 Main St.' },
      { id: 2, text: '789 3rd St.' }
    ]
    }
  },
  computed: {
   computedStreetAddress() {
    let input = '{"latitude": "-122.407312", "longitude": "47.578497", "human_address": "{\"address\": \"5817 SW Lander St\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"}'; //this needs to be the data from response.data.location_1. doesn't recognize response.
    let comp1 = input.replace(/"/g,"");
    let comp2 = comp1.split(":");
    let comp3 = comp2[4].split(",");
    let comp4 = comp3[0].replace(/'/g,"");
    let comp5 = comp4.trim();
    let comp6 = comp5.replace(/"/g, "");
    // console.log(comp6);
    return comp6;
  }
  }
}

</script>


<style lang="scss" scoped>

.tiles {
	margin: 1rem;
  border-radius: 1rem;
  background: rgba(200, 200, 200, .35);
	padding: 1.5rem;
	max-width: 200px;
  color: #fff;
  &__title {
    font-weight: bold;
  }
}
</style>
