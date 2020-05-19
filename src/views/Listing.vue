<template>
  <div class="about">
    <h1>This is an listing page</h1>
    <div class="content">
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="`/article/${post.id}`">
          {{post.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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

<style scoped>
  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 33%;
    padding: 10px;
    border: 1px solid black;
  }
</style>
