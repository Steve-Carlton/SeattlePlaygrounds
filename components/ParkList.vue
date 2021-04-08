<template>
  <section>
    <article class="card">
      <h5 class="card__title">{{ park.name }}</h5>
      <h6>Park Hours: {{ park.hours }} </h6>
      <p>Coordinates: {{ park.ypos }}, {{ park.xpos }}</p>
      <!-- <p>Address: {{park.location_1.human_address}}</p> -->
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

.card {
	margin: 1rem;
	border: 1px solid #000;
	padding: 1.5rem;
	max-width: 200px;
  &.__title {
    color: black;
  }
}
</style>
