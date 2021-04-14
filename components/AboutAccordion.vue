<template>
  <div>
    <!-- ACCORDION -->
    <div v-for="accordion in accordionArray" :key="accordion.title">
      <base-accordion>
        <template v-slot:title>{{ accordion.title }}</template>
        <template v-slot:content>
          <img :src="accordion.image" class='img-fluid' alt='Responsive image'>
          <p>{{ accordion.copy }} <a href="https://www.seattle.gov/parks" target="_blank">{{ accordion.link }}</a> </p>
          <h6>{{ accordion.legal }} </h6>
        </template>
      </base-accordion>
    </div>
  </div>
</template>

<script>
import BaseAccordion from "./BaseAccordion.vue"

// ##### ACCORDION IMAGES #####
import image1 from "../assets/img/pi-cuatropuntocero-DIhUtRCBsWA-unsplash.jpg"
import image2 from "../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg"
import image3 from "../assets/img/sheri-hooley-ME5X18xabmc-unsplash.jpg"

export default {
  components: { BaseAccordion },
  name: 'AboutAccordion',//name of file, component, html tag
  props: {
    accordion: String
  },
data() {
  return {
      accordionArray: [
        { id: 0, title: 'About this project', image: image1, copy: "Undertaken with the belief that equal and convenient access to public facilities is an integral component of the civic trust, Seattle Playgrounds was born in the shadow of the 2020 pandemic to improve the quality of playground information for parents, childcare providers, and the general public. Thanks for stopping by! :D", legal: "This project is maintained by an independent individual of Seattle for the benefit of the civic good and is in no way affiliated with any governmental agency."},
        { id: 1, title: "Resources", image: image2, copy: "For official park info from the city of Seattle please visit: ", link: "www.seattle.gov/parks"},
        { id: 2, title: "What's the latest?", image: image3, copy: "Core functionality is currently under development. Stay tuned for addtional features! @SeattlePGs"}
      ]
    }
  },
  methods: {
    getImg: function() {
      console.log("getImg function has run")
      return '../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg';
    }
  }
}
</script>
<style scoped lang="scss">

.img-fluid {
  border: 2px solid none;
  max-width: 75%;
  min-width: 5rem;
  height: auto;
}

img {
  border-radius: 2rem;
}

p {
  font-size: 1.25rem;
  margin: .5rem;
  text-align: left;
}

h6 {
  font-size: .75rem;
  margin: .5rem;
  text-align: left;
}

a {
  color: white;
}

</style>
