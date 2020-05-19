<template>
  <div id="app">
    <div class="nav">
      <img class="logo" :src="require('./assets/yokai-logo.png')">
      <div class="links">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/listing">Listing</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

* {
    box-sizing: border-box;
  }
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .logo {
    height: 50px;
    margin-bottom: 30px;

    @media screen and (min-width: 501px) {
      height: 75px;
    }
  }

  .link {
    position: relative;
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;
    color: #181818;
    transition: border 0.3s;

    &:hover {
      border-bottom: 2px #181818 solid;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
    &:not(:first-child) {
      margin-left: 20px;
    }

    &:not(:last-child):after {
      content: "";
      position: absolute;
      height: 22px;
      width: 1px;
      background: grey;
      right: -20px;
    }
  }


  a.router-link-exact-active {
    border-bottom: 2px #d60000 solid;
    font-weight: bold;
    color: #d60000;
  }
}

</style>
