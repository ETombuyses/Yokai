<template>
  <div>
    Article 
    <img :src="require(`../assets/${$route.params.slug}.png`)">
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>