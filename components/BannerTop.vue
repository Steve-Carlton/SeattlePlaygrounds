<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <img src="../assets/img/FlagIcon01v1.png" alt="Red Flag Logo">
      </div>
      <h1 class="header__container__brandTitle"><div class="firstLetter">S</div>eattle <div class="firstLetter">P</div>laygrounds</h1>
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

  @media only screen and (max-width: 832px) {
   .header__container__brandTitle {
     font-size: 2.5rem;
   }
   .header__container__logo img {
       width: 10rem;
     }
  }

  @media only screen and (max-width: 716px) {
   .header__container__brandTitle {
     font-size: 2rem;
     align-items: flex-start;

   }
   .header__container__logo img {
       width: 8rem;
     }
  }

  @media only screen and (max-width: 570px) {
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .header__container {
      flex-direction: column;
      line-height: .1rem;
    }
    .header__container__logo {
      padding: 0rem;
    }
    .header__container__logo img {
      margin: 1rem 0 0 0;
    }
    .header__container__brandTitle {
      font-size: 2.75rem;
      align-items: center;
      position: relative;
      top: 0rem;
    }
  }
</style>
