<template>
  <div v-if="post" class="article">
      <h1 class="title">{{post.title}}</h1>
      <img :src="require(`../assets/images/${post.img}.jpeg`)">
      <div class="content">
        <p v-for="(paragraph, index) in post.body" :key="index">{{paragraph}}</p>
      </div>
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
    fetch(`https://my-json-server.typicode.com/ETombuyses/YokaiDB/posts/${this.$route.params.slug}`).then(response => {
      // json() pour transformer les data en json
      response.json().then(data => {
        this.post = data
      })
    })
  }
}
</script>

<style scoped lang="scss">

  .article {
    max-width: 1000px;
    margin: 0 auto;
    min-height: 30vh;
    margin-bottom: 60px;

    img {
      width: 100%;
      height: 300px;
      object-fit: none;
      object-position: 50% 30%;
    }
  }

  .title {
    text-align: center;
  }

  .content {
    max-width: 650px;
    text-align: center;
    margin: 0 auto;
  }

  p:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
