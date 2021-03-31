<template>
  <section>
    <header class="parkListContainer">
      <h2 class="parkListTitle">Park List Title</h2>
    </header>
    <section class="cardContainer">
        <article class="card">
          <h2 class="card__title">{{ park.name }}</h2>
        </article>
    </section>
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

.parkListContainer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 1rem;
}

.parkListTitle {
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

.cardContainer {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

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
