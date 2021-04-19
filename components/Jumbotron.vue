<template>
  <section class="jumbotron">
    <h2>{{jumboProp.jumboTagline}}</h2>
    <h3 class="lead">{{jumboProp.jumboSubTag}}</h3>
    <!-- if jumboGraphics array item present, render on page -->
    <div v-if="jumboProp.jumboGraphics" class="CTAcontainer">
      <a href="https://www.twitter.com/" target="blank"><img class="twitterCTA" src="../assets/img/twitter-bird.png" alt="www.twitter.com"></a>
      <a class="button" href="https://www.twitter.com/" target="_blank">{{jumboProp.jumboGraphics}}</a>
    </div>
    <p>{{ jumboProp.jumboCopy }}</p>
    <!-- if jumboButton array item present, render on page -->
    <!-- use router-link for link to other views -->
    <div class="jumboButton-container"><nuxt-link class="jumboButton" v-if="jumboProp.jumboButton" to="/map">{{ jumboProp.jumboButton }}</nuxt-link></div>
  </section>
</template>

<script>

export default {
  name: 'Jumbotron',//name of file, component, html tag
  props: {
    //jumboprop is an object. it is attached to the array item in jumbotronArray with a v-bind.
    jumboProp: Object,
    //my prop name : data type
  }
}
</script>

<style scoped lang="scss">
  .jumbotron {
    margin-bottom: 2rem;
    padding: 3rem 2rem 3rem 4rem;
    background: #f2f2f250;
    color: white;
    border-radius: 2rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 900;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .CTAcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .twitterCTA {
    color: #1DA1F2;
    margin-bottom: .75rem;
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
  font-size: 1rem;
  font-weight: 900;
  background: #0544ff;
  border-radius: .5rem;
  width: 8rem;
  height: 4rem;
  transition: all .25s cubic-bezier(.67,-.51,.42,1.43);

  &:hover {
    transform: scale(1.2);
    font-size: 125%;
    cursor: pointer;
    text-decoration: none;
  }
}

@media only screen and (max-width: 450px) {
  .jumbotron {
    padding: 2.5rem;
  }

  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
  .jumboButton-container {
    justify-content: center;
    margin: auto;
  }

}

  @media only screen and (max-width: 330px) {
    .jumbotron {
      margin: 1rem;
      padding: 1.5rem;
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1250px) {
    .jumbotron {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .jumbotron h2, .jumbotron h3 {
      line-height: 2.5rem;
    }
    .jumboButton-container {
      margin: auto;
      justify-content: center;
    }
  }
</style>
