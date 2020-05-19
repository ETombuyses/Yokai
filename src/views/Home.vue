<template>
  <div class="home">

    <Header 
    v-if="definition" 
    class="header"
    title="Qu’est ce qu’un Yokai ?" 
    textBackground="妖怪とは？" 
    :paragraph="definition" 
    image="yokai.jpg"/>

    <h2 class="newArticles-title">Les nouveaux articles</h2>
    <ul class="articles" v-if="posts">
      <li class="article" v-for="(post, index) in 3" :key="posts[index].id" >
        <ArticleComponent
        class="article-item"
        :key="posts[index].id" 
        :post="posts[index]" 
        buttonText="Lire l'article"/>
      </li>
    </ul>

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

@import '../assets/styles/style.scss';

.header {
  margin-bottom: 50px;
  width: 100%;

  @media screen and (min-width: 500px) {
    margin-bottom: 70px;
  }

  @media screen and (min-width: 850px) {
    margin-bottom: 120px;
  }
}

.newArticles-title {
  margin-bottom: 30px;

  @media screen and (min-width: 800px) {
    margin-bottom: 40px;
  }
}


.articles {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 450px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .article {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    .article-item {
      width: 100%;
    }

    @media screen and (min-width: 450px) {
      width: 48%;

      &:last-child {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 750px) {
      width: 30%;
    }

    @media screen and (min-width: 1000px) {
      width: 26%;
    }
  }
}

</style>
