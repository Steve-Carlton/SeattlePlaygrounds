<template>
  <section>
    <article class="tiles">
      <h5 class="tiles__title">{{ park.name }}</h5>
      <h6>Park Hours: {{ park.hours }} </h6>
      <!-- <p>Coordinates: {{ park.ypos }}, {{ park.xpos }}</p> -->
      <p>Address: {{park.location_1}}</p>
      <p>{{ park.feature_desc }}</p>

    </article>
  </section>
</template>

<script>


export default {
  name: 'parklist',
	props: {
		park: Object
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
