<template>
  <div id="app">
    <Nuxt/>
  </div>
</template>

<script>
// ##### COMPONENTS #####

// ##### VUE.js #####
export default {
  el: '#app',
  data() {
    return {
    }
  }
}

</script>
<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  background-color: #f7f7f7;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.aboutImageContainer {
  display: grid;
  grid-row-gap: 2rem;

  &img {
    max-width: 100%;
    height: auto;
  }
}

</style>
