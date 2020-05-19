<template>
  <div id="app">
    <Navigation class="main-nav"/>
    <router-view/>
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

.main-nav {
  margin-bottom: 10px;

  @media screen and (min-width: 800px) {
    margin-bottom: 30px;
  }
}
</style>
