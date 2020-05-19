<template>
  <article v-if="post" class="article">
    <router-link :to="`/article/${post.id}`">
      <img :src="require(`../assets/images/${post.img}.jpeg`)" :alt="`yokai ${post.title}`">
      <h3 class="title">{{post.title}}</h3>
      <p class="body">{{post.body[0]}}</p>
      <span class="link">{{buttonText}}</span>
    </router-link>
  </article>
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

.article {
  cursor: pointer;

  &:hover .link {
    border-bottom: 2px $red solid;
  }
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.title {
  margin-bottom: 10px;
}

.body {
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 120%;

  // elipse ...
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.link {
  font-weight: bold;
  font-size: 14px;
  color: $red;
  transition: 0.3s;
}
</style>