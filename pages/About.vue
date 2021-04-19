<template>
<main class="about">
  <banner-top></banner-top>
  <navbar></navbar>
  <h2>About Seattle Playgrounds</h2>
  <section class="about__aboutContainer">
    <!-- ##### ACCORDION ##### -->
    <section class="aboutCopy">
      <about-accordion></about-accordion>
    </section>
    <!-- ##### IMAGE CONTAINER ##### -->
    <!-- <section class="aboutImageContainer">
      <image-container v-for="item in imageArray"
        v-bind:imageProp="item"
        v-bind:key="item.id">
      </image-container> -->
    </section>

  </section>
</main>
</template>
<script>
//import components
import BannerTop from '../components/BannerTop.vue'
import Navbar from '../components/Navbar.vue'
// import image-container from '../components/ImageContainer.vue'
import AboutAccordion from '../components/AboutAccordion.vue'

export default {
  components: { BannerTop, Navbar, AboutAccordion },//filename of new and used component
  data() {
    return {
      // imageArray: [
      //   { id: 0, imageSrc: "https://picsum.photos/500/300", imageAlt: "placeholder image1" },
      //   { id: 1, imageSrc: "https://picsum.photos/499/300", imageAlt: 'placeholder image2' },
      //   { id: 2, imageSrc: 'https://picsum.photos/501/300', imageAlt: 'placeholder image3', }
      // ]
    }
  },
  head() {
     return {
       title: "Seattle Playgrounds | About",
       meta: [
         // hid is used as unique identifier. Do not use `vmid` for it as it will not work
         {
           hid: 'About',
           name: 'About Seattle Playgrounds',
           content: 'About the Seattle Playgrounds project.'
         }
       ]
     }
   }

}


</script>

<style scoped lang="scss">


main {
  background: rgba(32,32,255,1);
  background: linear-gradient(315deg, rgba(174,62,245,1) 10%, rgba(32,32,255,1) 50%, rgba(71,148,255,1) 100%);
  min-height: 100vh;
}

h2 {
  color: white;
  margin: 1rem;
  background-color: rgba(0, 195, 168, 0.6);
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
}

.about{
  &__aboutContainer {
    margin: 2rem 5% 0rem;
    padding-bottom: 10rem;
  }
}
  .aboutImageContainer {
    margin-top: .5rem;
    display: grid;
    grid-row-gap: 2rem;
  }

@media only screen and (max-width: 474px) {
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
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
