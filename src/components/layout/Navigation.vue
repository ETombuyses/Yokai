<template>
  <nav class="nav">
    <img class="logo" :src="require('../../assets/images/yokai-logo.png')">
    <ul class="links">
      <li class="link"><router-link to="/">Accueil</router-link></li>
      <li class="link"><router-link to="/listing">Yokais</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

@import '../../assets/styles/style.scss';

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.logo {
  height: 35px;
  width: auto;

  @media screen and (min-width: 501px) {
    height: 45px;
  }
}

.links {
  display: flex;
  margin-top: 25px; 
}

.link {
  position: relative;

  &:not(:last-child) {
    margin-right: 41px;
  }

  &:not(:last-child):after {
    content: "";
    position: absolute;
    height: 22px;
    width: 1px;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    background: $grey;
  }

  &:hover a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    border-bottom: 2px $black solid;
  }

  a {
    font-size: 18px;

    @media screen and (min-width: 600px) {
      font-size: 20px;
    }
  }

  a.router-link-exact-active {
    color: $red;
  }

  &:hover a.router-link-exact-active::before {
    display: none;
  }
}
</style>