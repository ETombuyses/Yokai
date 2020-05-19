<template>
  <div class="home">
    <div class="yokai">
      <img src="../assets/images/home.jpg">
      <Header title="Qu’est ce qu’un Yokai ?" textBackground="日本の妖怪" paragraphe="Monstre, créature, esprit, fantôme, objet, démon où tout autre apparition étrange souvent malfaisant ou simplement malicieux du folklore japonais qui incarne les obsessions, les vices, les craintes, les mal-être, les blessures, les rancoeurs et tout état émotionnel compliqué des humains. Ils représentent également des phénomènes naturels, des objets créés par les hommes ou des éléments naturels inanimés (rocher…)."/>
    </div>
    <div class="articles_section">
      <h2>Les nouveaux articles</h2>
      <div class="articles" >
        <ArticleComponent class="article_component" v-for="article in articles" :key="article.id" :article="article" :path="article.path" buttonText="Lire l'article"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ArticleComponent from '@/components/ArticleComponent.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ArticleComponent
  },
  data () {
    return {
      articles: [
        {
          title: "Tengu",
          image: "tengu",
          paragraphe: "Ce sont les équivalents de la culture japonaise de nos ogres ou autres trolls, souvent bleus ou rou...",
          path: "/#/article/1",
        },
        {
          title: "Kurobozu",
          image: "kurobozu",
          paragraphe: "Il apparaît en pleine nuit dans les chambres à coucher et absorbe le souffle des personnes qui y dorment.",
          path: "/#/article/3",
        },
        {
          title: "Wanyudo",
          image: "wanyudo",
          paragraphe: "Wanyudo à l’apparence d’une roue de chariot en feu avec la tête d’un homme au milieu. Il est l’âme damn...",
          path: "/#/article/6",
        },
      ]
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
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.671)), url("../assets/images/background.png") no-repeat center 350px;
    object-fit: cover;
    padding-bottom: 120px;

    .yokai {
      display: flex;
      margin-bottom: 120px;
      margin-top: 60px;
    }
  }

  img {
    width: 40%;
    margin-right: 30px;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    img {
      display: none
    }
    .home {
      padding: 0;
    .yokai {
      margin-bottom: 10px;
      margin-top: 10px;
    }
    }
  }

  .articles_section {
    width: 100%;

    h2 {
      margin-bottom: 30px;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 38px;
    }

    .articles {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 500px) {
        flex-direction: column;
      }

      .article_component{
        width: 25%;
        @media screen and (max-width: 500px) {
          width: 100%;
          padding-bottom: 40px;
        }
      }
    }
  }
</style>
