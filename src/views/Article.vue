<template>
  <div>
    Article 
    <img :src="require(`../assets/images/${this.$route.params.slug}.jpeg`)">
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

<style scoped lang="scss">

</style>
