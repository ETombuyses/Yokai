<template>
  <div id="app">
    <div class="nav">
      <img class="logo" :src="require('./assets/images/yokai-logo.png')">
      <div class="links">
        <router-link class="link" to="/">Accueil</router-link>
        <router-link class="link" to="/listing">Yokais</router-link>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <img class="logo" :src="require('./assets/images/yokai-logo.png')">
      <div class="links">
        <router-link class="link" to="/">Accueil</router-link>
        <router-link class="link" to="/listing">Yokais</router-link>
      </div>
      <p>Crée avec ❤️ par Emilie, Cassandra and Tristan</p>
    </div>
  </div>
</template>

<style lang="scss">

 @import './assets/styles/style.scss';


* {
  box-sizing: border-box;
}
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
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
    color: $black;
    transition: border 0.3s;

    &:hover {
      border-bottom: 2px $black solid;
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
      background: $grey;
      right: -20px;
    }
  }


  a.router-link-exact-active {
    border-bottom: 2px  solid;
    font-weight: bold;
    color: $red;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $pink;
  margin: 0;
  padding: 16px;

  @media screen and (max-width: 501px) {
    margin-top: 60px;
  }


  .logo {
    height: 40px;
    margin-bottom: 30px;
  }

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: $grey;
  }

  .link {
    position: relative;
    text-decoration: none;
    font-weight: bold;
    color: $black;
    transition: border 0.3s;
    font-size: 12px;
    margin-bottom: 21px;

    &:hover {
      border-bottom: 2px $black solid;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
    &:not(:first-child) {
      margin-left: 8px;
    }
  }


  a.router-link-exact-active {
    border-bottom: 2px $red solid;
    font-weight: bold;
    color: $red;
  }
}

</style>
