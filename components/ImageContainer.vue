<template>
    <div>
      <img :class="show ? 'blue' : 'none'" @click="toggle" :src="imageprop.imageSrc" :alt="imageprop.imageAlt">
      <p>Click above image to show/hide border</p>
    </div>
</template>

<script>
import {toggle} from "../middleware/toggle.js";

export default {
  name: 'imageContainer',//name of file, component, html tag
  props: {
    //prop is an object. it is attached to the array item in ...Array with a v-bind.
    imageprop: Object,
    imageSrc: String,
    imageAlt: String,

    //my prop name : data type
  },
  mixins: [toggle]
}


</script>

<style scoped>

.none {
  border: none;
}

.blue {
  border: 2px solid blue;
}

</style>
