<template>
  <section>
    <article class="tiles">
      <h5 class="tiles__title">{{ park.name }}</h5>
      <h6>Park Hours: {{ park.hours }} </h6>
      <!-- <p>Coordinates: {{ park.ypos }}, {{ park.xpos }}</p> -->
      <!-- <p id="parkAddress">Address: {{park.location_1}}</p> -->
      <parkAddresses
        :msg="msg"
        :key="msg.id"
      >

      </parkAddresses>
      <p>{{ park.feature_desc }}</p>

    </article>
  </section>
</template>

<script>
import {getAddress} from "../middleware/getAddress.js"
import parkAddresses from "../components/ParkAddresses.vue"

export default {
  name: 'parklist',
  components: { parkAddresses },
	props: {
		park: Object,
	},
  data() {
    return {
      msg: "howdy"
    }
  },
  mixins: [getAddress]
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
