<template>
<main class="about">
  <bannerTop></bannerTop>
  <navbar></navbar>
  <h2>What would you like to know?</h2>
  <section class="about__aboutContainer">
    <!-- ##### ACCORDION ##### -->
    <section class="aboutCopy">
      <aboutAccordion></aboutAccordion>
    </section>
    <!-- ##### IMAGE CONTAINER ##### -->
    <section class="aboutImageContainer">
      <imageContainer v-for="item in imageArray"
        v-bind:imageprop="item"
        v-bind:key="item.id">
      </imageContainer>
    </section>

  </section>
</main>
</template>
<script>
//import components
import bannerTop from '../components/BannerTop.vue'
import navbar from '../components/Navbar.vue'
import imageContainer from '../components/ImageContainer.vue'
import aboutAccordion from '../components/AboutAccordion.vue'

export default {
  components: { bannerTop, navbar, imageContainer, aboutAccordion },//filename of new and used component
  data() {
    return {
      imageArray: [
        { id: 0, imageSrc: "https://picsum.photos/500/300", imageAlt: "placeholder image1" },
        { id: 1, imageSrc: "https://picsum.photos/499/300", imageAlt: 'placeholder image2' },
        { id: 2, imageSrc: 'https://picsum.photos/501/300', imageAlt: 'placeholder image3', }
      ]
    }
  }
  // methods: {
  //   }
}


</script>

<style scoped lang="scss">

.header {
  background: rgb(32,32,255);
  background: linear-gradient(315deg, rgba(32,32,255,1) 0%, rgba(71,148,255,1) 100%);
}

main {
  background-color: #7fc0eb;
}

h2 {
  color: white;
  margin: 1rem;
  background-color: teal;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
}

.about{
  &__aboutContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5%;
    grid-row-gap: 3rem;
    margin: 2rem 5%;
    grid-row-gap: 2rem;
  }
}

  .aboutImageContainer {
    margin-top: .5rem;
    display: grid;
    grid-row-gap: 2rem;
  }

@media only screen and (max-width: 800px) {
  .aboutContainer {
    grid-template-columns: 1fr;
  }
  .aboutImageContainer {
    justify-content: center;
  }
}
</style>
