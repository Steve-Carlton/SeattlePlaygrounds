<template>
  <section>
    <article class="card">
      <h5 class="card__title">{{ park.name }}</h5>
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
