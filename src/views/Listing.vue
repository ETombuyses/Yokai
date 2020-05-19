<template>
  <div class="about">
    <Header 
    :title="'Tous nos articles'"
    :textBackground="'ブログ記事'"
    />
    <div class="content">
      <div class="card background1" v-for="post in posts" :key="post.id">
        <router-link class="card_link" :to="`/article/${post.id}`">
          {{post.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      posts: null
    }
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
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

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: center;
  }

  .card {
    margin: 10px;
    width: 45%;
    padding: 10px;
    border: 1px solid black;

    .card_link{
      font-weight: bold;
      text-decoration: none;
      color: #181818;
      transition: border 0.3s;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      
      &:hover {
        border-bottom: 2px #181818 solid;
      }
    }
  }
}
</style>
