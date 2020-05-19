<template>
  <div v-if="post">
    <router-link class="card_link" :to="`/article/${post.id}`">
      <div class="post">
        <h2 class="title">{{post.title}}</h2>
        <p>{{post.body[0]}}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    post: Object
  }
}
</script>
<style lang="scss" scoped>

  .post {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    text-transform: capitalize;

    &:hover .title {
      color: #D90429;
      border-bottom: 2px solid #D90429;
    }

    .title {
      position: relative;
      font-size: 20px;
      margin-top: 0;
      transition: 0.3s;

      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        background: #D90429;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    }

    p {
      margin: 0;
      max-width: 80ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }


</style>