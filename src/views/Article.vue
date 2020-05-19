<template>
  <div v-if="post">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
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

<style scoped>

</style>
