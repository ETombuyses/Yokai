<template>
  <article v-if="post">
    <header class="title-section">
      <h1 class="title">{{post.title}}</h1>
      <span class="kanji">{{post.kanji}}</span>
    </header>
    <img :src="require(`../assets/images/${post.img}.jpeg`)" :alt="`yokai ${post.title}`">
    <div class="content">
      <p v-for="(paragraph, index) in post.body" :key="index">{{paragraph}}</p>
    </div>
  </article>
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

@import '../assets/styles/style.scss';

.title-section {
  position: relative;
  margin-bottom: 20px;

  @media screen and (min-width: 500px) {
    margin-bottom: 30px;
  }

  .title {
    text-align: center;
    line-height: 60px;

    @media screen and (min-width: 500px) {
      line-height: 80px;
    }
  }

  .kanji {
    position: absolute;
    font-weight: bold;
    text-align: center;
    width: 100%;
    font-size: 60px;
    color: $red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.2;

    @media screen and (min-width: 500px) {
      font-size: 80px;
    }
  }
}

img {
  height: auto;
  width: 100%;
  margin-bottom: 25px;

  @media screen and (min-width: 500px) {
    width: 100%;
    height: 350px;
    object-fit: none;
    object-position: 60% 30%;
    margin-bottom: 35px;
  }
}


.content {
  max-width: 650px;
  margin: 0 auto;

  p {
    text-align: justify;

    &:not(:last-child) {
     margin-bottom: 30px;
    }
  }
}
</style>
