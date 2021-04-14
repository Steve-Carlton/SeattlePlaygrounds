<template>
  <section class="navContainer">
    <!-- NAVBAR -->
    <nav class="nav">
      <ul class="nav nav-pills">
        <li class="nav-item"><nuxt-link id="homeIcon" to="/" data-toggle="tooltip" data-placement="bottom" title="Home"><img src="/home_outline_icon.png" alt="Home">
        </nuxt-link></li>
        <!-- use router-link for link to other views -->
        <!-- "to" value is not a file path. it's a route. see index.js-->
        <li class="nav-item">
          <nuxt-link to="/map" class="nav-link">Map</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        </li>
        <li class="nav-item">
          <button class="btn btn-info nav-link" type="button" @click="toggle" data-placement="bottom" title="Click to Show/Hide">
            Spread the word!
          </button>
        </li>
      </ul>
    </nav>
      <!-- jumbotron through jumbotronArray array of objects. creates a prop to attach array items to (jumboprop). supply a key for vue. -->
    <jumbotron class="jumbotron" :class="show ? 'hide' : 'show'" v-for="item in jumbotronArray"
      v-bind:jumboProp="item"
      v-bind:key="item.id">
    </jumbotron>
  </section>
</template>

<script>
// ###### Link to Component File ######
// import filename and path
//import components. file path is relative to vue router js.
import Jumbotron from './Jumbotron.vue';
import {toggle} from "../middleware/toggle.js";

export default {
  name: 'Navbar',//name of file, component, html tag
  components: { Jumbotron },
  mixins: [toggle],

  data() {
    return {
      jumbotronArray: [//this is an array of objects
      { id: 0, jumboTagline: "Your newest little lifehack.", jumboSubTag: "Spread the Love!", jumboGraphics: "Tweet #SeattlePGs", jumboCopy: "Hey there smartypants! Want to help this project? Go on and tweet about it! ;D"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* ~~~~~NAV~~~~~ */
.nav {
  width: auto;
  display: flex;
  justify-content: left;
  align-items: center;
}

.nav-pills {
  width: 100%;
}

.nav a, .nav button {
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 10px;
  margin: 1rem;
  background: #f2f2f225;
  color: white;
  text-shadow: 2px 1px 4px #00000025;
}

#homeIcon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: none;
  background: none;
}
#homeIcon img {
  width: 100%;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 474px) {
  .nav ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .nav-item a {
    text-align: center;
    width: 95%;
    margin: .5rem;
  }
}

.navContainer {
  padding-bottom: 0;
  & .show {
    display: block;
    background: rgba(122,122,255,1);
    background: linear-gradient(343deg, rgba(102,102,255,1) 35%, rgba(153,153,255,1) 100%);
    border: none;
    border-radius: 2rem;
  }
  & .hide {
    display: none;

  }
}

.jumbotron {
 margin: 2rem;
}

.card {
  margin: 3rem auto 3rem;
  padding: 3rem;
  border-bottom: 40px solid #00c3a899;
  border-left: 40px solid #4b00c399;
  background: #f2f2f2;
  border-radius: 0 2rem 0 0;
}

.CTA {
  margin-bottom: 2rem;
  padding: 3rem 2rem 3rem 4rem;
  border-right: 22px solid rgba(100, 0, 194, 0.25);
  border-bottom: 10px solid rgba(74, 0, 194, 1);
  background: #f2f2f299;
  color: white;
  border-radius: 2rem 0 0 0;
  margin: 3rem;
  padding: 3rem;
}

.CTAcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fab {
  color: #1DA1F2;
}

.CTAcontainer .button {
  padding: .5rem;
  border-radius: 10px;
  color: white;
  background-color: #1DA1F2;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  border-bottom: 3px solid #0a6ca9;
  border-right: 2px solid #0a6ca9;
}


.jumboButton-container {
display: flex;
justify-content: flex-end;
margin-right: 4rem;
}
.jumboButton {
display: flex;
justify-content: center;
align-items: center;
color: white;
font-weight: 900;
background: #0544ff;
border-radius: 8px;
width: 8rem;
height: 4rem;
}

@media only screen and (min-width: 1250px) {
  .navContainer .show {
    display: flex;
  }

}
</style>
