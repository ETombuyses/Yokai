<template>
  <div class="home">
    <HomePrez title="Qu’est ce qu’un Yokai ?" textBackground="モンスター" paragraphe="Monstre, créature, esprit, fantôme, objet, démon où tout autre apparition étrange souvent malfaisant ou simplement malicieux du folklore japonais qui incarne les obsessions, les vices, les craintes, les mal-être, les blessures, les rancoeurs et tout état émotionnel compliqué des humains. Ils représentent également des phénomènes naturels, des objets créés par les hommes ou des éléments naturels inanimés (rocher…)."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePrez from '@/components/HomePrez.vue'

export default {
  name: 'Home',
  components: {
    HomePrez
  },
  data () {
    return {
      title: 'hello'
    }
  }
}
</script>
