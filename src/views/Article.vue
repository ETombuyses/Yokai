<template>
  <div v-if="post" class="article">
      <h1 class="title">{{post.title}}</h1>
      <p class="content">{{post.body}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: null
    }
  },
  computed: {
  },
  created () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`).then(response => {
      // json() pour transformer les data en json
      response.json().then(data => {
        this.post = data
      })
    })
  }
}
</script>

<style scoped lang="scss">

* {
  box-sizing: border-box;
}

  .article {
    max-width: 800px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
  }

  .content {
    max-width: 650px;
    text-align: center;
    margin: 0 auto;
  }
</style>
