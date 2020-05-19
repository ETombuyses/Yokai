<template>
  <div id="app">
    <Navigation class="main-nav"/>
    <div class="main" 
    :class="{sakana: $route.path === `/`}"
    >
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
 
<style lang="scss">

@import './assets/styles/style.scss';

nav.main-nav {
  margin-bottom: 10px;

  @media screen and (min-width: 800px) {
    margin-bottom: 20px;
  }
}

.main {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  &.sakana {
    background: linear-gradient(rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.671)), url("./assets/images/sakana.png") no-repeat center 350px;
    object-fit: cover;
  }

  @media screen and (min-width: 500px) {
    padding: 30px 40px;
  }
}
</style>
