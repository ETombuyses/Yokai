<template>
  <footer class="footer">
    <img
      class="logo"
      :src="require('../../assets/images/yokai-logo.png')"
      alt="logo yokai"
    />
    <address class="credentials">
      Crée avec ❤️ par Emilie Tombuyses, Cassandra Doux and Tristan Lemire
    </address>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../assets/styles/style.scss";

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $pink;
  padding: 15px;
}

.logo {
  height: 25px;
  width: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 501px) {
    height: 35px;
  }
}

.credentials {
  font-size: 14px;
  color: $grey;
}
</style>
