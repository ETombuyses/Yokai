<template>
  <div class="home">
    <HomePrez title="Qu’est ce qu’un Yokai ?" textBackground="モンスター" paragraphe="Monstre, créature, esprit, fantôme, objet, démon où tout autre apparition étrange souvent malfaisant ou simplement malicieux du folklore japonais qui incarne les obsessions, les vices, les craintes, les mal-être, les blessures, les rancoeurs et tout état émotionnel compliqué des humains. Ils représentent également des phénomènes naturels, des objets créés par les hommes ou des éléments naturels inanimés (rocher…)."/>
    <div class="articles_section">
      <h2>Les nouveaux articles</h2>
      <div class="articles" >
        <ArticleComponent v-for="article in articles" :key="article.id" :article="article" buttonText="Lire l'article"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePrez from '@/components/HomePrez.vue'
import ArticleComponent from '@/components/ArticleComponent.vue'

export default {
  name: 'Home',
  components: {
    HomePrez,
    ArticleComponent
  },
  data () {
    return {
      articles: [
        {
          title: "Tengu",
          paragraphe: "Demon samourai",
        },
        {
          title: "Kurobozu",
          paragraphe: "Monstre du sommeil",
        },
        {
          title: "Wanyudo",
          paragraphe: "Roue de feu",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  
  .articles_section {
    width: 100%;
    margin: 40px;

    .articles {
      display: flex;
      justify-content: center;
    }
  }


</style>
