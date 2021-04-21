<template>
  <main>
    <banner-top></banner-top>
      <!-- Loops through jumbotronArray array of objects. creates a prop to attach array items to (jumboprop). supply a key for vue. -->
    <jumbotron v-for="item in jumbotronArray"
      v-bind:jumboProp="item"
      v-bind:key="item.id">
    </jumbotron>
  </main>
</template>

<script>
//import components. file path is relative to vue router js.
import BannerTop from '../components/BannerTop.vue'
import Jumbotron from '../components/Jumbotron.vue'

export default {
  name: 'index',
  components: { BannerTop, Jumbotron },
  data() {
    return {
      jumbotronArray: [//this is an array of objects
      { id: 0, jumboTagline: "Your newest little lifehack.", jumboSubTag: "Spread the Word!", jumboGraphics: "Tweet #SeattlePGs", jumboCopy: "Hey there smartypants! Want to help this project? Go on and tweet about it! ;D"},
      { id: 1, jumboTagline: "Seattle's local playground info all in one place.", jumboSubTag: "API powered data at your fingertips courtesy of", jumboLink: "Seattle Open Data Portal.", jumboCopy: "Let's make it easy to go play!", jumboButton: "Let's Go!" },
      { id: 2, jumboTagline: "On the go from the ground up!", jumboSubTag: "This site works across all devices. And does it well!", jumboCopy: "Seattle Playgrounds is thoughfully designed & fully operational across all your devices."}
      ]
    }

  },
  head() {
     return {
       title: "Seattle Playgrounds | Welcome!",
       meta: [
         // hid is used as unique identifier. Do not use `vmid` for it as it will not work
         {
           hid: 'Seattle Playgrounds',
           name: 'Seattle Playgrounds',
           content: 'Welcome to Seattle Playgrounds. Discover available playground and location information.'
         }
       ]
     }
   }
}
</script>

<style scoped lang="scss">
 main {
   padding: 0 3rem 3rem;
   background: rgb(174,62,245);
   background: linear-gradient(315deg, rgba(174,62,245,1) 10%, rgba(32,32,255,1) 50%, rgba(71,148,255,1) 100%);
 }

</style>
