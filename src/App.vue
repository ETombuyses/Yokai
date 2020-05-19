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
    <div class="footer">
      <img class="logo" :src="require('./assets/yokai-logo.png')">
      <div class="links">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/listing">Listing</router-link>
      </div>
      <p>Create with ❤️ by Emilie, Cassandra and Tristan</p>
    </div>
  </div>
</template>

<style lang="scss">

* {
    box-sizing: border-box;
  }

html, body {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
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

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(217, 4, 41, 0.1);
  margin: 0;
  padding: 16px;


  .logo {
    height: 40px;
    margin-bottom: 30px;
  }

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: rgba(43, 45, 66, 0.5);
  }

  .link {
    position: relative;
    text-decoration: none;
    font-weight: bold;
    color: #181818;
    transition: border 0.3s;
    font-size: 12px;
    margin-bottom: 21px;

    &:hover {
      border-bottom: 2px #181818 solid;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
    &:not(:first-child) {
      margin-left: 8px;
    }
  }


  a.router-link-exact-active {
    border-bottom: 2px #d60000 solid;
    font-weight: bold;
    color: #d60000;
  }
}

</style>
