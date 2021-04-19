<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <img src="../assets/img/FlagIcon01v1.png" alt="Red Flag Logo">
      </div>
      <h1 class="header__container__brandTitle"><span class="firstLetter">S</span>eattle <span class="firstLetter">P</span>laygrounds</h1>
    </div>
  </header>
</template>

<script>

export default {
  name: 'BannerTop',//name of file, component, html tag
  props: {
    //my prop name : data type
    // can also list names
    // try an array
  }
}
</script>

<style scoped lang="scss">
  .header {
    padding: 2rem;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #ffffff;

  }
  .header__container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }


  .header__container__logo {
    height: auto;
    width: auto;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  p {
    margin: auto;
  }

 .header__container__brandTitle {
    margin: auto;
    font-family: cooper-black-std, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    line-height: 2.5rem;
    position: relative;
    top: 1rem;
  }

  h1 .firstLetter {
    display: inline;
  font-size: 150%;
}
  @media only screen and (max-width: 400px) {
    .header__container{
      &__logo img{
        width: 75%;
      }
      &__brandTitle{
        font-size: 2rem;
        line-height: 2rem;
      }
    }
  }
  @media only screen and (max-width: 600px) {
       .header {
         padding-bottom: 2.5rem;
         &__container {
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           text-align: center;
         }
       }
  }
</style>
