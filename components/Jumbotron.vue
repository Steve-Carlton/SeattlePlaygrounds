<template>
  <section>
    <h2>{{jumboprop.jumboTagline}}</h2>
    <h3 class="lead">{{jumboprop.jumboSubTag}}</h3>
    <!-- if jumboGraphics array item present, render on page -->
    <div v-if="jumboprop.jumboGraphics" class="CTAcontainer">
      <a href="https://www.twitter.com/" target="blank"><i class="fab fa-twitter fa-5x twitterCTA"></i></a>
      <a class="button" href="https://www.twitter.com" target="_blank">{{jumboprop.jumboGraphics}}</a>
    </div>
    <p>{{ jumboprop.jumboCopy }}</p>
    <!-- if jumboButton array item present, render on page -->
    <!-- use router-link for link to other views -->
    <div class="jumboButton-container"><router-link class="jumboButton" v-if="jumboprop.jumboButton" to="/map">{{ jumboprop.jumboButton }}</router-link></div>
  </section>
</template>

<script>

export default {
  name: 'jumbotron',//name of file, component, html tag
  props: {
    //jumboprop is an object. it is attached to the array item in jumbotronArray with a v-bind.
    jumboprop: Object,
    //my prop name : data type
  }
}
</script>

<style scoped lang="scss">
  section {
    margin-bottom: 2rem;
    padding: 3rem 2rem 3rem 4rem;
    border-right: 22px solid rgba(100, 0, 194, 0.25);
    border-bottom: 10px solid rgba(74, 0, 194, 1);
    background: #f2f2f299;
    color: white;
    border-radius: 2rem 0 0 0;
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


  @media only screen and (max-width: 330px) {
    section {
      margin: 1rem;
      padding: 1.5rem;
      border-bottom: 30px solid #00c3a899;
      border-left: 30px solid #4b00c399;
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1250px) {
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    section h2, section h3 {
      line-height: 2.5rem;
    }
    .jumboButton-container {
      margin: auto;
      justify-content: center;
    }
  }
</style>
