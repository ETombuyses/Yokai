<template>
  <div class="home">
    <HomePrez :msg="title" @titleUpdated="title = $event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePrez from '@/components/HomePrez.vue'

export default {
  name: 'Home',
  components: {
    HomePrez
  },
  data () {
    return {
      title: 'hello'
    }
  }
}
</script>
