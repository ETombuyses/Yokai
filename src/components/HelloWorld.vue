<template>
  <div class="hello">
    <h1 v-if="isShow">{{ msg }}</h1>
    <h1 v-else>NOT SHOWED</h1>
    <h1 @click="toggleShow()"> {{ isShow }}</h1>
    <span @click="handleCount()">{{ count }}</span>
    <p>{{ testComputed }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      isShow: false,
      count: 0
    }
  },
  computed: {
    testComputed() {
      if (this.count > 0) {
        this.$emit('titleUpdated', 'Yokai')
        return 'zerooo'
      } else {
        this.$emit('titleUpdated', 'Hello')
        return 'positif'
      }
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('ajouté au DOM')
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    },
    handleCount () {
      if (this.count > 2) this.count = 0
      else this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
