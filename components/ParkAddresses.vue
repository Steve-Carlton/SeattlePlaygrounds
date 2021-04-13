<template>
  <!-- <p>Address: {{ parkAddresses.parkAddress }}</p> -->
  <p>Address: {{ streetAddress.parkAddress }}</p>
</template>

<script>



export default {
  name: 'parkAddresses',
	props: {
    // streetAddress: String,
    // parkAddress: Array
	},
data() {
  return {
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
  border: 1px solid red;
  &__title {
    font-weight: bold;
  }
}
</style>
