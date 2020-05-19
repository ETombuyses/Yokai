<template>
  <div v-if="post" class="article">
      <h1 class="title">{{post.title}}</h1>
      <span>{{post.kanji}}</span>
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

* {
  box-sizing: border-box;
}

  .article {
    max-width: 1000px;
    margin: 0 auto;
    min-height: 30vh;
    margin-bottom: 60px;
    position: relative;

    span {
      position: absolute;
      font-weight: bold;
      font-size: 50px;
      top: -15px;
      left: 55%;
      color: rgba(255, 0, 43, 0.274);
      transform: translateX(-50%);
    }

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

    p {
      font-weight: normal;
      font-size: 18px;
      line-height: calc(18px*1.25);
      text-align: justify;
    }
  }

  p:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
