<template>
  <section>
    <article class="tiles">
      <h5 class="tiles__title">{{ park.name }}</h5>
      <p id="streetAddress">Address: {{streetAddress(park.location_1)}}</p>
      <h6>Park Hours: {{ park.hours }} </h6>
      <p>{{ park.feature_desc }}</p>
    </article>
  </section>
</template>

<script>

export default {
  name: 'ParkList',
  components: { },
	props: {
		park: Object,
	},
  data: function () {
    return {
    }
  },
  methods: {
   streetAddress(x) {
    if (!x) {
      return ""
    }
    let obj=JSON.parse(x.human_address);
    return obj.address
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
  &__title {
    font-weight: bold;
  }
}

article:hover {
  box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 0.5);
}
</style>
