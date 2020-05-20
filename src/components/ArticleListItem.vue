<template>
  <div v-if="post">
    <router-link :to="`/article/${post.id}`">
      <article class="post">
        <h2 class="title">{{ post.title }}</h2>
        <p class="body">{{ post.body[0] }}</p>
      </article>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    post: Object
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.post {
  max-width: 800px;
  margin: 0 auto;

  &:hover .title {
    color: $red;
    border-bottom: 2px solid $red;
  }
}

.title {
  position: relative;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid transparent;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background: $red;
    bottom: -17px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
}

.body {
  margin: 0 auto;
  max-width: 500px;

  // elipse ...
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
