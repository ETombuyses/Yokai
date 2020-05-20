<template>
  <div>
    <Header
      class="header"
      :title="'Tous nos articles'"
      :textBackground="'ブログ記事'"
    />
    <ul class="list">
      <li class="post" v-for="post in posts" :key="post.id">
        <ArticleListItem :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "../components/Header";
import ArticleListItem from "../components/ArticleListItem";

export default {
  components: {
    Header,
    ArticleListItem
  },
  data() {
    return {
      posts: null
    };
  },
  created() {
    fetch("https://my-json-server.typicode.com/ETombuyses/YokaiDB/posts").then(
      response => {
        // json() pour transformer les data en json
        console.log(response.body);
        response.json().then(data => {
          this.posts = data;
        });
      }
    );
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/style.scss";

.header {
  margin-bottom: 56px;
  width: 100%;
}

.list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  text-align: center;
}

.post {
  position: relative;

  &:not(:last-child) {
    margin-bottom: 60px;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 120px;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: $grey;
  }
}
</style>
