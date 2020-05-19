<template>
  <div v-if="post" class="article">
    <router-link :to="`/article/${post.id}`">
      <img :src="require(`../assets/images/${post.img}.jpeg`)">
      <h3>{{post.title}}</h3>
      <p class="body">{{post.body[0]}}</p>
      <p class="link">{{buttonText}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    buttonText: String
    }
}
</script>

<style scoped lang="scss">

 @import '../assets/styles/style.scss';

div {

  a {
    text-decoration: none;
    color: $black;
  }

  img{
    width: 100%;
  }

  h3,p,a {
    margin: 0;
  }

  h3 {
    margin-bottom: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
  }

  p {
    margin-bottom: 16px;
    max-height: 12ch;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 129px;
  }

  .link {
    display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: none;
    color: $red;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
      border-bottom: 2px $red solid;
    }
  }
}
</style>