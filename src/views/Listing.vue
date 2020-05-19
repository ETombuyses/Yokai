<template>
  <div class="listing">
    <Header 
    class="header"
    :title="'Tous nos articles'"
    :textBackground="'ブログ記事'"
    />
    <div class="content">
      <ArticleListItem class="post" v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import ArticleListItem from '../components/ArticleListItem'

export default {
  components: {
    Header,
    ArticleListItem
  },
  data() {
    return {
      posts: null
    }
  },
  created () {
    // fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    //   // json() pour transformer les data en json
    //   response.json().then(data => {
    //     this.posts = data
    //   })
    // })
    fetch('https://my-json-server.typicode.com/ETombuyses/YokaiDB/articles').then(response => {
      // json() pour transformer les data en json
      response.json().then(data => {
        this.posts = data
      })
    })
  }
}
</script>

<style scoped lang="scss">

* {
    box-sizing: border-box;
  }

  .header {
    margin-bottom: 56px;
  }

  .listing {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 100px auto 0;

    .content {
      display: flex;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
    }
  }

  .post {
    position: relative;


    &:not(:last-child) {
      margin-bottom: 60px;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 1px;
      width: 120px;
      background: grey;
      bottom: -30px;
    }
  }
</style>
