<template>
  <section>
    <!-- NAVBAR -->
    <nav class="nav">
      <ul class="nav nav-pills">
        <li class="nav-item"><a id="homeIcon" href="#" data-toggle="tooltip" data-placement="bottom" title="Home">index</a></li>
        <li class="nav-item">
          <!-- use router-link for link to other views -->
          <NuxtLink to="/" class="nav-link">Landing</NuxtLink>
        </li>
        <!-- "to" value is not a file path. it's a route. see index.js-->
        <li class="nav-item">
          <NuxtLink to="/map" class="nav-link">Map</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">social</a>
        </li>
        <li class="nav-item">
          <button class="btn btn-info nav-link" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" data-placement="bottom" title="Click to Show/Hide">
            Spread the word!
          </button>
        </li>
      </ul>
    </nav>
      <!-- jumbotron through jumbotronArray array of objects. creates a prop to attach array items to (jumboprop). supply a key for vue. -->
    <jumbotron class="collapse" id="collapseExample" v-for="item in jumbotronArray"
      v-bind:jumboprop="item"
      v-bind:key="item.id">
    </jumbotron>
  </section>
</template>

<script>
// ###### Link to Component File ######
// import filename and path
//import components. file path is relative to vue router js.
import jumbotron from './Jumbotron.vue'

export default {
  name: 'navbar',//name of file, component, html tag
  components: { jumbotron },

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
nav {
  width: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 2px solid blue;
  background: white;
}

.nav-pills {
  width: 100%;
}

nav a, nav button {
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 10px;
  margin: 1rem;
}

#homeIcon {
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c3a899;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: none;
}

@media only screen and (max-width: 474px) {
  nav ul {
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

section {
  background: rgb(174,62,245);
  background: linear-gradient(315deg, rgba(174,62,245,1) 10%, rgba(32,32,255,1) 50%, rgba(71,148,255,1) 100%);
  padding-bottom: .1rem;
}

#collapseExample {
  margin: 3rem;
  padding: 3rem;
  background: #f2f2f299;
}

.card {
  margin: 3rem auto 3rem;
  padding: 3rem;
  border-bottom: 40px solid #00c3a899;
  border-left: 40px solid #4b00c399;
  background: #f2f2f2;
  border-radius: 0 2rem 0 0;
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
</style>
