<template>
  <div class="home">
    <div class="yokai">
      <img src="../assets/images/home.jpg">
      <Header v-if="definition" title="Qu’est ce qu’un Yokai ?" textBackground="日本の妖怪" :paragraphe="definition"/>
    </div>
    <div class="articles_section">
      <h2>Les nouveaux articles</h2>
      <div class="articles"  v-if="posts" >
        <ArticleComponent class="article_component" v-for="(post, index) in 3" :key="posts[index].id" :post="posts[index]" buttonText="Lire l'article"/>
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
      posts: null,
      definition: null
    }
  },
  created () {
    fetch('https://my-json-server.typicode.com/ETombuyses/YokaiDB/posts').then(response => {
      // json() pour transformer les data en json
      console.log(response.body)
      response.json().then(data => {
        this.posts = data
      })
    })

    fetch('https://my-json-server.typicode.com/ETombuyses/YokaiDB/yokaiDefinition').then(response => {
      // json() pour transformer les data en json
      console.log(response.body)
      response.json().then(data => {
        this.definition = data[0].definition
      })
    })
  }
}
</script>

<style lang="scss" scoped>

  .home {
    width: 100%;
    padding-left: 40px;
    padding-right: 80px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.671)), url("../assets/images/sakana.png") no-repeat center 350px;
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
      @media screen and (max-width: 500px) {
        padding: 20px;
      }
    }
    }
  }

  .articles_section {
    width: 100%;
    @media screen and (max-width: 500px) {
      padding: 20px;
    }

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
