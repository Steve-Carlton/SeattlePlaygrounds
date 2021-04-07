<template>
  <main>
    <bannerTop></bannerTop>
      <!-- Loops through jumbotronArray array of objects. creates a prop to attach array items to (jumboprop). supply a key for vue. -->
    <jumbotron v-for="item in jumbotronArray"
      v-bind:jumboprop="item"
      v-bind:key="item.id">
    </jumbotron>
  </main>
</template>

<script>
//import components. file path is relative to vue router js.
import bannerTop from '../components/BannerTop.vue'
import jumbotron from '../components/Jumbotron.vue'

export default {
  name: 'Landing',
  components: { bannerTop, jumbotron },
  data() {
    return {
      jumbotronArray: [//this is an array of objects
      { id: 0, jumboTagline: "Your newest little lifehack.", jumboSubTag: "Spread the Love!", jumboGraphics: "Tweet #SeattlePGs", jumboCopy: "Hey there smartypants! Want to help this project? Go on and tweet about it! ;D"},
      { id: 1, jumboTagline: "All local playground info in one place.", jumboSubTag: "You're too busy for multi-tabbing.", jumboCopy: "Let's make it easy to go play!", jumboButton: "Let's Go!" },
      { id: 2, jumboTagline: "On the go from the ground up!", jumboSubTag: "This site works across all devices. And does it well.", jumboCopy: "Seattle Playgrounds is the only playground resource thoughfully designed & fully operational across all your devices."}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
 main {
   padding: 3rem;
   background: rgb(174,62,245);
   background: linear-gradient(315deg, rgba(174,62,245,1) 10%, rgba(32,32,255,1) 50%, rgba(71,148,255,1) 100%);
 }

</style>
