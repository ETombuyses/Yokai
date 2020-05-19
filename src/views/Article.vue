<template>
  <div>
    Article 
    {{ $route.params.slug }}
    <img :src="require(`../assets/images/${this.$route.params.slug}.jpeg`)">
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">

</style>
