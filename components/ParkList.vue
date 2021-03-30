<template>
  <section class="parksContainer">
    <h2 class="parks">Park List</h2>
  </section>
</template>

<script>
export default {
  name: 'parklist',
	props: {
		parks: Object
	}
}
</script>


<style lang="scss" scoped>

.parksContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10%;
}

.parks {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: 8rem;
  padding: 2rem;
  color: white;
  background: green;
  margin: 1rem, auto;
}
</style>
