<template>
  <div v-if="post" class="article">
    <img :src="require(`../assets/images/${post.title}.jpeg`)">
    <h3>{{post.title}}</h3>
    <p class="body">{{post.body[0]}}</p>
    <a>{{buttonText}}</a>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    buttonText: String,
  }
}
</script>

<style scoped lang="scss">
div {
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

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: none;
    color: #D90429;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
      border-bottom: 2px #D90429 solid
    }
  }
}
</style>