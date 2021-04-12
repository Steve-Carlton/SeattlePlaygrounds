<template>
  <!-- <p>Address: {{ parkAddresses.parkAddress }}</p> -->
  <p>Address: {{ msg }}</p>
</template>

<script>



export default {
  name: 'parkAddresses',
	props: {
    msg: String,
    parkAddress: Array
	},
  // mixins: [getAddress]
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
  border: 1px solid red;
  &__title {
    font-weight: bold;
  }
}
</style>
