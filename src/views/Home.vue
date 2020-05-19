<template>
  <div class="home">
    <img src="../assets/images/home.jpg">
    <Header width="60%" title="Qu’est ce qu’un Yokai ?" textBackground="日本の妖怪" paragraphe="Monstre, créature, esprit, fantôme, objet, démon où tout autre apparition étrange souvent malfaisant ou simplement malicieux du folklore japonais qui incarne les obsessions, les vices, les craintes, les mal-être, les blessures, les rancoeurs et tout état émotionnel compliqué des humains. Ils représentent également des phénomènes naturels, des objets créés par les hommes ou des éléments naturels inanimés (rocher…)."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
      title: 'hello'
    }
  }
}
</script>

<style lang="scss" scoped>

  * {
    box-sizing: border-box;
  }

  .home {
    width: 100%;
    padding-left: 40px;
    padding-right: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
  }

  img {
    width: 40%;
    margin-right: 30px;
    object-fit: cover;
  }
</style>
