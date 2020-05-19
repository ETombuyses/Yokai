<template>
  <div id="app">
    <div id="nav">
      <img class="logo" src="./assets/images/logo.png">
      <div>
        <router-link class="" to="/">Home</router-link>
        <router-link to="/listing">Listing</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  margin: 20px;
  /* padding-right: 50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 75px;
  }

  a {
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;
    color: #181818;
    transition: border 0.3s;

    &:hover {
      border-bottom: 2px #181818 solid;
    }
  }

  a.router-link-exact-active {
    border-bottom: 2px #d60000 solid;
    font-weight: bold;
    color: #d60000;
  }
}

</style>
