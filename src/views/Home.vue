<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="title" @titleUpdated="title = $event"/>
    <img :src="`/assets/images/${$route.params.slug}.jpeg`" alt=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      title: 'hello'
    }
  }
}
</script>
